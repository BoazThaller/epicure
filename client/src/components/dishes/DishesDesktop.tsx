import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { ActionType } from '../../redux/ActionType';

import Dish from '../dish/Dish';
import axios from 'axios';


export default function Dishes() {

    const dispatch = useDispatch();
    const dishesArray = useSelector((state: AppState) => state.dishesArray)
    const [isDishModalDisplayed, setDishModal] = useState(false);

    
    useEffect(() => {
        async function fetchDishes() {
            let dishes = await axios.get("http://localhost:3001/api/v1/dishes");   
            dispatch({type: ActionType.GetDishes, payload: dishes});
        }
        fetchDishes();
    }, [dispatch])
    
    
    const onDishClicked = (dish:any) => {
        dispatch({type: ActionType.GetDish, payload: dish});
        setDishModal(true);
    }

    return (
        <MainContainer>
            <SignatureDishOf>SIGNATURE DISH OF : </SignatureDishOf>
            <DishesContainer>
                {dishesArray.slice(0,3).map((dish:any, key:number) => (
                    <Container key={key} onClick={() => onDishClicked(dish)}>
                            <DishDiv>
                                <Div>
                                    <DishRestaurant>{dish.restaurant}</DishRestaurant>
                                </Div>
                                <Div>
                                    <DishImg src={dish.dishImg}/>
                                </Div>
                                <ContentDiv>
                                    <DishName>{dish.name}</DishName>
                                    <DishContent>{dish.content}</DishContent>
                                    <IconDiv>
                                        <DishIcon src={dish.icon}/>
                                    </IconDiv>
                                    <TextContainer>
                                        <DishPrice>₪{dish.price}</DishPrice>
                                        <Line></Line>
                                    </TextContainer>
                                </ContentDiv>
                            </DishDiv>
                    </Container>
                ))} 
            </DishesContainer>
            {(isDishModalDisplayed && <Dish setIsDishModalDisplayed={setDishModal}/>)}

        </MainContainer>
    )
}

const TextContainer = styled.div`
    text-align: center;
    width: 70%;

`

const Line = styled.div`
    height: 2px;
    background: black;
    margin-top: -10px;
    margin-bottom: 20px;
`

const MainContainer = styled.div`
`

const Container = styled.div`

`

const DishesContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(255 243 228);
`

const SignatureDishOf = styled.div`
    text-align: center;
`

const DishRestaurant = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;

`

const DishDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 30px;
    width: 270px;
    cursor: pointer;
`

const DishImg = styled.img`
    height: 230px;
    width: inherit;
`

const DishName = styled.div`
    font-size: 27px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
`

const DishContent = styled.div`
    text-align: center;
    padding: 0 20px 0 20px;
    height: 50px;
`

const DishIcon = styled.img`
    margin-top: 20px;
    height: 25px;
`

const DishPrice = styled.div`
    position: relative;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;
    background: rgb(255 243 228);

`

const Div = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    width: inherit;

    
`

const IconDiv = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

