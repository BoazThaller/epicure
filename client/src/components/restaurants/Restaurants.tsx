import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ActionType } from '../../redux/ActionType';
import { AppState } from '../../redux/AppState';
import WindowSize from '../windowSize';
import { ThemeProvider } from "styled-components";

export default function Restaurants() {

    const size = WindowSize();


    const dispatch = useDispatch();
    const history = useHistory();
    const restaurantsArray = useSelector((state: AppState) => state.restaurantsArray);

    useEffect(() => {
        localStorage.removeItem("restaurantData");
        localStorage.removeItem("dishesData");
        async function fetchRestaurants() {
            let restaurants = await axios.get("http://localhost:3001/api/v1/restaurants");     
            dispatch({type: ActionType.GetRestaurants, payload: restaurants});
        }
        fetchRestaurants();
    }, [dispatch])
    
    const onRestaurantClicked = (restaurant:any) => {
        dispatch({type: ActionType.GetRestaurant, payload: restaurant});
        history.push("/restaurant");
    }
    
    let newDataParamater = new Date("January 1, 2020, 23:59:59");
    let newRestaurants = restaurantsArray.filter(restaurant => restaurant.dateOpened > newDataParamater);

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time = (hour + ":" + minutes);

    let openRestaurants = restaurantsArray.filter(restaurant => restaurant.opens < time && restaurant.closes > time);

    const [isMainContainerShown, setIsMainContainerShown] = useState(true);
    const [isNewClicked, setIsNewClicked] = useState(false);
    const [isMostPopularClicked, setIsMostPopularClicked] = useState(false);
    const [isNowOpenClicked, setIsNowOpenClicked] = useState(false);
    
    const onAllClicked = () => {
        setIsMainContainerShown(true);
        setIsNewClicked(false);
        setIsNowOpenClicked(false);
        setIsMostPopularClicked(false);
    }

    const onNewClicked = () => {
        setIsNewClicked(true);
        setIsMainContainerShown(false);
        setIsNowOpenClicked(false);
        setIsMostPopularClicked(false);
    }
    
    const onOpenNowClicked = () => {
        setIsNowOpenClicked(true);
        setIsMainContainerShown(false);
        setIsNewClicked(false);
        setIsMostPopularClicked(false);
    }

    const onMostPopularClicked = () => {
        setIsMostPopularClicked(true);
        setIsMainContainerShown(false);
        setIsNewClicked(false);
        setIsNowOpenClicked(false);
    }

    let allLink = isMainContainerShown ? "underline" : "none";
    let newLink = isNewClicked ? "underline" : "none";
    let mostPopularClicked = isMostPopularClicked ? "underline" : "none";
    let openNowLink = isNowOpenClicked ? "underline" : "none";

    return (
        <ComponentMainDiv id="container">
            {size < 600 &&
                <RestaurantsHeadline>RESTAURANTS</RestaurantsHeadline>
            }
            <RestaurantsNavbar>
                <NavbarButton style={{textDecoration: allLink}} onClick={onAllClicked}>All</NavbarButton>
                <NavbarButton style={{textDecoration: newLink}} onClick={onNewClicked}>New</NavbarButton>
                <NavbarButton style={{textDecoration: mostPopularClicked}} onClick={onMostPopularClicked}>Most Popular</NavbarButton>
                <NavbarButton style={{textDecoration: openNowLink}} onClick={onOpenNowClicked}>Open Now</NavbarButton>
            </RestaurantsNavbar>
            <RestaurantsContainer id="restaurantsContainer">
                {isMainContainerShown &&
                    restaurantsArray.map((restaurant:any, key:number) => (
                        <Container  key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                <RestaurantDiv >
                                    <RestaurantImg src={restaurant.url}/>
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                    <RestaurantChef>{restaurant.chef}</RestaurantChef>
                                </RestaurantDiv>
                        </Container>
                    ))
                }
                {isNewClicked &&
                    newRestaurants.map((restaurant:any, key:number) => (
                        <Container  key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                <RestaurantDiv >
                                    <RestaurantImg src={restaurant.url}/>
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                    <RestaurantChef>{restaurant.chef}</RestaurantChef>
                                </RestaurantDiv>
                        </Container>
                    ))
                }
                {isNowOpenClicked &&
                    openRestaurants.map((restaurant:any, key:number) => (
                        <Container  key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                <RestaurantDiv >
                                    <RestaurantImg src={restaurant.url}/>
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                    <RestaurantChef>{restaurant.chef}</RestaurantChef>
                                </RestaurantDiv>
                        </Container>
                    ))
                }
            </RestaurantsContainer>
        </ComponentMainDiv>
    )

}



const RestaurantsNavbar = styled.div`
display: flex;
justify-content: space-around;
padding: 0 20px 0 20px;
@media(min-width: 600px) {
    margin-top: 50px;
    justify-content: center;
    gap: 50px;
}
`
const NavbarButton = styled.a`
    font-weight: 200;
    cursor: pointer;

`



const RestaurantsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding-bottom: 20px;
    margin-top: 40px;
    @media(min-width: 600px) {
        width: 70%;
        margin: auto;
        margin-top: 40px;
    }
`

const Container = styled.div`
    width: 40%;
    @media(min-width: 600px) {
        width: 30%;
        text-align: center;
    }
`

const ComponentMainDiv = styled.div`
    
`

const RestaurantsHeadline = styled.div`
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

const RestaurantImg = styled.img`
    width: 100%;
    height: 130px;
    @media(min-width: 600px) {
        height: 180px
    }

`

const RestaurantName = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    margin-top: 20px;
`
    
const RestaurantChef = styled.div`
    font-size: 16px;
    margin-bottom: 10px;

`

const RestaurantDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255 243 228);
    cursor: pointer;
    @media(min-width: 600px) {
        width: 300px;
    }
`