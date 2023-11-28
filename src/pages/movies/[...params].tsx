import { useRouter } from "next/router";

type TMovieDetailParams = [string, number];

export default function Detail() {
  const router = useRouter();
  const [title, id] = (router.query.params as TMovieDetailParams) || [];
  // console.log(router);
  return (
    <>
      <h4 className="block py-10 text-center text-xl font-semibold">{title}</h4>
    </>
  );
}
