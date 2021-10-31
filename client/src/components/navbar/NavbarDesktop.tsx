import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { ActionType } from '../../redux/ActionType';

export default function NavbarDesktop() {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const isRestaurantsClicked = useSelector((state: AppState) => state.restaurantsLink);
    const isChefsClicked = useSelector((state: AppState) => state.chefsLink);
    const amountOfItems = useSelector((state: AppState) => state.amountOfItems);


    const onLogoClicked = () => {
        history.push("/home");
        dispatch({type: ActionType.SetRestaurantsLink, payload: false});
        dispatch({type: ActionType.SetChefsLink, payload: false});

    }

    const onRestaurantsClicked = () => {
        history.push("/restaurants");
        dispatch({type: ActionType.SetRestaurantsLink, payload: true});
        dispatch({type: ActionType.SetChefsLink, payload: false});

    }

    const onChefsClicked = () => {
        history.push("/chefs");
        dispatch({type: ActionType.SetChefsLink, payload: true});
        dispatch({type: ActionType.SetRestaurantsLink, payload: false});

    }

    const onBagClicked = () => {
        history.push("/bag")
    }

    let restaurantLink = isRestaurantsClicked ? "underline" : "none"
    let chefsLink = isChefsClicked ? "underline" : "none"

    return (
        <NavbarContainer>
            <LeftSide>
            <FadeIn delay={100} transitionDuration={700} >
                <Logo onClick={() => onLogoClicked()}></Logo>
            </FadeIn>
            <FadeIn delay={200} transitionDuration={700} >
                <Name>EPICURE</Name>
            </FadeIn>
            <FadeIn delay={300} transitionDuration={700} >
                <Restaurants style={{textDecoration: restaurantLink}} onClick={() => onRestaurantsClicked()}>Restaurants</Restaurants>
            </FadeIn>
            <FadeIn delay={400} transitionDuration={700} >
                <Chefs style={{textDecoration: chefsLink}} onClick={() => onChefsClicked()}>Chefs</Chefs>
            </FadeIn>
            </LeftSide>
            <RightSide>
            <FadeIn delay={500} transitionDuration={700} >
                <SearchBar placeholder="Search for restaurant, cuisine, chefs"></SearchBar>
            </FadeIn>
            <FadeIn delay={600} transitionDuration={700} >
                <Profile></Profile>
            </FadeIn>
            <FadeIn delay={700} transitionDuration={700} >
                <Bag onClick={() => onBagClicked()}></Bag>
                <Item>{amountOfItems > 0 && amountOfItems}</Item>
            </FadeIn>
            </RightSide>
        </NavbarContainer>
    )
}

const Item = styled.h6`
    border-radius: 50%;
    width: 10px;
    text-align: center;
    background: black;
    color: white;
    position: absolute;
    top: 0;
    margin-top: 4px;
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    height: 40px;
    border-bottom: 1px solid rgb(167 165 165 / 50%);
`

const LeftSide = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Logo = styled.button`
    width: 30px;
    height: 30px;
    background: url("Assets/icons/about-logo-small.png");
    background-size: 30px 30px;
    border:none;
`

const Name = styled.div`

`

const Restaurants = styled.button`
    border:none;
    background: transparent;
`

const Chefs = styled.button`
    border:none;
    background: transparent;
`

const Bag = styled.button`
    width: 20px;
    height: 20px;
    background: url("Assets/icons/cart.svg");
    background-size: 20px 20px;
    border:none;

`

const Profile = styled.button`
    width: 20px;
    height: 20px;
    background: url("Assets/icons/profile.svg");
    background-size: 20px 20px;
    border:none;
    
`

const SearchBar = styled.input`
    background: url(Assets/icons/search.png);
    padding-left: 20px;
    background-size: 22px;
    background-repeat: no-repeat;
    height: 20px;
    opacity: 0.8;
    width: 270px;
    border: 1px solid #0000002e;
`