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
    thumbnail: '/src/assets/assets/backgroundImage.png',
  },
  {
    name: "middle game",
    genre: "movie",
    year: "2021",
    age: "13+",
    industry: "bolywood",
    thumbnail: '/src/assets/assets/backgroundImage.png',
  },
  {
    name: "end game",
    genre: "movie",
    year: "2021",
    age: "13+",
    industry: "hollywood",
    thumbnail: '/src/assets/assets/backgroundImage.png',
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