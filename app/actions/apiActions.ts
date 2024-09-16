"use server"

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import ApolloClient from "../lib/ApolloClient";
import { revalidatePath } from "next/cache";

export async function getPodcast(input: String) {

  const { data } = await ApolloClient.query({
    series(name: input) {
      name
      imageUrl
      genres
      websiteUrl
      authorName
    }
  
  });

}