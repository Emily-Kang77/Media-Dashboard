"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "../lib/supabase.js";

export async function createSupabaseMedia(formData: FormData) {
  const {data, error} = await supabaseAdmin.from('media').insert([
    {
      title: formData.get("title") as string,
      userReview: formData.get("userReview") || "",
      creator: formData.get("creator") || "unknown",
      type: formData.get("type") as string || "unknown",
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
    }
  ])
}

// export async function createPodcast(formData: FormData) {

//   const userReview = formData.get("userReview");
//   console.log(userReview);
  
//   await prisma.podcast.create({
//     data: {
//       title: formData.get("title") as string,
//       userReview: formData.get("userReview") || "",
//       creator: formData.get("creator") || "",
//       slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
//     }
//   })

//   revalidatePath("/podcasts");
// }


export async function createMedia(formData: FormData) {
  await prisma.media.create({
    data: {
      title: formData.get("title") as string,
      userReview: formData.get("userReview") || "",
      creator: formData.get("creator") || "",
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase()
    }
  })
}

export async function editMedia(formData: FormData, id: string) {
  await prisma.media.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      userReview: formData.get("userReview") || "",
      creator: formData.get("creator") || "",
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
    } 
  })
}

// export async function editPodcast(formData: FormData, id: string) {
  
//   await prisma.podcast.update({
//     where: { id },
//     data: {
//       title: formData.get("title") as string,
//       userReview: formData.get("userReview") || "",
//       creator: formData.get("creator") || "",
//       slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
//     }
//   })

//   revalidatePath("/podcasts");
// }

export async function deleteMedia(id: string) {
  await prisma.media.delete({ where: { id } });
  revalidatePath("/media")
}

// export async function deletePodcast(id: string) {
//   await prisma.post.delete({ where: { id }});

//   revalidatePath("/podcasts");
// }