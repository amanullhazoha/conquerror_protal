import apiSlice from "../api/apiSlice";
import { login } from "./authSlice";

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
	}),
});

export const {
	useUserLoginMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
} = authApi;

export default authApi;
