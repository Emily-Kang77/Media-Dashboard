// import Image from "next/image";
// import { Prisma } from "@prisma/client";

import Link from "next/link";
import prisma from "@/app/lib/db";
import { createPodcast } from "./actions/actions";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default async function Home() {
  // runs onl on server, so not exposing prisma to client. render result is sent to client.
  const podcasts = await prisma.podcast.findMany({

    orderBy: {
      createdAt: "desc",
    },

    // can select specific attributes. so you dont retrieve user's password!

    // consider adding pagination
  });

  const postsCount = await prisma.podcast.count();

  return (
    // dont use podcasts.length because you can only retrieve 10, whil ehaving a lot more 
  
    <div className="grid grid-rows-[20px_1fr_20px] p-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <div className="mb-10">
        <SearchBar/>

        <h1>ALL PODCASTS ({postsCount})</h1>
      </div>
      
      
      

      {podcasts.map((podcast) => (
        <li key={podcast.id} className="flex items-center m-5">
          <Link className="text-blue-600" href={`/podcasts/${podcast.id}`}>
            {podcast.title}
          </Link>
        </li>
      ))}

      <h1>Add a new subscription:</h1>
      <form action={createPodcast} className="max-w-md mx-auto p-4 border mt-10 border-gray-300 rounded-lg shadow-md">
        <label className="block mb-2">Title:</label>
        <input type="text" id="title" name="title" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <label className="block mb-2">Creator:</label>
        <input type="text" id="creator" name="creator" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
        <label className="block mb-2">Your review:</label>
        <textarea id="userReview" name="userReview" className="w-full p-2 mb-4 border border-gray-300 rounded-lg"></textarea>
        <input type="submit" value="Submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"/>
      </form>

    </div>
  );
}
