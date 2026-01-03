import Header from '@/container/Header'
import Hero from '@/container/Hero'
// import Movies from '@/container/Movies'
import Testimonials from '@/components/Testimonials'
import Movies from '@/container/Movies'
import { useEffect, useRef, useState } from 'react'

export const Home = () => {
  const [isPastHero, setIsPastHero] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Jika section kedua TIDAK sedang terlihat (berarti kita di Hero)
          // atau jika section kedua masuk ke layar
          setIsPastHero(!entry.isIntersecting);
        },
        {
          // rootMargin "-80px 0px 0px 0px" artinya trigger aktif 
          // 80px sebelum elemen benar-benar menyentuh top layar (sesuaikan tinggi navbar)
          threshold: 0,
          rootMargin: "-47px 0px 0px 0px" 
        }
      );
  
      if (triggerRef.current) {
        observer.observe(triggerRef.current);
      }
  
      return () => observer.disconnect();
    }, []);

  return (
    <>
      <Header pastHero={isPastHero} />
      <main className='px-7 pb-6 flex min-h-screen flex-col'>
        <Hero triggerRef={triggerRef} />
        <Movies />
        <Testimonials />
      </main>
    </>
  )
}
