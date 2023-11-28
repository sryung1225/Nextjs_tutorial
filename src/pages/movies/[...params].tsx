import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  // console.log(router);
  return (
    <>
      <h4>{title}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
