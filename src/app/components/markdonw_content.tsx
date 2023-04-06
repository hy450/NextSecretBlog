"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BlogData } from "@/app/data/model/BlogData";

type Props = {
  markdown: string | null;
};

const MarkDownContentView = ({ markdown }: Props) => {
  if (!markdown) {
    // empty page
    return <></>;
  }
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // img: (image) => (
        //   <Image
        //     src={image.src || ""}
        //     alt={image.alt || ""}
        //     width={500}
        //     height={300}
        //   />
        // ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkDownContentView;
