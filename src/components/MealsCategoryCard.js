import React from 'react';

const MealsCategoryCard = ({category}) => {


     const {strCategory, strCategoryDescription, strCategoryThumb, _id} =
     category;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
  <figure>
    <img 
    src={strCategoryThumb}
     alt="Shoes" 
     />
     </figure>
  <div className="card-body justify-between">
    <h2 className="card-title">{strCategory}</h2>

    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm">Show Detail</button>
      
      <button className="btn btn-sm">Show Meals</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MealsCategoryCard;