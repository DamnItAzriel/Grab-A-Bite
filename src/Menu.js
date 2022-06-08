import React , {useState, useEffect} from 'react';
import data from './data';


const Menu = ({items}) => {
    return(
        <ul className='grid-container'>
            {
                items.map((dish)=>{
                    const {id, title, category, price, img} = dish;
                    return <li className='grid-item' key={id}>
                        <div>
                            <img src={img}/>
                            <div className='flex'>
                                <h4 id='h4' className='left'>
                                    {title}
                                </h4>
                                <p id='p-float'>{price} &#8377;</p>
                            </div>
                        </div>
                    </li>
                })
            }
        </ul>
    );
};

export default Menu;

