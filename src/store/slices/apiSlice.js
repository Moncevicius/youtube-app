import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://youtube.googleapis.com/youtube/v3/' }),
    reducerPath: 'youtubeApi',
    endpoints: (build) => ({
        getSearchVideos: build.query({
            query: (name) => `search?part=snippet&maxResults=25&q=${name}&key=AIzaSyBmElZ9ge2kU2ERs3MYDz--wxKk593n6B0`,
        }),
    }),
})

export const { useGetSearchVideosQuery } = api