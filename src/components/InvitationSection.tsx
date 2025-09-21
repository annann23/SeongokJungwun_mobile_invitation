'use client';

import { motion as m } from 'motion/react';

export default function InvitationSection() {
  return (
    <section className="h-[1900px] flex flex-col items-center justify-center relative" style={{ backgroundColor: '#ffffff' }}>
      <div className="w-full h-full absolute inset-0" style={{
        background: 'linear-gradient(180deg, #000000 0%, #ffffff 50%, #ffffff 100%)'
      }}></div>
      <div className="relative z-10">
        <div className='h-[600px] text-[#ffffff] flex flex-col items-center justify-center'>
          <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            사랑은 두 사람이
          </m.div>
          <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            마주 쳐다보는 것이 아니라
          </m.div>
          <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            함께 같은 방향을 바라보는 것이다
          </m.div>
          <m.div 
            className='text-sm text-center my-8 font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            - 생텍쥐페리 -
          </m.div>
        </div>
     
        <div className='h-[1300px] text-black flex flex-col items-center justify-center w-screen px-[30px]'>
          <m.img
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.3 }}
            src="/images/wedding_img/img_main.jpg" 
            alt="invitation" 
            className='relative w-full h-auto object-cover max-w-[500px]'
          />
          <m.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black text-[32px] text-center mb-4 mt-12 font-noto-serif-kr"
          >
            초대합니다
          </m.h1>  
          <m.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black text-[14px] my-[4px] text-center font-noto-serif-kr"
          >
            저희 두 사람의 새로운 시작을 <br/>귀한 발걸음으로 축복해주시면 <br/> 더없는 기쁨이 되겠습니다.
          </m.h3>   
          <m.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black text-[14px] my-[30px] text-center font-noto-serif-kr"
          >
            신랑 채성옥 · 신부 김정운
          </m.h3>     
          <m.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-black text-[16px] font-[600] text-center my-[4px] font-noto-serif-kr"
          >
            2025. 11. 8 토요일 15:30<br/>르비르모어 클리타홀
          </m.h3>
        </div>
      </div>
    </section>
  );
}
