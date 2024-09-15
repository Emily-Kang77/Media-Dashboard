
import prisma from "@/app/lib/db";

// params will have the id
export default async function PodcastPage({ params }) {
  // runs onl on server, so not exposing prisma to client. render result is sent to client
  // but id is not unique! 
  // get slug to work later 
  const podcast = await prisma.podcast.findUnique({
    where: {
      id: params.id
    }
  })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <h1 className="text-3xl font-semibold">{podcast?.title}</h1>

      <p>{podcast?.userReview}</p>
      
    </div>

  );
}