import { api } from "../store/baseurl";

const walletApi = api.injectEndpoints({
    endpoints: builder => ({
        
        WalletConnectusers: builder.mutation({
            query: (formData) => ({
                url: 'user/connectedusers',
                method: 'POST',
                body: formData
            }),
            invalidatesTags: ['NFTCollection']
        }),
        Walletaddresdetails: builder.mutation({
            query: (body) => ({
                url: 'user/connectuserdetails',
                method: 'POST',
                body: {...body}
            }),
            invalidatesTags: ['get-profile']
        }),
    })
})

export const { useWalletConnectusersMutation , useWalletaddresdetailsMutation} = walletApi
