import { react, Component, useContext } from 'react';
import { UserContext } from '../pages/index.js'
import { ResultContext } from '../pages/results/finalselection.js'

export default function SelectionCount(props) {

    // try {
    //     var {count, setCount, list, setList} = useContext(UserContext);
    // } catch (e) {
    //     var {count, setCount, list, setList} = useContext(ResultContext);
    // }
    
    try {
        var ctx = ResultContext
    } catch (e) {
        var ctx = UserContext;
        // var {list, setList} = useContext(ResultContext);
    }
    
    
    var {count, setCount, list, setList} = useContext(ctx);

    return (
        <h1 className={`${count >= 50 ? 'text-red-800' : 'text-white'} font-bold text-3xl`}>Selected: {count} / 50</h1>
    )
    
}