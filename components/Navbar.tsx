import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header
      className="flex flex-row justify-start items-center bg-primary rounded-tr-full rounded-bl-full
       py-8  border-2 border-border/40 w-full px-10 max-w-[1200px] mx-auto shadow-2xl h-20 "
    >

      <Image
        src={"/snake.png"}
        alt="Logo"
        className="w-20 h-20 p-4  "
        width={20}
        height={20}
        priority
      />
      <h1 className="text-5xl md:text-6xl  text-primary-foreground pr-6 drop-shadow-lg uppercase font-thin font-serif py-4 pt-6 ">
        syro
      </h1>
      <span className="text-primary-foreground font-light m-5">
        <Link href="/">Home</Link>
      </span>
      <span className="text-primary-foreground font-light m-5">
        <Link href="/shop">Shop</Link>
      </span>
      <span className="text-primary-foreground font-light m-5">
        <Link href="/contact">Contact</Link>
      </span>
      <span className="text-primary-foreground font-light m-5">
        <Link href="/about">About</Link>
      </span>
    </header>
  );
}
