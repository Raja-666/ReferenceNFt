import { api } from "../store/baseurl";

const profileApi = api.injectEndpoints({
    endpoints: builder => ({
        
        profileUpdate: builder.mutation({
            query: (formData) => ({
                url: 'user/updateProfile',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['NFTCollection']
        }),
        getProfile: builder.mutation({
            query: (body) => ({
                url: 'user/getProfile',
                method: 'POST',
                body: {...body}
            }),
            invalidatesTags: ['get-profile']
        }),
    })
})

export const { useProfileUpdateMutation , useGetProfileMutation} = profileApi
