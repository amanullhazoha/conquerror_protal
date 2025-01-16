import { logout, login } from "../auth/authSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_API_URL,

  prepareHeaders: async (headers, { getState }) => {
    const token = sessionStorage.getItem("accessToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    const token = sessionStorage.getItem("accessToken");

    if (result?.error?.status === 401 || result?.error?.status === 403) {
      api.dispatch(logout());
    } else if (token) {
      const refreshResult = await baseQuery(
        {
          url: "/api/v1/secure/refresh-token",
        },
        api,
        extraOptions
      );

      if (refreshResult?.data) {
        const newAccessToken = refreshResult.data.refresh_token;

        sessionStorage.setItem("accessToken", newAccessToken);

        api.dispatch(
          login({ accessToken: newAccessToken, isAuthenticated: true })
        );
      }
    }

    return result;
  },
  tagTypes: ["Applications"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
