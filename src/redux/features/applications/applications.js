const { default: apiSlice } = require("../api/apiSlice");

const applicationsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllApplications: builder.query({
			query: () => "/secure/career/jobs",
			providesTags: ["Applications"],
		}),
		getApplicationById: builder.query({
			query: (id) => `/secure/career/jobs/${id}`,
			providesTags: ["Applications"],
		}),
		updateApplicationById: builder.mutation({
			query: ({ id, data }) => ({
				url: `/secure/career/jobs/${id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Applications"],
		}),
	}),
});

export const {
	useGetAllApplicationsQuery,
	useGetApplicationByIdQuery,
	useUpdateApplicationByIdMutation,
} = applicationsApi;

export default applicationsApi;
