import React, { useEffect } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { ActionType } from '../../redux/ActionType';
import { useHistory } from 'react-router';
import axios from 'axios';


export default function RestaurantsSlider() {

    const dispatch = useDispatch();
    const history = useHistory();
    const restaurantsArray = useSelector((state: AppState) => state.restaurantsArray);

    useEffect(() => {
        localStorage.removeItem("restaurantData");
        localStorage.removeItem("dishesData");
        async function fetchDishes() {
            let dishes = await axios.get("http://localhost:3001/api/v1/restaurants");     
            dispatch({type: ActionType.GetRestaurants, payload: dishes});
        }
        fetchDishes();
    }, [dispatch])
    
    let sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    const onRestaurantClicked = (restaurant:any) => {
        dispatch({type: ActionType.GetRestaurant, payload: restaurant});
        history.push("/restaurant");
    }

    return (
        <ComponentMainDiv>
        <RestaurantsHeadline>THE POPULAR RESTAURANTS IN EPICURE : </RestaurantsHeadline>
            <Slider {...sliderSettings}>
                {restaurantsArray.map((restaurant:any, key:number) => (
                    <Container key={key} onClick={() => onRestaurantClicked(restaurant)}>
                            <RestaurantDiv>
                                <RestaurantImg src={restaurant.url}/>
                                <RestaurantName>{restaurant.name}</RestaurantName>
                                <RestaurantChef>{restaurant.chef}</RestaurantChef>
                            </RestaurantDiv>
                    </Container>
                ))}
            </Slider>
        </ComponentMainDiv>
    )
}

const Container = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;
`

const ComponentMainDiv = styled.div`
    margin-bottom: 100px;
`

const RestaurantsHeadline = styled.div`
    text-align: center;
    margin-bottom: 30px;
`

const RestaurantImg = styled.img`
    height: 200px;
    width: 100%
`

const RestaurantName = styled.div`
    font-size: 28px;
    margin-bottom: 10px;
    margin-top: 20px;
`
    
const RestaurantChef = styled.div`
    font-size: 20px;
    margin-bottom: 10px;

`

const RestaurantDiv = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(255 243 228);
    cursor: pointer;
    width: 70%

`




