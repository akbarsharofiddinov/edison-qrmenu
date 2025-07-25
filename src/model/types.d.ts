interface ICategory {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
  img_url: string;
  name: string;
  description: string;
  subcategories: ISubCategory[];
  translations: [
    {
      id: number;
      category_id: number;
      locale: string;
      name: string;
      description: string;
      created_at: null;
      updated_at: null;
    }
  ];
}

interface ISubCategory {
  id: number;
  category_id: number;
  image: string;
  img_url: string;
  name: string;
  description: string;
  translations: [
    {
      id: number;
      sub_category_id: number;
      description: string;
      locale: string;
      name: string;
    }
  ];
}

interface IProduct {
  id: number;
  category_id: number;
  image: string;
  price: number;
  is_active: number;
  created_at: string;
  updated_at: string;
  subcategory_id: null;
  img_url: string;
  product_name: string;
  product: {
    name: string;
    description: string | null;
  };
  name: string;
  description: string | null;
  translations: [
    {
      id: number;
      product_id: number;
      locale: string;
      name: string;
      description: string | null;
      created_at: null;
      updated_at: null;
    }
  ];
}

interface IQuestion {
  value: number;
  visible: boolean;
}

interface Feedback {
  rate: number;
  message: string;
}

// {
//   "id": 10,
//   "category_id": 3,
//   "image": "/images/products/miasnoi-salat.png",
//   "price": 34000,
//   "is_active": 1,
//   "created_at": "2024-04-17T11:25:46.000000Z",
//   "updated_at": "2024-04-17T11:25:46.000000Z",
//   "subcategory_id": null,
//   "img_url": "https://forest.webclub.uz/images/products/miasnoi-salat.png",
//   "product_name": "Мясной салат",
//   "product": {
//       "name": "Мясной салат",
//       "description": null
//   },
//   "name": "Мясной салат",
//   "description": null,
//   "translations": [
//       {
//           "id": 10,
//           "product_id": 10,
//           "locale": "ru",
//           "name": "Мясной салат",
//           "description": null,
//           "created_at": null,
//           "updated_at": null
//       }
//   ]
// }
