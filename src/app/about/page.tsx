"use client";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <div className="flex w-full h-[calc(100vh-64px)] bg-[url('/about.jpg')] bg-cover justify-center items-center">
        <h1 className="text-8xl text-white text-center">
          I&apos;m a frontend
          <br /> developer!👻
        </h1>
      </div>

      <div className="flex pt-10 mx-auto max-w-screen-xl">
        <div className="w-1/2">
          <Image
            src="https://graph.facebook.com/4071204506303656/picture"
            width={200}
            height={200}
            alt="profile"
            className="rounded-lg mx-auto "
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <span className="text-4xl font-bold">Hi I&apos;m Yong</span>
          <br />

          <span className="text-xl text-slate-400 pt-[20px]">
            in charge of Android, iOS, Web frontend
            <br />
            Have a happy coding!🎉
          </span>
        </div>
      </div>

      <div className="pb-[200px]"></div>
    </main>
  );
};

export default AboutPage;
