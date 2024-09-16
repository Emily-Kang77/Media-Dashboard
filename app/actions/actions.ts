"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function createPodcast(formData: FormData) {

  const userReview = formData.get("userReview");
  console.log(userReview);
  
  await prisma.podcast.create({
    data: {
      title: formData.get("title") as string,
      userReview: formData.get("userReview") || "",
      creator: formData.get("creator") || "",
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
    }
  })

  revalidatePath("/podcasts");
}

export async function editPodcast(formData: FormData, id: string) {
  
  await prisma.podcast.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      userReview: formData.get("userReview") || "",
      creator: formData.get("creator") || "",
      slug: (formData.get("title") as string).replace(/\s+/g, "-").toLowerCase(),
    }
  })

  revalidatePath("/podcasts");
}

export async function deletePodcast(id: string) {
  await prisma.post.delete({ where: { id }});

  revalidatePath("/podcasts");
}