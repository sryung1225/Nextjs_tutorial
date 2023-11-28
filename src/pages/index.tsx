import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Seo from "@/components/Seo";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="grid grid-cols-2 p-5 gap-5 shadow-lg">
      <Seo title="Home" />
      {results?.map((movie: IMovie) => (
        <div
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
          className="group cursor-pointer"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={800}
            alt={`<${movie.original_title}> poster`}
            className="rounded-xl shadow-md transition-transform transform-gpu group-hover:scale-105 group-hover:translate-y-[-10px] duration-200"
          />
          <h4 className="block text-center text-lg font-semibold">
            {movie.original_title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
