import { react, Component, useContext } from 'react';
import { UserContext } from '../pages/index.js'

export default function SelectionCount(props) {
    const {count, setCount, list, setList} = useContext(UserContext);

    return (
        <h1 className="text-white font-bold text-3xl">Selected: {count} / 50</h1>
    )
    
}