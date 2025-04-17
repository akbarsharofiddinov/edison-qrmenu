import React, { useEffect, useState } from "react";
import { useGetCategoryQuery } from "../../store/RTKQuery";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ProductItem from "../../components/ProductItem/ProductItem";
import { CategoryItem, PrevBtn } from "../../components";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Menu: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hasSubCategory, setHasSubCategory] = useState(false);

  const { category_id, subcategory_id } = useParams();
  const {
    isError,
    isLoading,
    data: categoryDataResponse,
  } = useGetCategoryQuery(Number.parseInt(category_id + ""));

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://qrmenu.celavi.uz/api/products/?category_id=${category_id}`
      );
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [category_id]);

  useEffect(() => {
    if (!category_id) {
      navigate("/");
    }
  }, [category_id]);

  useEffect(() => {
    if (categoryDataResponse?.data.subcategories.length)
      setHasSubCategory(true);
    else setHasSubCategory(false);
  }, [isLoading]);

  useEffect(() => {
    if (subcategory_id) setHasSubCategory(false);
    else setHasSubCategory(true);
  }, [subcategory_id]);

  return (
    <>
      <PrevBtn />
      {categoryDataResponse?.data ? (
        <div className="container">
          <h1 className="menu-title">{categoryDataResponse?.data?.name}</h1>
          {isLoading ? (
            <div style={{ marginTop: "25px" }}>
              {Array(4)
                .fill(4)
                .map(() => (
                  <LoaderComponent key={Math.random()} />
                ))}
            </div>
          ) : isError ? (
            <div>Tovar topilmadi</div>
          ) : subcategory_id ? (
            <Outlet />
          ) : hasSubCategory ? (
            categoryDataResponse.data.subcategories.map(
              (subCategory, index) => (
                <div className="categories" key={index}>
                  <CategoryItem
                    subCategory={subCategory}
                    type="subcategory"
                    isLoading={isLoading}
                  />
                </div>
              )
            )
          ) : (
            <div className="products">
              {products?.map((product, index) => (
                <ProductItem data={product} isLoading={isLoading} key={index} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="container" style={{ marginTop: "25px" }}>
          {Array(4)
            .fill(4)
            .map(() => (
              <LoaderComponent key={Math.random()} />
            ))}
        </div>
      )}
    </>
  );
};

export default Menu;
