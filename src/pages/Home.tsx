import Testimonials from '@/components/Testimonials'
import Header from '@/container/Header'
import Hero from '@/container/Hero'
import Movies from '@/container/Movies'
import { useEffect, useRef, useState } from 'react'

export const Home = () => {
  const [isPastHero, setIsPastHero] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsPastHero(!entry.isIntersecting);
        },
        {
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
