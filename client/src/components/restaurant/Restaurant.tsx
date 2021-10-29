import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import styled from 'styled-components';
import { ActionType } from '../../redux/ActionType';
import Dish from '../dish/Dish';
import WindowSize from '../windowSize';


export default function Restaurant() {

    const size = WindowSize();
    
    const dispatch = useDispatch();
    
    const restaurantArray = useSelector((state: AppState) => state.restaurantArray);
    const dishesArray = useSelector((state: AppState) => state.dishesArray);
    const restaurantName = useSelector((state: AppState) => state.restaurantArray);
    const [isDishModalDisplayed, setDishModal] = useState(false);
    
    const [restaurantStorage, setRestaurant] = useState([]);
    const [dishesStorage, setDishes] = useState<any[]>([]);
    let filteredDishes = dishesArray.filter(dish => dish.restaurant === restaurantName[0].name);

    useEffect(() => {
        async function fetchRestaurantAndDishes() {
            validateLocalStorage();
            let restaurant = await JSON.parse(localStorage.getItem("restaurantData")!);
            setRestaurant(restaurant);
            let dishes = await JSON.parse(localStorage.getItem("dishesData")!);
            setDishes(dishes);
        }
        fetchRestaurantAndDishes();
    }, [])
    
    let breakfast = dishesStorage.filter(dish => dish.type === "breakfast");
    let lunch = dishesStorage.filter(dish => dish.type === "lunch");
    let dinner = dishesStorage.filter(dish => dish.type === "dinner");
    
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time = (hour + ":" + minutes);

    const validateLocalStorage = () => {
        if(!localStorage.getItem("restaurantData") && !localStorage.getItem("dishesData")) {
            localStorage.setItem("restaurantData", JSON.stringify(restaurantArray));
            localStorage.setItem("dishesData", JSON.stringify(filteredDishes));
        
        }
    }

    const onDishClicked = (dish:any) => {
        dispatch({type: ActionType.GetDish, payload: dish});
        setDishModal(true);
    }
    
    return (
        <RestaurantContainer>
            {restaurantStorage.map((restaurant:any, key:number) => (
                <RestaurantDiv key={key}>
                    {size < 600 ?
                        <RestaurantImg src={restaurant.url}/>
                        :
                        <RestaurantBigImg src={restaurant.urlBig}/>
                    }
                    <RestaurantData>
                        <RestaurantName>{restaurant.name}</RestaurantName>
                        <RestaurantChef>{restaurant.chef}</RestaurantChef>
                        {time > restaurant.opens && time < restaurant.closes ? 
                            <RestaurantHours>Open Now</RestaurantHours>
                        :
                            <RestaurantHours>Closed</RestaurantHours>
                        }
                    </RestaurantData>
                    <RestaurantOptions>
                        <RestaurantOption href="#breakfast">Breakfast</RestaurantOption>
                        <RestaurantOption href="#lunch">Lunch</RestaurantOption>
                        <RestaurantOption href="#dinner">Dinner</RestaurantOption>
                    </RestaurantOptions>
                <DishesContainer>
                    <ContainerDiv>
                        {breakfast.map((dish:any, key:number) => (
                            <Container key={key} onClick={() => onDishClicked(dish)}>
                                <Div>
                                    <BreakfastContainer>
                                        <DishImg src={dish.dishImg}/>
                                            <DishName>{dish.name}</DishName>
                                            <DishContent>{dish.content}</DishContent>
                                            <TextContainerPrice>
                                                <DishPrice>₪{dish.price}</DishPrice>
                                                <LinePrice></LinePrice>
                                            </TextContainerPrice>
                                        </BreakfastContainer>
                                </Div>
                                </Container>
                        ))}
                    </ContainerDiv>

                    <TextContainer>
                        <LunchHeadline id="lunch">LUNCH</LunchHeadline>
                        <Line></Line>
                    </TextContainer>

                    <ContainerDiv>
                        {lunch.map((dish:any, key:number) => (
                            <Container key={key} onClick={() => onDishClicked(dish)}>
                                <Div>
                                    <LunchContainer>
                                        <DishImg src={dish.dishImg}/>
                                            <DishName>{dish.name}</DishName>
                                            <DishContent>{dish.content}</DishContent>
                                            <TextContainerPrice>
                                                <DishPrice>₪{dish.price}</DishPrice>
                                                <LinePrice></LinePrice>
                                            </TextContainerPrice>                                    
                                    </LunchContainer>
                                </Div>
                                </Container>
                        ))}
                    </ContainerDiv>

                    <TextContainer>
                        <DinnerHeadline id="dinner">DINNER</DinnerHeadline>
                        <Line></Line>
                    </TextContainer>

                    <ContainerDiv>
                        {dinner.map((dish:any, key:number) => (
                            <Container key={key} onClick={() => onDishClicked(dish)}>
                                <Div>
                                    <DinnerContainer>
                                        <DishImg src={dish.dishImg}/>
                                            <DishName>{dish.name}</DishName>
                                            <DishContent>{dish.content}</DishContent>
                                            <TextContainerPrice>
                                                <DishPrice>₪{dish.price}</DishPrice>
                                                <LinePrice></LinePrice>
                                            </TextContainerPrice>
                                    </DinnerContainer>
                                </Div>
                                </Container>
                        ))}
                    </ContainerDiv>
                </DishesContainer>
                </RestaurantDiv>
            ))}
            {(isDishModalDisplayed && <Dish setIsDishModalDisplayed={setDishModal}/>)}

        </RestaurantContainer>
    )
}
const TextContainer = styled.div`
    text-align: center;
    width: 80%;
    @media(min-width: 600px) {
        width: auto;
    }
`

