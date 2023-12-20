import {api} from "../store/baseurl";
 
const NeuroNFT = api.injectEndpoints({
    endpoints: (builder) => ({


      nftCreate: builder.mutation({
        query: (collData) => ({
          url: "/nft-collection/Createcollection",
          method: "POST",
          body: {...collData},
          formData:true
        }),
        invalidatesTags: ["NFTCollection"],
      }),


      SubmitKYC: builder.mutation({
        query: (NeuroNFT) => ({
          url: "/kyc/submitKYC",
          method: "POST",
          body: NeuroNFT,
        }),
        invalidatesTags: ["NFTCollection"],
      }),

      collectionList: builder.mutation({
        query: (collData) => ({
          url: "/nft-collection/CollectionList",
          method: "POST",
          body: collData,
          formData:true
        }),
        invalidatesTags: ["NFTCollectionList"],
      }),
      
      createNFT: builder.mutation({
        query: (collData) => ({
          url: "/choosecollection/CreateNft",
          method: "POST",
          body: collData,
          formData:true
        }),
        invalidatesTags: ["NFTCollectionList"],
      }),

      homeColList: builder.mutation({
        query: (collData) => ({
          url: "/nft-collection/get-collection",
          method: "POST",
          body: collData,
          formData:true
        }),
        invalidatesTags: ["home-col-list"],
      }),

      fullColList: builder.mutation({
        query: (collData) => ({
          url: "/nft-collection/view-collection",
          method: "POST",
          body: {...collData},
          formData:true
        }),
        invalidatesTags: ["full-col-list"],
      }),


    })
  });
  // 
export const {useNftCreateMutation, useSubmitKYCMutation , useCollectionListMutation, useCreateNFTMutation , useHomeColListMutation , useFullColListMutation } = NeuroNFT;