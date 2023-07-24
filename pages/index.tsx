import Navbar from "@/components/Navbar";
import Head from "next/head";
import LeftSide from "@/components/LeftSide";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kareem Davis II</title>
        <meta name="description" content="Kareem Davis II Portfolio" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div>
            <LeftSide />
          </div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
}
