import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { ActionType } from '../../redux/ActionType';
import { useHistory } from 'react-router';
import axios from 'axios';

export default function RestaurantsDesktop() {

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
    
    const onAllRestaurantsClicked = () => {
        dispatch({type: ActionType.SetRestaurantsLink, payload: true});
        history.push("/restaurants");
    }

    return (
        <Container>
            <HeadlineDiv>
                <Headline>THE POPULAR RESTAURANTS IN EPICURE:</Headline>
            </HeadlineDiv>
            <RestaurantsContainer>
                {restaurantsArray.slice(0,3).map((restaurant:any, key:number) => (
                        <RestaurantContainer key={key} onClick={() => onRestaurantClicked(restaurant)}>
                                <RestaurantDiv>
                                    <RestaurantImg src={restaurant.url}/>
                                    <RestaurantName>{restaurant.name}</RestaurantName>
                                    <RestaurantChef>{restaurant.chef}</RestaurantChef>
                                </RestaurantDiv>
                        </RestaurantContainer>
                    ))}
            </RestaurantsContainer>
            <AllRestaurantsContainer>
                <AllRestaurants onClick={() => onAllRestaurantsClicked()}>All Restaurants {'>'}{'>'} </AllRestaurants>
            </AllRestaurantsContainer>
        </Container>
    )
}

const RestaurantImg = styled.img`
    width: inherit;
    height: 160px;

`

const RestaurantChef =styled.div`
    font-size: 20px;
    margin-bottom: 10px;
`

const RestaurantName = styled.div`
    font-size: 28px;
    margin-bottom: 10px;
    margin-top: 20px;
`

const RestaurantDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(232, 196, 122, 0.2);
    cursor: pointer;
    width: 270px;

    
`

const Container = styled.div`
    margin-bottom: 100px;

`
const RestaurantsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const RestaurantContainer = styled.div`

`

const HeadlineDiv = styled.div`
    text-align: center;
    margin-bottom: 30px;
    margin-top: 50px;
`

const Headline = styled.div`
    font-size: 30px;
    word-spacing: 6px;
`

const AllRestaurants = styled.button`
    border:none;
    background: transparent;
    font-size: 23px;
    float: right;

`

const AllRestaurantsContainer = styled.div`
    width: 80%;
    margin-top: 30px;
`