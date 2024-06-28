import Link from "next/link";
import Navbar from "./components/navbar"
import Head from "next/head";

export default function Home() {
  return (<>
   <Navbar></Navbar>
    <div className="bg-custom-gradient h-screen w-full">
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        {/* Add custom fonts or icons here */}
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Biology Before Exams</h1>
        <p className="text-xl text-white mt-4 md:text-2xl lg:text-3xl">Get The Best Possible Biology Education</p>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md mt-8 focus:outline-none hover:bg-blue-700">
        <Link href={"https://www.youtube.com/watch?v=X8fN6klOF80"} target="_blank">Youtube</Link>
        </button>
      </section>
  
    </div>
    </div>
    </>
  );
}
