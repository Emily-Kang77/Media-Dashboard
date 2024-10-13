// import Image from "next/image";
// import { Prisma } from "@prisma/client";

import Link from "next/link";
import prisma from "@/app/lib/db";
import { createMedia } from "../actions/actions";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import AddSubscription from "../components/AddSubscription";
import { supabase, supabaseAdmin } from "../lib/supabase";

/**
 * The root page of the app, which displays all the podcasts and allows searching and adding a subscription.
 * @returns The JSX element for the home page.
 */
export default async function Home(): Promise<JSX.Element> {

  // runs onl on server, so not exposing prisma to client. render result is sent to client.
  // const mediums = await prisma.media.findMany({
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  // let data: Media[] = [];
  
  const {data, error} = await supabase.from('Media').select('*');
  if(data) {
    console.log(data)
  } else {
    console.log(error)
  }

  // const counts: number = data.count
  // const postsCount = await prisma.media.count();

  return (
    <div className="p-5 sm:p-20">
      
      <div className="mb-10">
        <SearchBar/>
        
      </div>

      <h1>ALL PODCASTS</h1>
      
      <div className="mt-20">
      {data?.map((media: Media) => (
        <li key={media.id} className="flex items-center m-2">
          <Link className="text-blue-600" href={`/media/${media.id}`}>
            {media.title}
          </Link>
          <button>Edit</button>
        </li>
      ))}
      </div>

      <h1>Add a subscription</h1>

      <AddSubscription />

    </div>
  );
}
