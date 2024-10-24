type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type TEvent = {
  id?: string;
  name: string;
  date: string;
  ticketPrice: number | string;
  image?: string;
};
