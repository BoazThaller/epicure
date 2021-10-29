import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';

export default function Footer() {

    const history = useHistory();

    const onContactClicked = () => {
        history.push("/contact")
    }
    
    const onTermsClicked = () => {
        history.push("/terms")
        
    }
    
    const onPrivacyClicked = () => {
        history.push("/privacy")
        
    }

    return (
        
        <FooterDiv>
            <FooterHeadline onClick={() => onContactClicked()}>Contact us</FooterHeadline>
            <FooterHeadline onClick={() => onTermsClicked()}>Terms of Use</FooterHeadline>
            <FooterHeadline onClick={() => onPrivacyClicked()}>Privacy Policy</FooterHeadline>
        </FooterDiv>
    )
}

const FooterDiv = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 126px;
    gap: 18px;
    @media(min-width: 600px) {
        flex-direction: row;
    }

`

const FooterHeadline = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.76px;
    text-align: center;
    color: var(--black);
`