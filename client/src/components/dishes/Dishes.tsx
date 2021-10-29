import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        // async function fetchNames() {
        //     let names = await axios.get("http://localhost:3001/api/v1/dishes/names");
        //     dispatch({type: ActionType.GetDishesNames, payload: names});
        // }
        async function fetchDishes() {
            let dishes = await axios.get("http://localhost:3001/api/v1/dishes");   
            dispatch({type: ActionType.GetDishes, payload: dishes});
        }
        // fetchNames();
        fetchDishes();
        // let dishes = fetchDishes();
        // dispatch({type: ActionType.GetDishes, payload: dishes});
    }, [dispatch])
    
    let sliderSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    
    const onDishClicked = (dish:any) => {
        dispatch({type: ActionType.GetDish, payload: dish});
        setDishModal(true);
    }

    return (
        <DishesContainer>
            <SignatureDishOf>SIGNATURE DISH OF : </SignatureDishOf>
            {/* {window.innerWidth < 650 ?  */}
            <Slider {...sliderSettings}>
            {dishesArray.slice(0,7).map((dish:any, key:number) => (
                <Container key={key} onClick={() => onDishClicked(dish)}>
                        <DishDiv>
                            <Div>
                                <DishRestaurant>{dish.restaurant}</DishRestaurant>
                            </Div>
                            <ImgDiv>
                                <DishImg src={dish.dishImg}/>
                            </ImgDiv>
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
            </Slider>
        {(isDishModalDisplayed && <Dish setIsDishModalDisplayed={setDishModal}/>)}
        </DishesContainer>
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

const Container = styled.div`

`
    
const DishesContainer = styled.div`

`

const ContentDiv = styled.div`
    width: 70%;
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
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 10px;
    cursor: pointer;
`

const DishImg = styled.img`
    height: 210px;
    width: -webkit-fill-available;
`

const DishName = styled.div`
    font-size: 27px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
`

const DishContent = styled.div`
    text-align: center;
    padding: 5px;
`

const DishIcon = styled.img`
    margin-top: 20px;
    height: 25px;
`

const DishPrice = styled.div`
    position: relative;
    background: #fff;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;
    background: rgb(255 243 228);

`

const Div = styled.div`
    background: white;
    display: flex;
    justify-content: center;
`
const ImgDiv = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    width: 70%
`

const IconDiv = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

