import { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Image from "next/image";

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

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("api/movies")).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="grid grid-cols-2 p-5 gap-5 shadow-lg">
      <Seo title="Home" />
      {!movies.length && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="group">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={800}
            alt={`<${movie.original_title}> poster`}
            className="rounded-xl shadow-md transition-transform transform-gpu group-hover:scale-105 group-hover:translate-y-[-10px] duration-200"
          />
          <h4 className="text-center text-lg font-semibold">
            {movie.original_title}
          </h4>
        </div>
      ))}
    </div>
  );
}
