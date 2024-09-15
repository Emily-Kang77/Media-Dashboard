"use server";

import prisma from "@/app/lib/db";

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
}