// import React from 'react'

export default function DishSide(sides:any) {

    let selectedSide;
    for(const side of sides) {
        if(side.checked) {
            selectedSide = side.value;
            return selectedSide;
        }
    }
}
