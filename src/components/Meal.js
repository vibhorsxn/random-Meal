import React, { useState } from 'react';
import axios from 'axios';
import { Button, Image } from "react-bootstrap";
import '../style/meal.css';

function Meal() {
    const [meal, setMeal] = useState('');
    const [area, setArea] = useState('');
    const [dishimg, setDishimg] = useState('');
    const [instruction, setInstruction] = useState('');


    const fetchadvice = () => {

        // axios('https://api.adviceslip.com/advice')
        // axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => {


                // To Generate Random Index value
                var i = Math.floor(Math.random() * 26);

                console.log(response.data.meals[i].strMeal);


                setMeal(response.data.meals[i].strMeal);
                setArea(response.data.meals[i].strArea);

                setDishimg(response.data.meals[i].strMealThumb);
                setInstruction(response.data.meals[i].strInstructions);


            })

            .catch((error) => {
                console.log(error)
            });

    };
    return (
        <div className="meal__main">





            <div classname="meal__data">

                <div className="meal_name">
                    <h1><span>Dish:</span>{meal}</h1>
                    <h5> <span>Dish Origin:</span>{area}</h5>
                </div>
                <div className="meal__img">
                    <Image style={{ height: "220px",
                     width: "220px",
                     borderRadius:"20px" }} src={dishimg} fluid />
                </div>
                
                <img alt="" src="https://img.icons8.com/fluency/48/000000/genie.png"/>
                <Button
                 className="btn"
                 variant="outline-success" 
                 onClick={fetchadvice}>abrakadabra
                 </Button>{' '}
            </div>
            

            <h4 ><span>Instructons:</span>{instruction}</h4>



        </div>
    )
}

export default Meal
