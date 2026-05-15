import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/typography";

export const NotFound: React.FC = () => {
  return (
    <section className="container-page flex min-h-[60svh] flex-col items-center justify-center py-32 text-center">
      <Eyebrow className="justify-center mb-4">404</Eyebrow>
      <h1 className="font-serif text-[2.5rem] leading-tight tracking-[-0.02em] text-foreground md:text-[4rem]">
        This page is <em className="italic text-emphasis">missing</em>.
      </h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground">
        The page you requested doesn't exist — or has moved. The home page is a
        good place to land.
      </p>
      <Link to="/" className="btn-pill-outline mt-8">
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to home
      </Link>
    </section>
  );
};
