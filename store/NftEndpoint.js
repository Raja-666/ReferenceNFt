import {api} from "../store/baseurl";
 
const Nftcreate = api.injectEndpoints({
    endpoints: (builder) => ({
        Tokencreate: builder.mutation({
            query: (formData) => ({
              url: "user/Nftcreate",
              method: "POST",
              body: formData,
            }),
            invalidatesTags: ["NFTCollection"],
    }),
  }),
})
  
export const { useTokencreateMutation } = Nftcreate