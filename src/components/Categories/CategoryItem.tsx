import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  data?: ICategory;
  type: string;
  subCategory?: ISubCategory;
  isLoading: boolean;
}

const CategoryItem: React.FC<IProps> = ({
  data,
  type,
  subCategory,
  isLoading,
}: IProps) => {
  return type === "category" ? (
    <div className="category">
      <Link to={`/menu/${data?.translations[0].category_id}`}>
        <img src={data?.img_url} alt="category-image" />
        <div className="category-body">
          {isLoading ? (
            ""
          ) : (
            <>
              <h1 className="name">{data?.translations[0].name}</h1>
              <p className="desc">{data?.translations[0].description}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  ) : (
    <div className="category">
      <Link to={`${subCategory?.translations[0].sub_category_id}`}>
        <img src={subCategory?.img_url} alt="category-image" />
        <div className="category-body">
          {isLoading ? (
            ""
          ) : (
            <>
              <h1 className="name">{subCategory?.translations[0].name}</h1>
              <p className="desc">{subCategory?.translations[0].description}</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
