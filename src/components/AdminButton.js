import { React, useState, useEffect } from 'react'
import './Admin.scss'


export default function AdminButton({ type, categories, editMenu }) {
const [button, setButton] = useState(false);
const [name, setName] = useState('');
const [price, setPrice] = useState();
const [category, setCategory] = useState('');
const [focus, setFocus] = useState(null)
const [submit, setSubmit] = useState(false);

const handleFocus = (id) => {
    setFocus(id)
}
const handleBlur = () => {
    setFocus(null)
}
const handleSubmit = (event) => {
event.preventDefault();
editMenu(name,price,category);
setSubmit(true);
}
const handleEvent = ((event) => {
    switch(focus) {
        case 'name':
            return setName(event.target.value)
            break;
        case 'price':
            return setPrice(event.target.value)
            break;
        case 'category':
            return setCategory(event.target.value)
            break;
        default:
            return 'test'
    }
})

const input = <span>category: <div></div>
<select value={category}
        onChange={handleEvent}
        onBlur={handleBlur}
        onFocus={() => {handleFocus('category')}}>
        <option>--select category--</option>    
        {categories.map((category) => {
    return <option value={category}>{category}</option>})}
    </select>
</span>

return (
    <form action={handleSubmit}>
    {button ? (
    <span className='admin_button_container'>
        name: <input type='text' 
        value={name}
        onFocus={() => {handleFocus('name')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        price: <input type='text' 
        value={price}
        onFocus={() => {handleFocus('price')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        {input}
        <button>Submit</button>
    </span>
    ):(
    <button
    onClick={() => setButton(true)}>
    {type}</button>
        )}
    </form>
)}