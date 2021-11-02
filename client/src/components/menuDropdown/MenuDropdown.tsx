import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router-dom";


export default function MenuDropdown(props:any) {

    const history = useHistory();


    const onXClicked = () => {
        props.setIsDropDownShown(false);
    }
    
    const onRestaurantsClicked = () => {
        history.push("/restaurants");
        props.setIsDropDownShown(false);
    }


    return (
        <ModalBackground isDropDownShown={props.isDropDownShown}>
            <Div>
                <CloseModal onClick={() => onXClicked()}>X</CloseModal>
            </Div>
            <ModalContainer>
                <Options>
                    <Chefs >Chefs</Chefs>
                    <Restaurants onClick={() => onRestaurantsClicked()}>All Restaurants</Restaurants>
                </Options>
                <FooterDiv>
                    <FooterHeadline>Sign In</FooterHeadline>
                    <FooterHeadline>Contact Us</FooterHeadline>
                    <FooterHeadline>Term of Use</FooterHeadline>
                </FooterDiv>    
            </ModalContainer>
        </ModalBackground>
    )
}

const Div = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;

`

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    position: fixed;
    display: flex;
    top: 50%;
    left: ${(props: {isDropDownShown : boolean}) => (props.isDropDownShown ? "50%" : "-100%")};
    transition: left 1.3s;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    z-index: 9000;


`

const FooterDiv= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 126px;
    gap: 30px;
    margin-top: 80px;

`

const FooterHeadline = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: HelveticaNeue;
    font-size: 22px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.76px;
    text-align: center;
    color: var(--black);
    opacity: 0.4;
`

const ModalContainer = styled.div`


`


const CloseModal = styled.button`
    background: none;
    border: none;
    font-size: 30px;
    transition: all 1.5s ease-in-out;
    :focus {
        transform: rotate(-500deg)
    }


`

const Restaurants = styled.button`
    border: none;
    background: none;
    font-size: 30px;


`

const Chefs = styled.button`
    border: none;
    background: none;
    font-size: 30px;

`

const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-bottom: 2px solid;
    padding-bottom: 60px;
`

