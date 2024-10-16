import apiSlice from "../api/apiSlice";

const applicationsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllApplications: builder.query({
			query: ({ searchQuery = "", page = 1, size = 10 }) =>
				`/api/v1/secure/career/jobs?search=${searchQuery}&page=${page}&size=${size}`,
			providesTags: ["Applications"]
		}),
		getApplicationById: builder.query({
			query: (id) => `/api/v1/secure/career/jobs/${id}`,
			providesTags: ["Applications"]
		}),
		updateApplicationById: builder.mutation({
			query: ({ id, data }) => ({
				url: `/api/v1/secure/career/jobs/${id}`,
				method: "PUT",
				body: data
			}),
			invalidatesTags: ["Applications"]
		})
	})
});

export const {
	useGetAllApplicationsQuery,
	useGetApplicationByIdQuery,
	useUpdateApplicationByIdMutation
} = applicationsApi;

export default applicationsApi;
