import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();

  console.log(router.asPath);

  return <>{router.asPath}</>;
}
