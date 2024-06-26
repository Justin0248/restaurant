import { React, useState } from 'react';


export default function CartButton({name, price, handleEvent, handleCount }) {
const [button, setButton] = useState(false);
const [count, setCount] = useState(1)
const [id, setId] = useState(1)
const handleInput = (event) => {
setCount(event.target.value)
}


        return (
            <>{
            button ? (
            <><input
            type='number' 
            value={count}
            onChange={handleInput}>
            </input>
            <span>  
            </span>
            <button 
            key="submit"
            value='1'
            onClick={() => { 
            setId(id + 1)
            handleCount(id, count, name);
            setButton(false); 
            setCount(1)}}>
            Add to cart</button>
            </>
            ):(
            <button 
            onClick={() => {
            handleEvent(id, name, price, count); 
            setButton(true);
            }}>
            Add to cart</button>)}</>
            );
        }