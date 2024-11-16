"use client";
import presentation from "@/data/presentation";
import React from "react";

export function LinkPreviewDemo() {
  return (
    <ul role="list" className="flex flex-row gap-2">
      <ul className="flex gap-2">
        {presentation.socials.map((social, index) => (
          <React.Fragment key={index}>
            <li className="group relative">
              <a href={social.link} className="hover:text-orange-500">
                {social.label}
              </a>

              <div
                className="invisible absolute left-0  top-10 z-10 w-96 max-w-none rounded-xl bg-zinc-800  p-2
                opacity-0 transition ease-in-out group-hover:visible group-hover:opacity-100"
              >
                <img
                  src={social.imageSrc}
                  alt=""
                  className="rounded-xl"
                  width={500}
                />
              </div>
            </li>

            {presentation.socials.length - 1 !== index && <li>/</li>}
          </React.Fragment>
        ))}
      </ul>
    </ul>
  );
}
