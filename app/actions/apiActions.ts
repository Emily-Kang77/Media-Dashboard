// "use server"

// import { gql } from 'graphql-tag';
// import { imageConfigDefault } from "next/dist/shared/lib/image-config";
// import ApolloClient from "../lib/ApolloClient";
// import { revalidatePath } from "next/cache";


// const handleSubmit = (input: String) => {
//   // Uh oh... mixing server and client stuff. 
//   const GET_PODCAST = gql`
//     query getPodcastSeries(name: input) {
//       uuid 
//       episodes(sortOrder:LATEST, page:1, limitPerPage:10){
//         uuid
//         name
//         description
//         audioUrl
//       }
//     }
//   `;
// }

// export async function getPodcast(input: String) {

//   const { data } = await ApolloClient.query({
//     series(name: input) {
//       name
//       imageUrl
//       genres
//       websiteUrl
//       authorName
//     }
  
//   });

// }