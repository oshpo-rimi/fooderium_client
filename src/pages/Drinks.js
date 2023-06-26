import React, { useEffect, useState } from 'react';
import DrinksCard from '../components/DrinksCard';

const Drinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/drinks-collection?type=ordenary_drinks`)
        .then((res) => res.json())
        .then((data) => {
            setDrinks(data);
        })
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Choose Your favourite drink
            </h1>
             <div>
                {drinks?.map(drinks => 
                <DrinksCard key={drinks?._id} drinks={drinks}></DrinksCard>)}
             </div>
            
        </div>
    );
};

export default Drinks;