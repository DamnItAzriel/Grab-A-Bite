import React, {useState, useEffect} from 'react';
import data from './data';
const Categories = ({categories, filterItems}) => {
    return (
        <div>
            {categories.map((category, index) => {
                return(
                    <button 
                        type='button'
                        key={index}
                        onClick={()=> filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
    
}

//
export default Categories;