type Product = {
  _id: string;
  categoryId: string;
  image: string;
  name: string;
  price: number;
  stripePriceId: string;
  description: string;
  ingredients: string;
  calories: string;
  featured: boolean;
  __v: number;
};

type Category = {
  _id: string;
  name: string;
  slug: string;
  __v: number;
};

const products: Product[] = [
  {
    _id: "67def6e42b2c146578729f60",
    categoryId: "67dee9c012d36efdd1027b43",
    image: "assets/images/menu.png",
    name: "Chicken Parmesan",
    price: 40,
    stripePriceId: "price_1R5W5XJjbWEvglIU42i6PuXC",
    description:
      "A classic Italian favorite topped with rich tomato sauce, melted cheese, and a golden crisp finish.",
    ingredients: "Chicken breast cutlet ,Tomato sauce ,Mozzarella & Parmesan cheese ,Fresh basil,Spaghetti pasta,Olive oil & seasoning",
    calories: "Calories : 70gr - Chicken",
    featured: true,
    __v: 0,
  },
];

const categories: Category[] = [
  {
    _id: "ALL",
    name: "All",
    slug: "all",
    __v: 0,
  },
];

export { products, categories };





