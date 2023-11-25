import { useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Image from "next/image";

const API_KEY = "";

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
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="grid grid-cols-1 p-5 gap-5">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="group">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={800}
            alt={`<${movie.original_title}> poster`}
            className="rounded-xl transition-transform transform-gpu group-hover:scale-105 group-hover:translate-y-[-10px] duration-200 shadow-md"
          />
          <h4 className="text-center text-lg">{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
