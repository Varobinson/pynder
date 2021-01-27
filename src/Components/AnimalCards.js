import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './AnimalCards.css'

export default function AnimalCards() {

    const [ animals, setAnimals ] = useState([
        {
        name: 'Max',
        url: 'https://www.loveyourdog.com/wp-content/uploads/2020/01/Types-of-Pitbulls-900x500.jpg',
        shelter: 'HomeWood',
        state: 'georgia',
        bio: 'words about stuff and stuff'

        },
        {
        name: 'bob',
        url: 'https://www.loveyourdog.com/wp-content/uploads/2020/01/Types-of-Pitbulls-900x500.jpg',
        shelter: 'HomeWood',
        state: 'georgia',
        bio: 'words about stuff and stuff'

        }])

        const [ lastDirection, setLastDirection] = useState([])

        const swiped = (direction, nameToDelete) => {
            console.log('removing' + nameToDelete)
            setLastDirection(direction)
        }

        const outOfFrame = (name) => {
                console.log(name + 'left the screen')
        }

    return (
        <div className= 'animalCards'>
            <div className= 'animalCards_CardContainer'>
            {animals.map((animal) => {
                return <TinderCard
                        className='swipe'
                        key={animal.name}
                        preventSwipe={'up','down'}
                        onSwipe ={(dir) => swiped(dir, animal.name)}
                        onCardLeftScreen={() => outOfFrame(animal.name)}>
                            <div
                            style={{ backgroundImage: `url(${animal.url})`}}
                            className='card'
                            >
                                <h3>{animal.name}</h3>
                                <h5>{animal.bio}</h5>
                            </div>
                        </TinderCard>
            })}
            </div>
        </div>
    )
}
