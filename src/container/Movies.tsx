import { dummyShowsData } from "@/constants/assets"
import { Link } from "react-router-dom"

const Movies = () => {
  return (
    <section
      id="movies"
    >
      <div className="h-screen" >
        <div className="grid grid-conls-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {dummyShowsData.map((show, i) => (
            <div key={i}  className="border border-muted rounded-md aspect-9/12 p-1 flex flex-col gap-2">
              <Link to={`/movies/${show.title}`} className="rounded-sm aspect-square border border-border">
                <img src={show.poster_path} alt={show.title}/>
              </Link>
              <div className="grid grid-rows-3 grow px-2 py-1">
                <h2 className="row-span-2 leading-4">{show.title}</h2>
                <div className="flex items-center gap-3 text-xs">
                  <span>{new Date(show.release_date).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'})}</span>
                  <span>●</span>
                  <span>{show.original_language}</span>
                  <span>●</span>
                  <span>1h30m</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Movies