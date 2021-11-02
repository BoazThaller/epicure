import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import MenuDropdown from '../menuDropdown/MenuDropdown';
// import ReactDOM from 'react-dom'
import FadeIn from 'react-fade-in';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/AppState';

export default function Navbar() {

    const history = useHistory();
    const [isDropDownShown, setIsDropDownShown] = useState(false);
    const amountOfItems = useSelector((state: AppState) => state.amountOfItems);


    const dropDownHandler = () => {
        setIsDropDownShown(true);
    }
    
    const onLogoClicked = () => {
        history.push("/home");
        setIsDropDownShown(false);
    }

    const onBagClicked = () => {
        history.push("/bag")
    }

    return (
        <NavbarDiv>
            <FadeIn delay={100} transitionDuration={700} >
                <DropDown onClick={() => dropDownHandler()}></DropDown>
            </FadeIn>

            <FadeIn delay={200} transitionDuration={700} >
                <Logo onClick={() => onLogoClicked()}></Logo>
            </FadeIn>

            <RightMenu>
            <FadeIn delay={300} transitionDuration={700} >
                <Search></Search>
            </FadeIn>
            <FadeIn delay={400} transitionDuration={700} >
                <Profile></Profile>
            </FadeIn>
            <FadeIn delay={500} transitionDuration={700} >
                <Bag onClick={onBagClicked}></Bag>
                <Item>{amountOfItems > 0 && amountOfItems}</Item>
            </FadeIn>
            </RightMenu>
             <MenuDropdown isDropDownShown={isDropDownShown} setIsDropDownShown={setIsDropDownShown}/>
        </NavbarDiv>
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

const NavbarDiv = styled.div `
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 600px) {
        max-width: 1200px;
        margin: auto;
    }
    
    `
    
    const DropDown = styled.button`
    width: 20px;
    height: 20px;
    background: url("Assets/icons/dropDown.svg");
    background-size: 20px 20px;
    border:none;
    margin-left: 5px;
    @media (min-width: 600px) {
        display: none;
    }
    
`
    
const Logo = styled.button`
    width: 30px;
    height: 30px;
    background: url("Assets/icons/about-logo-small.png");
    background-size: 30px 30px;
    border:none;
    margin-left: 50px;
`
    
const RightMenu = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-right: 5px;
    align-items: center;
`
    
const Profile = styled.button`

    width: 20px;
    height: 20px;
    background: url("Assets/icons/profile.svg");
    background-size: 20px 20px;
    border:none;
    
    `
    
const Search = styled.input`
    width: 5px;
    background: url(Assets/icons/search.png);
    padding-left: 20px;
    background-size: 25px;
    background-repeat: no-repeat;
    -webkit-transition: 1s ease;
    transition: 1s ease;
    border: none;
    padding-bottom: 12px;
    opacity: 0.7;
    :focus{
        transition: 1s ease;
        width: 90px;
        border: 1px solid black;
        border-radius: 5px;
        background-size: 18px;
        padding-bottom: 5px;

    }

`
    
    const Bag = styled.button`
    width: 20px;
    height: 20px;
    background: url("Assets/icons/cart.svg");
    background-size: 20px 20px;
    border:none;

`


