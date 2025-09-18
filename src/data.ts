type Product = {
  _id: string;
  categoryId: string;
  image: string | string[];
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
  slug: string; // parent group
  __v: number;
};

const categories: Category[] = [
  // === MAIN COURSE ===
  { _id: "cat_meat", name: "Meat Dishes", slug: "Main Course", __v: 0 },
  { _id: "cat_seafood", name: "Seafood Dishes", slug: "Main Course", __v: 0 },
  { _id: "cat_veg", name: "Vegetarian Dishes", slug: "Main Course", __v: 0 },
  { _id: "cat_pasta", name: "Pasta & Noodles", slug: "Main Course", __v: 0 },

  // === DIZZERTS ===
  { _id: "cat_cake", name: "Cakes & Pastries", slug: "Dizzerts", __v: 0 },
  { _id: "cat_ice", name: "Ice Cream & Frozen", slug: "Dizzerts", __v: 0 },
  { _id: "cat_pudding", name: "Puddings & Custards", slug: "Dizzerts", __v: 0 },

  // === APPETIZERS ===
  { _id: "cat_fried", name: "Fried Starters", slug: "Appetizers", __v: 0 },
  { _id: "cat_soup", name: "Soups", slug: "Appetizers", __v: 0 },
  { _id: "cat_salad", name: "Salads & Breads", slug: "Appetizers", __v: 0 },
];

const products: Product[] = [
  // --- Meat Dishes (5) ---
  {
    _id: "prod_1",
    categoryId: "cat_meat",
    image: [
      "https://www.onceuponachef.com/images/2022/10/chicken-parmesan-1-760x984.jpg",
      "https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_1280,c_limit/Chicken-Parmesean-Recipe-Lede.jpg"
    ],
    name: "Chicken Parmesan",
    price: 40,
    stripePriceId: "price_meat_1",
    description:
      "Classic Italian chicken breast topped with cheese and tomato.",
    ingredients:
      "Chicken, Tomato sauce, Mozzarella, Parmesan, Basil, Olive oil",
    calories: "Calories: 70gr - Chicken",
    featured: true,
    __v: 0,
  },
  {
    _id: "prod_2",
    categoryId: "cat_meat",
    image: [
      "https://www.orwhateveryoudo.com/wp-content/uploads/2019/10/Traeger-Beef-Bulgogi-7.jpg.webp",
      "https://mikhaeats.com/wp-content/uploads/2024/01/beef-bulgogi-blog-9.jpg"
    ],
    name: "Smoked Beef Bulgogi",
    price: 55,
    stripePriceId: "price_meat_2",
    description: "Tender beef marinated in soy-garlic sauce and flame grilled.",
    ingredients: "Beef, Soy sauce, Garlic, Ginger, Sesame oil, Green onions",
    calories: "Calories: 85gr - Beef",
    featured: false,
    __v: 0,
  },
  {
    _id: "prod_3",
    categoryId: "cat_meat",
    image: [
      "https://www.seriouseats.com/thmb/DohQC_iADRKgJPdXvcxSjsPA930=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__06__20110516-cowboy-steak-kenji-lopez-alt-bb4a825bd05b4e91b7672bc1603043a8.jpg",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Bobby-Grilling-013_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1382539247827.webp"
    ],
    name: "Barbeque Steak",
    price: 65,
    stripePriceId: "price_meat_3",
    description: "Char-grilled juicy steak glazed with smoky BBQ sauce.",
    ingredients: "Beef steak, BBQ sauce, Garlic butter, Black pepper, Rosemary",
    calories: "Calories: 110gr - Beef",
    featured: false,
    __v: 0,
  },
  {
    _id: "prod_4",
    categoryId: "cat_meat",
    image: [
      "https://therecipecritic.com/wp-content/uploads/2025/05/chicken-fried-rice-4-600x800.jpg",
      "https://iamhomesteader.com/wp-content/uploads/2025/05/Bang-Bang-Chicken-Fried-Rice-2.jpg"
    ],
    name: "Chicken Fried Rice",
    price: 22,
    stripePriceId: "price_meat_4",
    description: "Golden fried rice with chicken, vegetables and egg.",
    ingredients: "Rice, Chicken, Egg, Soy sauce, Peas, Carrots, Sesame oil",
    calories: "Calories: 95gr - Chicken+Rice",
    featured: false,
    __v: 0,
  },
  {
    _id: "prod_5",
    categoryId: "cat_meat",
    image: [
      "https://www.allrecipes.com/thmb/7HxjNoBySy-r-qG6r7MFOAuQCr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/74037-lamb-chops-with-balsamic-reduction-DDMFS-step-4x3-158-cc81d0fe528c4b07be2d7031e152f70b.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F04%2F26%2FOven-Roasted-Lamb-Chops-Chef-Mo-1-to-1.jpg&w=160&q=60&c=sc&poi=auto&orient=true&h=90"
    ],
    name: "Lamb Chops",
    price: 70,
    stripePriceId: "price_meat_5",
    description: "Herb-seasoned lamb chops grilled with garlic butter.",
    ingredients: "Lamb, Garlic, Rosemary, Olive oil, Lemon",
    calories: "Calories: 105gr - Lamb",
    featured: false,
    __v: 0,
  },

  // --- example Seafood Dish ---
  {
    _id: "prod_6",
    categoryId: "cat_seafood",
    image: [
      "https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg",
      "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg"
    ],
    name: "Grilled Salmon",
    price: 50,
    stripePriceId: "price_sea_1",
    description: "Fresh grilled salmon served with lemon butter sauce.",
    ingredients: "Salmon, Lemon, Garlic, Butter, Herbs",
    calories: "Calories : 90gr - Fish",
    featured: true,
    __v: 0,
  },

  // --- example Dessert Cake ---
  {
    _id: "prod_7",
    categoryId: "cat_cake",
    image: [
      "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnC1db0UIAdAK45DJ2Qo8-lIFQiyOpKDOoiw&s"
    ],
    name: "Chocolate Lava Cake",
    price: 25,
    stripePriceId: "price_dessert_1",
    description: "Warm fudgy cake with molten chocolate center.",
    ingredients: "Chocolate, Flour, Butter, Eggs, Sugar",
    calories: "Calories : 60gr - Chocolate",
    featured: true,
    __v: 0,
  },

  // --- example Appetizer ---
  {
    _id: "prod_8",
    categoryId: "cat_fried",
    image: [
      "https://easyweeknightrecipes.com/wp-content/uploads/2024/04/Mozzarella-Sticks_0013.jpg",
      "https://images.themodernproper.com/production/posts/2021/Homemade-Mozzarella-Sticks-9.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1638935116&s=e86bcc2aa99e8f8c073f573a6dc4f989"
    ],
    name: "Mozzarella Sticks",
    price: 18,
    stripePriceId: "price_app_1",
    description: "Crispy golden sticks filled with cheesy goodness.",
    ingredients: "Mozzarella, Bread crumbs, Flour, Eggs",
    calories: "Calories : 40gr - Cheese",
    featured: false,
    __v: 0,
  },
];

export { categories, products };
