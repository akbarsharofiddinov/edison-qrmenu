import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

interface getAllCategoriesResponse {
  status: boolean;
  message: string;
  data: ICategory[];
}

export const storeAPI = createApi({
  reducerPath: "storeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qrmenu.celavi.uz/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => `/products`,
    }),

    getAllCategories: builder.query<getAllCategoriesResponse, void>({
      query: () => `/categories`,
    }),

    getCategory: builder.query<{ data: ICategory }, number>({
      query: (category_id) => `/categories/${category_id}`,
    }),

    getProductsByCategoryId: builder.query<{ data: IProduct[] }, number>({
      query: (category_id) => `/products/?category_id=${category_id}`,
    }),

    getSubCategoryProducts: builder.query<{ data: IProduct[] }, number>({
      query: (subcategory_id) => `/products/?subcategory_id=${subcategory_id}`,
    }),

    // Post Feedback

    postFeedback: builder.mutation<any, Feedback>({
      query: ({ rate, message }) => ({
        url: `/feedback/?rating=${rate}&message=${message}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
  usePostFeedbackMutation,
  useGetSubCategoryProductsQuery,
} = storeAPI;
