import React from 'react';

const DrinksCard = (drinks) => {
    console.log(drinks);

    const{strDrink, strDrinkThumb, type, _id} = drinks;

    return (
        <div className="card card-compact  bg-base-10 shadow-xl">
            <figure><img className="h-[300px] w-full" src={strDrinkThumb} alt={strDrink} /></figure>
            <div className="card-body">
                <h2 className="card-title">{strDrink}</h2>
                <div className="badge badge-primary">category : {type}</div>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral btn-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
export default DrinksCard;