import { motion as m } from "motion/react";

export default function AboutUsSection() {
  return (
    <section className='min-h-screen h-[800px] relative flex flex-col items-center justify-center bg-white text-black font-gowun-dodum'>
      <m.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-black text-4xl text-center mb-8 font-scope-one">About Us</m.h1>
        <m.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        className='text-black text-xl text-center mb-8'>저희 커플을 소개합니다</m.h3>
        <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
        className='text-black text-md text-center mb-12'> 
          <h3>천문우주학과에서 선후배로 만났어요!</h3>
          <h3>하지만 CC는 아니었고 졸업 후에 만났답니다🤗</h3>
          <h3>이제 둘 다 천문학 안 하는건 비밀(쉿)</h3>
        </m.div>
        

        <m.div 
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.6 }}
        className='text-black text-md text-center mb-8'>
          채종재 · 강외숙의 든든한 첫째
          <div className='font-bold text-lg mb-2'> <span className='text-blue-300'>신랑</span> 채성옥 🐶</div>
          <div>1993년 2월 출생</div>
          <div>#기계공학 #대학원 #예비박사님</div>
        </m.div>
        
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.8 }}
        className='text-black text-md text-center mb-8'>
          김봉현 · 전선자의 똑부러진 둘째 
          <div className='font-bold text-lg mb-2'> <span className='text-red-300'>신부</span> 김정운 🐱</div>
          <div>1995년 10월 출생</div>
          <div>#하고싶은거많은 #프론트엔드 #개발자</div>
        </m.div>

        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 1 }}
        className='text-black text-md text-center mb-8'> 
          우리는 만난 지 <span className='font-bold text-violet-300 text-lg'>{Math.ceil((new Date().getTime() - new Date('2021-06-12').getTime()) / (1000 * 60 * 60 * 24))}</span>일 됐어요!
        </m.div>
    </section>
  )
}