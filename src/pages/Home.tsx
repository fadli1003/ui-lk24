import Header from '@/container/Header'
import Hero from '@/container/Hero'
import Movies from '@/container/Movies'
import Testimonials from '@/components/Testimonials'
import Movie from '@/container/Movie'

export const Home = () => {
  return (
    <>
      <Header />
      <main className='px-7 pb-6 flex min-h-screen flex-col'>
        <Hero />
        <Movie />
        <Testimonials />
      </main>
    </>
  )
}
