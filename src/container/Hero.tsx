import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { movies } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import type { RefObject } from "react";

interface Props{
  triggerRef: RefObject<HTMLDivElement | null>;
}

const Hero = ({triggerRef}: Props) => {
  const [itemActive, setItemActive] = useState<number>(0)
  const corousal = [movies[itemActive]]

  const prevCorosal = () => {
    setItemActive((itemActive + movies.length - 1) % movies.length)
  }

  const nextCorosal = () => {
    setItemActive((itemActive + 1) % movies.length)
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextCorosal()
    }, 3000)    
    
    return () => clearInterval(timer)
  })
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'ArrowRight') {
      nextCorosal()
    }else if(event.key === 'ArrowLeft') {
      prevCorosal()
    }
  }

  return (
    <section
      id="hero"
      className="relative -mx-7 flex overflow-x-hidden test"
      tabIndex={0}
      onKeyDown={handleKeyDown} 
      ref={triggerRef}
    >
      {corousal.map((movie, i) => (
        <div
          key={i}
          className={`bg-[url('${movie.thumbnail}')] bg-no-repeat bg-cover bg-center min-w-screen grow`}
        >
          <div className="md:w-[50%] sm:w-[80%] absolute md:top-[45%] top-[50%] flex flex-col lg:gap-4 gap-2.5 items-start lg:pl-20 pl-15 max-sm:px-5 text-gray-300">
            <h3 className="h3 uppercase xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-black md:text-transparent tracking-widest">
              {movie.name}
            </h3>
            <div className="md:text-lg max-sm:text-sm font-medium capitalize flex gap-2.5 items-center z-20">
              <Link
                to={`/industry/${movie.industry}`}
                className="hover:text-white"
              >
                {movie.industry}
              </Link>
              <div className="w-0.5 h-5.5 bg-muted-foreground" />
              <Link to={`/genre/${movie.genre}`} className="hover:text-white">
                {movie.genre}
              </Link>
              <div className="w-0.5 h-5.5 bg-muted-foreground" />
              <Link to={`/year/${movie.year}`} className="hover:text-white">
                {movie.year}
              </Link>
              <div className="w-0.5 h-5.5 bg-muted-foreground" />
              <Link to={`/age/${movie.age}`} className="hover:text-white">
                {movie.age}
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, alia&apos;s consequatur! Cum esse ipsam numquam
              necessitatibus modi.{" "}
              <span className="max-lg:hidden">
                Asperiores, fugit aliquid! Necessitatibus nesciunt corporis
                voluptates. Exercitationem beatae reiciendis quod magni
                sapiente?
              </span>
            </p>
            <div className="flex w-full items-center md:gap-6 gap-3 z-50 mt-3">
              <Button className="md:font-medium max-md:text-sm tracking-wide bg-yellow-300 md:px-7 text-neutral-900 hover:bg-yellow-400 border-none hover:text-black"label='Tonton' />
              <Button className="md:font-medium max-md:text-sm tracking-wide md:px-5 border-white" label="Download" variant="outline" />
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,black,transparent_8%,transparent_90%,black)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,black,transparent_20%,transparent_80%,black)]" />

      <ChevronLeft
        onClick={prevCorosal}
        size={30}
        className="absolute top-[50%] left-3 -translate-y-[50%] p-1 bg-white/20 hover:bg-white/30 duration-200 rounded-full border cursor-pointer z-20"
      />
      <ChevronRight
        onClick={nextCorosal}
        size={30}
        className="absolute top-[50%] right-3 -translate-y-[50%] p-1 bg-white/20 hover:bg-white/30 duration-200 rounded-full border cursor-pointer z-20"
      />
    </section>
  );
};

export default Hero;
