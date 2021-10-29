import React from 'react'
import styled from 'styled-components';

export default function OurIcons() {
    return (
        <OurIconsDiv>
            <Headline>
                THE MEANING OF OUR ICONS : 
            </Headline>
            <Icons>
                <Icon>
                    <IconImg src="Assets/ourIcons/spicy.svg"/>
                    <IconName>Spicy</IconName>
                </Icon>
                <Icon>
                    <IconImg src="Assets/ourIcons/vegeterian.svg"/>
                    <IconName>Vegeterian</IconName>
                </Icon>
                <Icon>
                    <IconImg src="Assets/ourIcons/vegan.png"/>
                    <IconName>Vegan</IconName>
                </Icon>
            </Icons>
        </OurIconsDiv>
    )
}

const OurIconsDiv = styled.div`
    height: 100px;
    opacity: 0.9;
    padding: 16px 69px 13px;
    background: #f7f3f3;
    margin-bottom: 70px;
    margin-top: 80px;
    @media(min-width: 600px) {
        margin-top: 20px
    }
`

const Headline = styled.div`
    text-align: center;
    font-size: 15px
`

const IconImg = styled.img`
    width: 35px;
    height: 35px;

`

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const IconName = styled.div`
    font-size: 15px;
`

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media(min-width: 600px) {
        justify-content: center;
        gap: 50px;
    }
`
