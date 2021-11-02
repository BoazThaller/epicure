import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { ActionType } from '../../redux/ActionType';
import { IDish } from '../../interfaces/IDish';
import { IRestaurant } from '../../interfaces/IRestaurant';
import Dish from '../dish/Dish';
import FadeIn from 'react-fade-in';
import WindowSize from '../windowSize';


export default function MainSearch() {

    const size = WindowSize();
    // const chefsArray = useSelector((state: AppState) => state.chefArray);
    const restaurantsArray = useSelector((state: AppState) => state.restaurantsArray);
    const dishesArray = useSelector((state: AppState) => state.dishesArray);

    const [isSearched, setIsSearched] = useState(false);
    const [dishesResults, setDishes] = useState<IDish[]>([]);
    const [restuarantsResults, setRestaurants] = useState<IRestaurant[]>([]);
    const [isDishModalDisplayed, setDishModal] = useState(false);
    const [search, setSearch] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();

    const onChefsClicked = () => {
        history.push("/chefs");
    }

    const onRestaurantsClicked = () => {
        history.push("/restaurants");
    }

    const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        if(event.target.value === "") {
            setIsSearched(false);
            return;
        }
        setIsSearched(true);
        let dishesNames = dishesArray.filter(dish => dish.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
        let restaurants = restaurantsArray.filter(restaurant => restaurant.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
        setDishes(dishesNames);
        setRestaurants(restaurants);
    }

        
    const onDishClicked = (dish:any) => {
        dispatch({type: ActionType.GetDish, payload: dish});
        setDishModal(true);
    }

    const onRestaurantClicked = (restaurant:any) => {
        dispatch({type: ActionType.GetRestaurant, payload: restaurant});
        history.push("/restaurant");
    }

    const onClearClicked = () => {
        setSearch("");
        setIsSearched(false);
    }


    return (
        <MainContainer>
            <ImgContainer>
            <Div>
                <SearchDiv>
                    <Headline>Epicure works with the top <br/> chef restaurants in Tel Aviv</Headline>
                    <SearchAndClear>
                        <SearchBar value={search} onChange={onInputChanged} placeholder="Search for restaurant cuisine, chef"></SearchBar>
                        {size > 600 &&
                            <ClearSearch onClick={onClearClicked}>X</ClearSearch>
                        }
                    </SearchAndClear>
                </SearchDiv>
                    {isSearched  &&
                    <FadeIn transitionDuration={700} delay={200}>
                        <SearchResults>
                            <RestaurantsHeadline>Restaurants:</RestaurantsHeadline>
                            {restuarantsResults.map((restaurant:any, key:number) => (
                                <RestaurantsResults key={key}>
                                    <Result onClick={() => onRestaurantClicked(restaurant)}>{restaurant.name}</Result>
                                </RestaurantsResults>
                            ))}

                            <DishHeadline>Dishes:</DishHeadline>
                            {dishesResults.map((dish:any, key:number) => (
                                <DishesResults key={key}>
                                    <Result onClick={() => onDishClicked(dish)}>{dish.name}</Result>
                                </DishesResults>
                            ))}
                        </SearchResults>
                    </FadeIn>
                    }
            </Div>
            </ImgContainer>
            {size < 600 &&
                <SearchOptions>
                    <Button onClick={() => onChefsClicked()}>CHEFS</Button>
                    <Button onClick={() => onRestaurantsClicked()}>RESTAURANTS</Button>
                </SearchOptions>
            }   
            {(isDishModalDisplayed && <Dish setIsDishModalDisplayed={setDishModal}/>)}

        </MainContainer>
    )
}

const SearchAndClear = styled.div`
    position: relative;
    margin: auto;
    @media(min-width: 600px) {
        width: 320px;

    }
`
const ClearSearch = styled.button`
    background: transparent;
    cursor: pointer;
    position: absolute;
    border-radius: 5px;
    z-index: 2;
    border: none;
    cursor: pointer;
    margin-left: -20px;
    margin-top: 7px;
    font-size: 15px;
    transition: all 0.4s ease-in-out;
    :hover {
        transform: rotate(360deg);
    }
    @media(min-width: 600px) {
        margin-top: 28px;
    }


`

const Result = styled.div`
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin: 3px;
    margin-left: 10px;

`

const Div = styled.div`

`
const RestaurantsHeadline = styled.h5`
    font-size: 17px;
    font-weight: 200;
    margin-top: 0;
    margin-bottom: 5px;
`
    
const DishHeadline = styled.h5`
    font-size: 17px;
    font-weight: 200;
    margin-bottom: 5px;
`

const RestaurantsResults = styled.div`

`

const DishesResults = styled.div`

`

const SearchResults = styled.div`
    padding: 5px 19px 8px 9px;
    border: solid 0.2px var(--black);
    width: 80%;
    background: white;
    margin: auto;
    height: 65px;
    overflow-y: overlay;
    margin-top: -20px;
    @media(min-width: 600px) {
        width: 67%;
        text-align: left;
        // margin: auto;
        background: white;
        height: 50px;
        // overflow-y: overlay;
        padding: 10px 0 10px 0;
        padding-left: 20px;
        padding-bottom: 30px;
        margin-top: -21px;
    }
`



const MainContainer = styled.div`
    background: #fafafa;
    // opacity: 0.9;
`

const ImgContainer = styled.div`
    background: url("Assets/mainPage-photo.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 600px) {
        background: url("Assets/mainPageDesktop.png");
        background-repeat: no-repeat;
        height: 696px;
    
    }
`
const Headline = styled.h1`
    text-align: center;    
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    padding-top: 20px;

`

const SearchBar = styled.input`
    padding: 8px 19px 8px 9px;
    border-radius: 4px;
    border: solid 0.2px var(--black);
    width: 80%;
    background: url(Assets/icons/search.png);
    padding-left: 30px;
    background-size: 30px;
    background-repeat: no-repeat;
    background-color: white;
    opacity: 0.8;
    width: 270px;
    border: 1px solid #0000002e;
    margin-top: 20px;   
    @media(min-width: 600px) {
        width: 85%;

    }
`

const SearchDiv = styled.div`
    width: 335px;
    background-color: rgba(255, 255, 255, 0.88);
    text-align: center;
    padding: 0 10px 20px 10px;
    @media(min-width: 600px) {
        width: 400px;
        padding-top: 10px;
        text-align: center;
    }

`

const SearchOptions = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 125px;
    opacity: 0.9;
    background-color: #fafafa;
    align-items: center;
    margin-bottom: 50px;
`

const Button = styled.button`
    height: 43px;
    background: rgba(232, 196, 122, 0.8);
    border: none;
    padding: 8px;
    letter-spacing: 0.93px;
    cursor: pointer;
`



