import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ActionType } from '../../redux/ActionType';
import { AppState } from '../../redux/AppState';
import Footer from '../footer/Footer';
import WindowSize from '../windowSize';
import DishChanges from './DishChanges';
import DishSide from './DishSide';

export default function Dish(props:any) {

    const dispatch = useDispatch();
    const size = WindowSize();
    const dish = useSelector((state: AppState) => state.dishObj)
    const [quantity, SetQuantity] = useState(1);

    const onXClicked = () => {
        props.setIsDishModalDisplayed(false);
    }

    const onPlusClicked = () => {
        SetQuantity(quantity +1);
    }   
    
    const onMinusClicked = () => {
        if(quantity === 1) {
            SetQuantity(quantity);
        }
        else {
            SetQuantity(quantity -1);
        }
    }   
    const addToBag = () => {       
        const sides:any = document.querySelectorAll(`input[name="side"]`)
        const changes:any = document.querySelectorAll(`input[name="change"]`);
        props.setIsDishModalDisplayed(false);
        dispatch({type: ActionType.AddToBag, payload: +1});
        let side = DishSide(sides);
        let changesArray = DishChanges(changes);
        let orderSummary = side + ", " + changesArray;
        alert(orderSummary);
        let orders:any = [];
        orders.push({name:dish[0].name, side: side, changes: changesArray})
        dispatch({type: ActionType.AddToOrders, payload: orders});

    }

    return (
        <Main>
            <ModalBackground>
                <Div>
                    <CloseModal onClick={() => onXClicked()}>X</CloseModal>
                </Div>
                {dish.map((dish:any, key:number) => (
                    <ModalContainer key={key}>
                        <DishImg src={dish.dishImg}/>
                        <DishContent>
                            <IconAndName>
                                <DishIcon src={dish.icon}/>
                                <DishName>{dish.name}</DishName>
                            </IconAndName>
                                <DishAbout>{dish.content}</DishAbout>
                                <TextContainer>
                                    <DishPrice>₪{dish.price}</DishPrice>
                                    <Line></Line>
                                </TextContainer>
                        </DishContent>
                        <Options>
                            <HeadlineDiv>
                                <Headline>Choose a side</Headline>
                            </HeadlineDiv>
                            <SideOptions>
                                <OptionDiv>
                                    <OptionInput id="whiteBread" type="radio" name="side" value="white Bread" checked></OptionInput>
                                    <OptionName>White Bread</OptionName>    
                                </OptionDiv> 
                                <OptionDiv>
                                    <OptionInput id="stickyRice" type="radio" name="side" value="sticky Rice"></OptionInput>
                                    <OptionName>Sticky Rice</OptionName>    
                                </OptionDiv> 
                            </SideOptions>
                            <HeadlineDiv>
                                <Headline>Changes</Headline>
                            </HeadlineDiv>
                            <ChangesOptions>
                                <ChangeDiv>
                                    <ChangeInput type="checkbox" id="WithoutOnion" name="change" value="without Onions" />
                                    <ChangeName>Without Onion</ChangeName>
                                </ChangeDiv>
                                <ChangeDiv>
                                    <ChangeInput type="checkbox" id="WithoutPeanuts" name="change" value="without Peanuts" />
                                    <ChangeName>Without Peanuts</ChangeName>
                                </ChangeDiv>
                                <ChangeDiv>
                                    <ChangeInput type="checkbox" id="lessSpicy" name="change" value="less Spicy" />
                                    <ChangeName>Less Spicy</ChangeName>
                                </ChangeDiv>
                            </ChangesOptions>
                            <HeadlineDiv>
                                <Headline>Quantity</Headline>
                            </HeadlineDiv>
                            <QuantityDiv>
                                <Plus onClick={() => onMinusClicked()}>-</Plus>
                                <Quantity type="number" value={quantity} disabled/>
                                <Minus onClick={() => onPlusClicked()}>+</Minus>
                            </QuantityDiv>
                            <AddDishDiv>
                                <AddDish id="addToBag" onClick={addToBag}>ADD TO BAG</AddDish>
                            </AddDishDiv>
                        </Options>
                        {size < 600 &&
                            <FooterDiv>
                                <Footer/>
                            </FooterDiv>
                        }
                    </ModalContainer>
                ))}
            </ModalBackground>

        </Main>
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

const IconAndName = styled.div`
    display: flex;
    gap: 10px;
`

const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(46 45 45 / 97%);
    position: fixed;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    z-index: 9999;
`

const HeadlineDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const Headline = styled.div`
    border-bottom: 2px solid rgba(222,146,0,0.9);
    width: fit-content;
`

const Plus = styled.button`
    border: none;
    background: transparent;
    font-size: 35px;
`

const Minus = styled.button`
    border: none;
    background: transparent;
    font-size: 35px;
`

const Options = styled.div`

`

const ChangeDiv = styled.div`

`

const QuantityDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    @media(min-width: 600px) {
        margin-top: -25px;
    }
`

const Quantity = styled.input`
    border: none;
    width: 10%;
    background: transparent;
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
    margin-left: 15px;
`

const AddDish = styled.button`
    background: black;
    color: white;
    padding: 8px;
    border: none;
    width: 115px;
`

const AddDishDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    @media(min-width: 600px) {
        margin-top: 10px
    }
`

const DishIcon = styled.img`
    height: 25px;
`

const DishPrice = styled.div`
    position: relative;
    display: inline-block;
    padding: 0 10px;
    font-weight: 200;
    background: white;
`

const DishContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    gap: 20px;
`

const DishName = styled.div`
    font-size: 25px;
`

const DishAbout = styled.div`
    font-size: 20px;
    text-align:center;
    padding: 0 50px 0 50px;
    @media(min-width: 600px) {
        font-size: 15px;
        width: 200px;
    }
`

const DishImg = styled.img`
    width: 100%;
    height: 250px

`

const Div = styled.div`
    width: 100%;

`

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    position: fixed;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // justify-content: center;
    align-items: center;
    z-index: 1;
    flex-direction: column;
    overflow-y: overlay;
    @media (min-width:600px) {
        width: 360px;
        height: 85%;
        padding-bottom: 10px;
        z-index: 1;
    }


`

const FooterDiv= styled.div`
    border-top: 1px solid black;
    margin-top: 30px;

`

const ModalContainer = styled.div`

`

const CloseModal = styled.button`
    background: none;
    border: none;
    font-size: 30px;
    @media(min-width: 600px) {
        font-size: 20px;
    }
    transition: all 0.4s ease-in-out;
    :hover {
        transform: rotate(360deg);
    }
`

const OptionDiv = styled.div`

`
const SideOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 20px;
    gap: 15px;
    @media( min-width: 600px) {
        text-align: center;
        width: 50%;
        margin: auto;
        align-items: baseline;
        margin-top: 10px;
    }
`

const OptionInput = styled.input`

`

const ChangeInput = styled.input`

`

const OptionName = styled.span`

`

const ChangeName = styled.span`

`

const ChangesOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 20px;
    gap: 15px;
    @media( min-width: 600px) {
        text-align: center;
        width: 50%;
        margin: auto;
        align-items: baseline;
        margin-top: 10px;
    }
`
