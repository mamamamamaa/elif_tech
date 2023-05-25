import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();

  const data = location.pathname;
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
