import apiSlice from "../api/apiSlice";
import { login, logout } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/api/v1/public/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            login({
              isAuthenticated: true,
              accessToken: result.data.access_token,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log("Error: -> ", error);
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/api/v1/public/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/api/v1/public/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    agentRegistration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/public/agent-registration",
        method: "POST",
        body: data,
        headers: {
          "Content-Type":
            data instanceof FormData ? undefined : "application/json",
        },
      }),
    }),
    employeeRegistration: builder.mutation({
      query: (data) => ({
        url: "/api/v1/public/employee-registration",
        method: "POST",
        body: data,
        headers: {
          "Content-Type":
            data instanceof FormData ? undefined : "application/json",
        },
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useResetPasswordMutation,
  useForgotPasswordMutation,
  useAgentRegistrationMutation,
  useEmployeeRegistrationMutation,
} = authApi;

export default authApi;
