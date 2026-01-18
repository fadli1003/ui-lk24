import { dummyShowsData } from "@/constants/assets"
import { Dot } from "lucide-react"

const Movies = () => {
  return (
    <section
      id="movies"
    >
      <div className="h-screen" >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {dummyShowsData.map((show, i) => (
            <div key={i}  className="border border-muted rounded-md h-70 md:h-75 lg:h-80 p-4 flex flex-col gap-2">
              <img src={show.poster_path} alt={show.title} className="rounded-sm min-h-[70%]" />
              <h2>{show.title}</h2>
              <div className="flex items-center gap-3 text-xs">
                <span>{new Date(show.release_date).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'})}</span>
                <span>●</span>
                <span>{show.original_language}</span>
                <span>●</span>
                <span>1h30m</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Movies