import apiSlice from "../api/apiSlice";

const applicationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllApplications: builder.query({
      query: ({ searchQuery = "", page = 1, size = 24 }) =>
        `/api/v1/secure/career/jobs?search=${searchQuery}&page=${page}&size=${size}`,
      providesTags: ["Applications"],
    }),
    getAllNewApplications: builder.query({
      query: ({ searchQuery = "", page = 1, size = 24 }) =>
        `/api/v1/secure/career/jobs/new-application?search=${searchQuery}&page=${page}&size=${size}`,
      providesTags: ["Applications"],
    }),
    getAllInterviewApplications: builder.query({
      query: ({ searchQuery = "", page = 1, size = 24 }) =>
        `/api/v1/secure/career/jobs/interview?search=${searchQuery}&page=${page}&size=${size}`,
      providesTags: ["Applications"],
    }),
    getApplicationById: builder.query({
      query: (id) => `/api/v1/secure/career/jobs/${id}`,
      providesTags: ["Applications"],
    }),
    updateApplicationById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/secure/career/jobs/${id}`,
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
  useGetAllNewApplicationsQuery,
  useUpdateApplicationByIdMutation,
  useGetAllInterviewApplicationsQuery,
} = applicationsApi;

export default applicationsApi;