const Line = styled.div`
    height: 2px;
    background: black;
`

const TextContainerPrice = styled.div`
    text-align: center;
    width: 70%;

`

const LinePrice = styled.div`
    height: 2px;
    background: black;
    margin-top: -10px;
    margin-bottom: 20px;
`

const BreakfastContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: rgb(255 243 228);
    justify-content: space-between;
    @media(min-width: 600px) {
        width: 200px;
    }
`

const LunchHeadline = styled.h1`
    position: relative;
    top: 36px;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;
`
    const DinnerHeadline = styled.h1`
    position: relative;
    top: 36px;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;

`

const LunchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: rgb(255 243 228);
    justify-content: space-between;
    @media(min-width: 600px) {
        width: 200px;
    }
`

const DinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: rgb(255 243 228);
    justify-content: space-between;
    @media(min-width: 600px) {
        width: 200px;
    }
`

const DishesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding-bottom: 20px;
    margin-top: 40px;
    @media(min-width: 600px) {
        display: block;
    }

`

const DishName = styled.div`
    font-size: 20px;
`

const Container = styled.div`
    width: 40%;
    display: flex;
    @media(min-width: 600px) {
        width: auto;
    }

`

const DishImg = styled.img`
    width: 100%;
    height: 150px;

`


const RestaurantContainer = styled.div`
    @media(min-width: 600px) {
        width: 80%;
        margin: auto;
    }
`

const RestaurantDiv = styled.div`
    @media(min-width: 600px) {
        text-align: center;
        width: 80%;
        margin: auto;
    }
`

const DishContent = styled.div`
    text-align: center;
    padding: 10px
    
`

const DishPrice = styled.div`
    position: relative;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;
    background: rgb(255 243 228);
`

const RestaurantImg = styled.img`
    width: 100%;
`
const RestaurantBigImg = styled.img`
    width: 97%;
    margin: auto;
`

const RestaurantName = styled.div`
    font-size: 36px;
    font-weight: 500;
    margin-top: 20px;
`
    
const RestaurantChef = styled.div`
    font-size: 22px;

`
    
const RestaurantHours = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
    margin-top: 20px;

`

const RestaurantOptions = styled.div`
    display: flex;
    justify-content: space-around;
    @media(min-width: 600px) {
        justify-content: center;
        gap: 25px;
    }
`

const RestaurantOption = styled.a`
    color: black;
    text-decoration: none;
    cursor: pointer;

`

const RestaurantData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 40px;
`