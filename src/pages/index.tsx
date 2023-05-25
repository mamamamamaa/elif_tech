import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to ElifTech Delivery!
      </h1>
      <p className="text-lg text-center mb-8">
        We are a leading food delivery company, providing delicious meals right
        to your doorstep.
      </p>
      <Link
        href="/shot"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Order Now
      </Link>
    </div>
  );
}
