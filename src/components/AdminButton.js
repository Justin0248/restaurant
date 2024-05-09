import { React, useState, useEffect } from 'react'
import './Admin.scss'

export default function AdminButton({ type, categories, editMenu, menu }) {
const [button, setButton] = useState(false);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('');
const [focus, setFocus] = useState(null)
const [submit, setSubmit] = useState(false);

const handleSubmit = () => {
submit ? setSubmit(false) : setSubmit(true);
}

const handleFocus = (id) => {
    setFocus(id)
}
const handleBlur = () => {
    setFocus(null)
}

useEffect(() => {
console.log(menu)
}, [submit])

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

const input = <span>
<select value={category}
        onChange={handleEvent}
        onBlur={handleBlur}
        onFocus={() => {handleFocus('category')}}>
        <option value=''>--select category--</option>    
        {categories.map((category) => {
    return <option value={category}>{category}</option>})}
    </select>
    </span>
const search = <ul>{category ? (menu.filter(item => item.category === category).map((item) => {
    if (name) {
        let input = name.toLowerCase();
        let inputSearch = item.name.toLowerCase()
        if (input === inputSearch.substring(0, name.length)){
        return <button>{item.name}</button>}
    }
    else {
    return <button>{item.name}</button>
    }
})) : (menu.map((item) => {
    if (name) {
        let input = name.toLowerCase();
        let inputSearch = item.name.toLowerCase()
        if (input === inputSearch.substring(0, name.length)){
        return <button>{item.name}</button>}
    }
}))}
</ul>

return (
    <span>
    {button && type == 'add' ? (
    <span className='admin_button_container'>
        Name: <input type='text' 
        value={name}
        onFocus={() => {handleFocus('name')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        Price: <input type='text' 
        value={price}
        onFocus={() => {handleFocus('price')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        Category: {input}
        <button onClick={() => {editMenu(menu.length, name, price, category); handleSubmit()}}>
        Submit
        </button>
    </span>
    ):(button && type == 'edit' ?(
        <span>
        {input}
        <input type='search'
        onFocus={() => {handleFocus('name')}}
        onBlur={handleBlur}
        onChange={handleEvent}>     
        </input>
        {search}
        </span>
    ):(
    <button
    onClick={() => setButton(true)}>
    {type}</button>))}
    </span>
)}