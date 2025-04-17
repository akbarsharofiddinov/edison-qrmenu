import ProductItem from "@/components/ProductItem/ProductItem";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubCategories: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { subcategory_id } = useParams();

  async function getSubCategories() {
    try {
      const response = await axios.get(
        `https://qrmenu.celavi.uz/api/products/?subcategory_id=${subcategory_id}`
      );

      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSubCategories();
  }, []);

  return (
    <>
      {products.length ? (
        <div className="products">
          {products?.map((product, index) => (
            <ProductItem data={product} isLoading={false} key={index} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubCategories;
