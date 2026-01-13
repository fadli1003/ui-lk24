import backgroundImage from "@/assets/backgroundImage.png";
import thumbnail2 from "@/assets/img/tumbnail2.jpg"
import thumbnail3 from "@/assets/img/tumbnail3.jpg"

interface Movie {
  name: string;
  genre: string;
  year: string;
  age: string;
  industry: string;
  thumbnail: string;
}

export const movies: Movie[] = [
  {
    name: "first game",
    genre: "movie",
    year: "2021",
    age: "13+",
    industry: "hollywood",
    thumbnail: backgroundImage,
  },
  {
    name: "middle game",
    genre: "movie",
    year: "2021",
    age: "13+",
    industry: "bolywood",
    thumbnail: thumbnail2,
  },
  {
    name: "end game",
    genre: "movie",
    year: "2021",
    age: "13+",
    industry: "hollywood",
    thumbnail: thumbnail3,
  },
];

export const navItem = [
  {
    label: "home",
    link: "#home",
  },
  {
    label: "movie",
    link: "#movie",
  },
  {
    label: "popular",
    link: "#popular",
  },
  {
    label: "service",
    link: "#service",
  },
];