import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { ActionType } from '../../redux/ActionType';
import { AppState } from '../../redux/AppState';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import WindowSize from '../windowSize';

export default function ChefOfTheWeek() {

    const size = WindowSize();
    
    const history = useHistory();
    const dispatch = useDispatch();
    const chefArray = useSelector((state: AppState) => state.chefArray);
    const restaurantsArray = useSelector((state: AppState) => state.restaurantsArray);
    const [chefName, setChefName] = useState("");

    let filteredRestaurants = restaurantsArray.filter(restaurant => restaurant.chef === chefName);

    let sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    useEffect(() => {
        async function fetchChefOfTheWeek() {
            let chef = await axios.get("http://localhost:3001/api/v1/chefs");
            setChefName(chef.data[0].name);
            dispatch({type: ActionType.GetChef, payload: chef});
        }
        fetchChefOfTheWeek();
    }, [dispatch])

    const onRestaurantClicked = (restaurant:any) => {
        dispatch({type: ActionType.GetRestaurant, payload: restaurant});
        history.push("/restaurant");
    }
    
    return (
        <ChefOfTheWeekDiv>
            {chefArray.map((chef:any, key:number) =>(
                <Container key={key}>
                    <ChefOfTheWeekHeadline>
                        CHEF OF THE WEEK:
                    </ChefOfTheWeekHeadline>
                    <ImgAndAbout>
                        <Div>
                            <ChefImg src={chef.chefImg}/>
                            <ChefName>{chef.name}</ChefName>
                        </Div>
                        <ChefContent>
                            {chef.content}
                        </ChefContent>
                    </ImgAndAbout>
                    <ChefRestaurants>
                        <ChefRestaurantsHeadline>
                            {chef.name}'s restaurants:
                        </ChefRestaurantsHeadline>
                        <Restaurants>
                            {size < 600 ? 
                            <Slider {...sliderSettings}>
                            {filteredRestaurants.map((restaurant:any, key:number) => (
                                 <Restaurant key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                    <RestaurantImg src={restaurant.url}/>
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                </Restaurant> 
                            ))}
                            </Slider>
                            :
                            <RestaurantsDesktop>
                                {filteredRestaurants.slice(0,3).map((restaurant:any, key:number) => (
                                     <Restaurant key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                        <RestaurantImg src={restaurant.url}/>
                                        <RestaurantName>{restaurant.name}</RestaurantName>
                                    </Restaurant> 
                                ))}
                            </RestaurantsDesktop>
                        }
                        </Restaurants>
                    </ChefRestaurants>
                </Container>
            ))}
        </ChefOfTheWeekDiv>
    )
}

const RestaurantsDesktop = styled.div`
    display: flex;
    gap: 10px;
    
`

const ImgAndAbout = styled.div`
    @media(min-width: 600px) {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 20px;
    }
`

const Div = styled.div`
    height: 280px;
    text-align: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 600px) {
        width: 70%;
        margin: auto;
    }
`

const ChefOfTheWeekHeadline = styled.div`
    font-size: 18px;
    margin-bottom: 20px
`

const ChefOfTheWeekDiv = styled.div`
    // @media(min-width: 600px) {
    //     display: flex;
    // }
`

const ChefImg = styled.img`
    width: 334px;
    height: 240px;
`

const ChefContent = styled.div `
    padding: 0 24px 0 24px;
    text-align: center;
    letter-spacing: 1.04px;
    font-weight: 300;
    margin-bottom: 20px;
    @media(min-width: 600px) {
        width: 400px;
        text-align: start
    }
`

const ChefRestaurants = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 10px;
    margin-top: 20px;
    width: -webkit-fill-available;
    @media(min-width: 600px) {
        margin-left: 0px;
        width: 75%;
    }

`

const Restaurants = styled.div`
    margin-bottom: 150px;

`

const Restaurant = styled.div`
    height: 240px;
    background: #f9f4ea;  
    width: auto !important;  
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
    @media(min-width: 600px) {
        margin-left: 0px;
    }

`
const RestaurantImg = styled.img`
    width: 160px;
    height: 150px
`

const ChefRestaurantsHeadline = styled.div`
    margin-left: 10px;
    @media(min-width: 600px) {
        margin-left: 0px;
        
    }
`

const ChefName = styled.div`
    opacity: 0.8;
    text-align: center;
    margin-top: -40px;
    color: black;
    height: 50px;
    background: white;
    font-size: 25px;
    word-spacing: 10px;
    width: auto;

`

const RestaurantName = styled.div`
    font-size: 20px;
    letter-spacing: 1.33px;
    margin-top: 30px;
    
`
