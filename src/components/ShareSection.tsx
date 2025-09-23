"use client";

import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import copy from "copy-to-clipboard";

export default function InvitationSection() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.Kakao &&
      !window.Kakao.isInitialized()
    ) {
      window.Kakao.init("ab79b565d2a567a804647a16d8bdbba2");
    }
  }, []);

  const copyLink = async () => {
    const url = "https://www.nebula-wedding-invitation.com/";
    copy(url);
  };

  const handleShare = () => {
    if (!window.Kakao) {
      alert("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Link.sendCustom({
      templateId: 124500,
      templateArgs: {
        title: "채성옥 ♥ 김정운 결혼합니다.",
        date: "25년 11월 8일 토요일 오후 3시 30분 르비르모어 클리타홀",
      },
    });
  };
  return (
    <section
      className="h-[300px] gap-10 flex items-center justify-center relative"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex flex-col gap-2 justify-center item-center">
        <m.button
          onClick={handleShare}
          className="flex flex-col justify-center items-center h-[65px] w-[65px] bg-yellow-300 rounded-full shadow-md"
        >
          <Image
            src="/images/kakao.svg"
            width="30"
            height="30"
            alt="카카오톡 공유하기"
          />
        </m.button>
        <span className="text-black font-gowun-dodum">공유하기</span>
      </div>
      <div className="flex flex-col gap-2 justify-center item-center">
        <m.button
          onClick={copyLink}
          className="flex justify-center items-center h-[65px] w-[65px] bg-gray-400 rounded-full shadow-md active:bg-gray-500 transition duration-400"
        >
          <FontAwesomeIcon icon={faShareNodes} />
        </m.button>
        <span className="text-black font-gowun-dodum">링크 복사</span>
      </div>
    </section>
  );
}
