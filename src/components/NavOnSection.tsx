import { useState, useEffect, useRef } from 'react';

export default function NavbarOnScroll() {
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
        rootMargin: "-80px 0px 0px 0px" 
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <nav className={`fixed w-full p-4 ${isPastHero ? 'text-black dark:text-white' : 'text-white'}`}>
        Logo
      </nav>

      <section className="h-screen bg-blue-900 text-white">
        <h1>Fixed White Text Here</h1>
      </section>

      {/* Trigger Section: Elemen pertama setelah Hero */}
      <section ref={triggerRef} className="h-screen bg-white dark:bg-gray-900">
        <h2>Content yang butuh warna dinamis</h2>
      </section>
    </div>
  );
}