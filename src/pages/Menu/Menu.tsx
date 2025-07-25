import React, { useEffect, useState } from "react";
import {
  useGetCategoryQuery,
  useGetProductsByCategoryIdQuery,
} from "../../store/RTKQuery";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ProductItem from "../../components/ProductItem/ProductItem";
import { CategoryItem, PrevBtn } from "../../components";
import { Outlet, useNavigate, useParams } from "react-router-dom";

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

  const { isSuccess, data, refetch } = useGetProductsByCategoryIdQuery(
    parseInt(category_id!)
  );

  useEffect(() => {
    refetch();

    if (!category_id) {
      navigate("/");
    }
  }, [category_id]);

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (categoryDataResponse?.data.subcategories.length)
      setHasSubCategory(true);
    else setHasSubCategory(false);
  }, [isLoading]);

  return (
    <>
      <PrevBtn />
      {categoryDataResponse?.data ? (
        <div className="menu">
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
              <div className="categories subcategories">
                {categoryDataResponse.data.subcategories.map(
                  (subCategory, index) => (
                    <CategoryItem
                      subCategory={subCategory}
                      type="subcategory"
                      isLoading={isLoading}
                      key={index}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="products">
                {products.length ? (
                  products?.map((product, index) => (
                    <ProductItem
                      data={product}
                      isLoading={isLoading}
                      key={index}
                    />
                  ))
                ) : (
                  <div style={{ margin: "20px 0", fontSize: "18px" }}>
                    Ma'lumot topilmadi
                  </div>
                )}
              </div>
            )}
          </div>
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
