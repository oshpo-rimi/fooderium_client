import React, { useEffect, useState } from 'react';
import MealsCategoryCard from '../components/MealsCategoryCard';

const MealsCategory = () => {
    const[mealsCategory, setMealsCategory] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/meals-collection')
        .then(res => res.json())
        .then(data => {
            setMealsCategory(data);
        });
    }, []);

    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold">
                All Meals catagory would be here
                </h1>
        

           <div className="grid grid-cols-3 gap-10 mt-10 my-10 px-10">
            {mealsCategory?.map((category) => (
                <MealsCategoryCard
                 key={category?._id} 
                 category ={category}
                 ></MealsCategoryCard>
            ))}
           </div>
        </div>
    );
};

export default MealsCategory;