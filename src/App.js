import logo from './logo.svg';
import React, {useState} from 'react';
import Category from './Categories';
import Menu from './Menu';
import data from './data'
import './App.css';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenu(data);
      return;
    }
    const newData = data.filter((dish) => dish.category === category);
    setMenu(newData);
  };
  return (
    <div className='main'>
      <div className='header'>
        {/* <img src='/images/logo-no-bg2.png' alt='fork spoon glass' width={'100px'}/> */}
        <h1>Grab-A-Bite</h1>
        <h3>The Best Food You Will Ever Taste</h3>
        <p>Grab-A-Bite has the perfect place to enjoy fine food and great drinks with excellent service with great ambience</p>
      </div>
      <div className='container'>
        <div className='content'>
          <h2>Our Menu</h2>
          <Category categories={categories} filterItems={filterItems}/>
          <Menu items={menu}/>
        </div>
        </div>
    </div>
  );
}

export default App;
