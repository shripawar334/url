import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center mt-10 md:mt-20 px-4">
          <p className="text-2xl md:text-3xl font-bold text-center">
            The best URL shortener in the Market
          </p>
          <p className="w-full text-lg md:text-xl text-center">
            Shorten your long links in seconds.  
            Share easily and track clicks with our simple tool.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <Link href={"/shorten"}>
              <button
                className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white animate-bounce hover:scale-110 transition-transform duration-200 text-center"
              >
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start relative h-[220px] md:h-[350px] mt-6 md:mt-10">
          <Image
            className="mix-blend-darken"
            alt="an Image of a vector"
            src={"/vector.jpg"}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </main>
  );
}
