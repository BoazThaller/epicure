import React from 'react'
import styled from 'styled-components';

export default function AboutUs() {
    return (
        <Container>
            <AboutDiv>
                <AboutHeadline>ABOUT US</AboutHeadline>
                <ContentAndDiv>
                    <AboutContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. 
                            Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
                            <br/><br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. 
                            Cras porta malesuada eros, eget blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, dignissim a vestibulum.
                    </AboutContent>
                    <AboutImg src="/Assets/icons/about-logo.png"/>
                </ContentAndDiv>
                <Downloads>
                    <AppleDownload>
                        <AppleIcon src="/Assets/icons/apple-icon.svg"/>
                        <AppleContent>
                            Download on the <br/>
                                App Store
                        </AppleContent>
                    </AppleDownload>
                    <GoogleDownload>
                        <GoogleIcon src="/Assets/icons/google-icon.svg"/>
                        <GoogleContent>
                            Get it on <br/>
                                Google Play
                        </GoogleContent>
                    </GoogleDownload>
                </Downloads>
            </AboutDiv>
        </Container>
    )
}

const Container = styled.div`
    background: #f7f3f3;
    opacity: 0.9;
`
const ContentAndDiv = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media(min-width: 600px) {
        flex-direction: row;
        gap: 100px;
        justify-content: start;
        width: 100%;
    }
`

const Downloads = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    @media(min-width: 600px) {
        gap: 20px;
        width: 100%;
        justify-content: flex-start;
    }
`

const AppleDownload = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 6.7px;
    border: solid 0.5px black;
    padding: 5px 12.2px 5.8px 10.5px;
    cursor: pointer;

`
const AppleIcon = styled.img`
    width: 17px;
    height: 22px;
    
`
    
const AppleContent = styled.div`
    font-size: 9.2px;
    text-align: center;
`
    
const GoogleDownload = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 6.7px;
    border: solid 0.5px black;
    padding: 5px 12.2px 5.8px 10.5px;
    cursor: pointer;


`
const GoogleIcon = styled.img`
    width: 14px;
    height: 18px;
`

const GoogleContent = styled.div`
    font-size: 9.2px;
    text-align: center;
    
`

const AboutImg = styled.img`
    width: 137px;
    height: 128px;
    margin-top: 20px;

`

const AboutDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0 20px 0;
    @media(min-width: 600px) {
        width: 70%;
        margin: auto;
    }

`

const AboutHeadline = styled.div`
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.88px;
    text-align: center;
    color: var(--black);
    @media(min-width: 600px) {
        text-align: start;
        width: 100%
    }
    
`

const AboutContent = styled.div`
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.08px;
    text-align: center;
    color: var(--black);
    padding-left: 50px;
    padding-right: 50px;
    @media(min-width: 600px){
        padding-left: 0px;
        text-align: justify;
        width: 500px;
    }
`


