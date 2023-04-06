"use client";
import React from "react";

const ContactPage = () => {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <main className="my-auto h-[calc(100vh-64px)]">
      <div className="flex h-full justify-center items-center">
        <div className="w-2/5">
          <h1 className="text-4xl text-black text-center">
            함께
            <br /> 만들어 가요
          </h1>
        </div>
        <form className="w-3/5 p-10" onSubmit={onSubmit}>
          <label htmlFor="name" className="my-2">
            이름
          </label>
          <input
            id="name"
            className="my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-md focus:ring-1"
            placeholder="당신의 이름을 입력해주세요"
          />
          <label htmlFor="email" className="my-2">
            이메일 <span className="text-rose-500 align-middle">*</span>
          </label>
          <input
            id="email"
            className="my-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-md focus:ring-1"
            placeholder="이메일을 입력해주세요"
          />
          <label htmlFor="email" className="my-2">
            내용 <span className="text-rose-500 align-middle">*</span>
          </label>
          <textarea
            className="my-2 px-3 py-2 w-full border shadow-sm border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1 sm:text-md min-h-[200px]"
            placeholder="내용을 입력해주세요"
          />

          <div className="flex justify-end pt-5">
            <button
              className="my-2 px-5 py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600"
              type="submit"
            >
              보내기
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
