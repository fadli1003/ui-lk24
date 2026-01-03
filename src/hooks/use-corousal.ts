import { movies } from "@/constants";

export const item: number = movies.length; //3 object
export let itemActive = 0;

export const prevCorosal = () => {
  itemActive -= 1
  if (itemActive < 1) {
    itemActive = item - 1;
  }
};

export const nextCorosal = () => {
  itemActive += 1;
  if (itemActive >= item - 1) {
    itemActive = 0;
  }
};

