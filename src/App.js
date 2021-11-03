import React from 'react'
import { useState } from 'react'
import {Div, Button} from 'atomize'

export default function App() {
    const [Count, setCount] = useState(0)
    return (
        <Div bg="gray200" d="flex" align="center" p="1rem" textAlign="center">

            <h1 text=''>COUNT = {Count}</h1>

            <Button bg="warning700"
                hoverBg="warning800"
                rounded="circle"
                p={{ r: "1.5rem", l: "1rem" }}
                shadow="3"
                hoverShadow="4"
                onClick={()=> setCount(Count+1)}
            >Increment</Button>

            <Button onClick={()=> setCount(0)}>Reset</Button>
            
            <Button onClick={()=> setCount(Count-1)}>Decrement</Button>

        </Div>
    )
}
