import PrimaryNavbar from "@/components/PrimaryNavbar";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import TextReveal from "@/components/TextReveal";

import SmallScreenImg from "@/assets/ic-logo.png";
import BigScreenImg from "@/assets/img-college.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-orange-500/30">
      <PrimaryNavbar />
      {/* hero */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 transition-all md:flex-row md:gap-4">
        <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
            <h1 className="text-4xl font-semibold md:text-6xl">
              <TextReveal>
              <div>
              <Balancer>
                Gyan Ganga College of Excellence
              </Balancer>
              </div>
              </TextReveal>
            </h1>
            <p className="text-neutral-400 md:max-w-[400px]">
              <TextReveal>
              <Balancer>
                Welcome to GGCE, the best college in Jabalpur for Management
              </Balancer>
              </TextReveal>
            </p>
        </div>

        {/* right section */}
        <section className="md:w-1/2">
          <div className="h-full flex flex-col items-center justify-center">
            <Image
              className="hidden h-auto max-w-[450px] md:block hover:scale-110 transition duration-300 shadow-lg"
              src={BigScreenImg}
              alt="hero-image"
            />
          </div>
          <div className="flex justify-center">
            <Image
              className="h-auto max-w-[400px] md:hidden "
              src={SmallScreenImg}
              alt="hero-image"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
