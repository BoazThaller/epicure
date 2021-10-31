import React, { useState } from 'react';
import './App.css';
import Home from './components/layout/Layout';
import WindowSize from './components/windowSize';
import styled from 'styled-components';


function App() {
  const size = WindowSize();

  window.onscroll = function() {scrollFunction()}

  const [isScrollUpButtonShown, setIsScrollUpButtonShown] = useState(false);
  
  const scrollFunction = () => {
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          setIsScrollUpButtonShown(true);
      }
      else {
          setIsScrollUpButtonShown(false);
      }
  }

  const onScrollButtonClicked = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  
  return (
    <div className="App">
        <Home/>
        {size > 600 && isScrollUpButtonShown &&
                <GoUpButton onClick={() => onScrollButtonClicked()}>
                    <Up src="Assets/icons/up.png" alt="" />
                </GoUpButton>
            }
    </div>
  );
}

const Up = styled.img`
    width: 40px;
    height: 40px
`

const GoUpButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 30px;
    border: none;
    outline: none;
    color: black;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
    transition: 0.5s ease;
    background: none;
    :hover {
        font-size: 100px;
        transition: 0.5s ease;
    }
`

export default App;
