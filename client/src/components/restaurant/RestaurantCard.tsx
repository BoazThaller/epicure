import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../redux/AppState';

export default function RestaurantCard() {

    const restaurantsArray = useSelector((state: AppState) => state.restaurantsArray);

    return (
        restaurantsArray.map((restaurant:any, key:number) => (
                <Container  key={key}>
                        <RestaurantDiv >
                            <RestaurantImg src={restaurant.url}/>
                            <RestaurantName>{restaurant.name}</RestaurantName>
                            <RestaurantChef>{restaurant.chef}</RestaurantChef>
                        </RestaurantDiv>
                </Container> 
        ))
    )
}

const Container = styled.div`
    width: 40%;
    @media(min-width: 600px) {
        width: 30%;
        text-align: center;
    }
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