import apiSlice from "../api/apiSlice";

const applicationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllApplications: builder.query({
      query: ({ filter, searchQuery = "", page = 1, size = 24 }) =>
        `/api/v1/secure/career/jobs?search=${searchQuery}&page=${page}&size=${size}&filter=${filter}`,
      providesTags: ["Applications"],
    }),

    getAllNewApplications: builder.query({
      query: ({ filter, searchQuery = "", page = 1, size = 24 }) =>
        `/api/v1/secure/career/jobs/new-application?search=${searchQuery}&page=${page}&size=${size}&filter=${filter}`,
      providesTags: ["Applications"],
    }),

    getAllInterviewApplications: builder.query({
      query: ({ searchQuery = "", page = 1, size = 24, status }) =>
        `/api/v1/secure/career/jobs/interview?search=${searchQuery}&page=${page}&size=${size}&status=${status}`,
      providesTags: ["Applications"],
    }),

    getApplicationById: builder.query({
      query: (id) => `/api/v1/secure/career/jobs/${id}`,
      providesTags: ["Application"],
    }),

    updateApplicationById: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/secure/career/jobs/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Applications", "Application"],
    }),

    getApplicantInterviewDetail: builder.query({
      query: ({ id }) => `/api/v1/secure/meeting/${id}`,
      providesTags: ["Applications", "Application"],
    }),

    createZoomMeetingByUserId: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/secure/zoom-meeting/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Applications", "Application"],
    }),

    createInPersonMeetingByUserId: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/secure/in-person-meeting/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Applications", "Application"],
    }),

    applicationStatusUpdateByID: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/secure/career/jobs-status-update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Applications", "Application"],
    }),
  }),
});

export const {
  useGetAllApplicationsQuery,
  useGetApplicationByIdQuery,
  useGetAllNewApplicationsQuery,
  useUpdateApplicationByIdMutation,
  useGetApplicantInterviewDetailQuery,
  useGetAllInterviewApplicationsQuery,
  useCreateZoomMeetingByUserIdMutation,
  useApplicationStatusUpdateByIDMutation,
  useCreateInPersonMeetingByUserIdMutation,
} = applicationsApi;

export default applicationsApi;
