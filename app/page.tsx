import type { Metadata } from "next";

import AnimatedComponent from "@/app/_components/AnimatedComponent";

export const metadata: Metadata = {
  title: "Invitatie 'Nunta Ama & Andrei'",
  description: "Invitatia ta la nunta.",
};

import Hero from "@/app/_components/Hero";
import RSVPForm from "@/app/_components/RSVPForm";
import MasonryGrid from "@/app/_components/MasonryGrid";
import Parents from "@/app/_components/Parents";
import Location from "@/app/_components/Location";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <Hero />
      <AnimatedComponent>
        <Parents />
      </AnimatedComponent>
      <AnimatedComponent>
        <Location />
      </AnimatedComponent>
      <AnimatedComponent>
        <RSVPForm />
      </AnimatedComponent>
      <AnimatedComponent>
        <MasonryGrid />
      </AnimatedComponent>
    </main>
  );
}
