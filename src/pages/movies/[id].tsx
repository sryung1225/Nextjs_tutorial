import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h2>Detail</h2>
      <p>{router.query.id}</p>
    </>
  );
}
