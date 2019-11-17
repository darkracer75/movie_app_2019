import React from 'react';
import PropTypes from 'prop-types';

const fooILike = [
  {
    id:1,
    name : "kimchi",
    image : "http://cdn0.koreanbapsang.com/wp-content/uploads/2016/10/DSC_1811-e1477362297395.jpg",
    rating: 4.2
  },
  {
    id:2,
    name : "ramen",
    image : "https://steamykitchen.com/wp-content/uploads/2015/11/kimchi-ramen-recipe-5505.jpg",
    rating: 5
  },
  {
    id:3,
    name : "samgiopsal",
    image : "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9
  },
  {
    id:4,
    name : "Chukumi",
    image : "https://1.bp.blogspot.com/-fTtgX7TpwZ0/VGwBSy7jkuI/AAAAAAAAIiQ/tB9f6DzV2Y4/s1600/4.jpg",
    rating: 3.7
  }
]

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function Food({name, picture, rating}) {

  return (

    <div>
      <h2>I lovel {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} width="160" height="90"/>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React App!!!</h1>
      {
        fooILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))
      }
      
    </div>
  );
}

export default App;
