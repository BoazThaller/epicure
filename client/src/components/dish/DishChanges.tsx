// import React from 'react'

export default function DishChanges(changes:any) {
    let changesArray = [];
    for(const change of changes) {
        if(change.checked) {
            changesArray.push(change.value);
            change.checked = false;
        }
    }
    return changesArray
}
