import React, { useEffect, useState } from 'react'
import ChefOfTheWeek from '../chefOfTheWeek/ChefOfTheWeek'
import Dishes from '../dishes/Dishes'
import MainSearch from '../mainSearch/MainSearch'
import OurIcons from '../ourIcons/OurIcons'
import RestaurantsSlider from '../restaurants/RestaurantsSliderMainPage'
import RestaurantsDesktop from '../restaurants/RestaurantsDesktopMainPage'
import DishesDesktop from '../dishes/DishesDesktop'
import WindowSize from '../windowSize'

export default function Main() {
    const size = WindowSize();

    return (
        <div>
            <MainSearch/>
            {size < 600 ? 
                <RestaurantsSlider/>
                :
                <RestaurantsDesktop/>
            }
            {size < 600 ?
                <Dishes/>
                :
                <DishesDesktop/>
            }
            <OurIcons/>
            <ChefOfTheWeek/>
        </div>
    )
}