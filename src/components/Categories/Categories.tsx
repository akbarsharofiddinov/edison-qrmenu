import React from "react";
import { useGetAllCategoriesQuery } from "../../store/RTKQuery";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import CategoryItem from "./CategoryItem";

const Categories: React.FC = () => {
  const { isError, isLoading, data } = useGetAllCategoriesQuery();

  return (
    <>
      {isLoading ? (
        <div className="categories">
          {Array(4)
            .fill(4)
            .map(() => (
              <LoaderComponent key={Math.random()} />
            ))}
        </div>
      ) : isError ? (
        <div style={{ margin: "20px 0", fontSize: "18px" }}>
          Ma'lumot topilmadi
        </div>
      ) : data?.data ? (
        <div className="categories">
          {data?.data.map((item, index) => (
            <CategoryItem
              type="category"
              data={item}
              isLoading={isLoading}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div style={{ margin: "20px 0", fontSize: "18px" }}>
          Ma'lumot topilmadi
        </div>
      )}
    </>
  );
};

export default Categories;
