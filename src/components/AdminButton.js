import { React, useState, useEffect } from 'react'
import './Admin.scss'

export default function AdminButton({ type, categories, AddtoMenu, menu }) {
const [button, setButton] = useState(false);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('');
const [focus, setFocus] = useState(null)
const [submit, setSubmit] = useState(false);

useEffect(() => {
    console.log(menu)
},[submit])

//handles submit
const handleSubmit = () => {
submit ? setSubmit(false) : setSubmit(true);
}

//handles what input is being focused on
const handleFocus = (id) => {
    setFocus(id)
}
const handleBlur = () => {
    setFocus(null)
}

//handles event depending on what is being edited
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

//function that lists categories
const input = <span>
<select value={category}
        onChange={handleEvent}
        onBlur={handleBlur}
        onFocus={() => {handleFocus('category')}}>
        <option value=''>--select category--</option>    
        {categories.map((category) => {
    return <option key={category} value={category}>{category}</option>})}
    </select>
    </span>

//function that searches for item based on name and/or category
const search = <ul>{category ? (menu.filter(item => item.category === category).map((item) => {
    if (name) {
        let input = name.toLowerCase();
        let inputSearch = item.name.toLowerCase()
        if (input === inputSearch.substring(0, name.length)){
        return <button key={item.id}>{item.name}</button>}
    }
    else {
    return <button key={item.id}>{item.name}</button>
    }
})) : (menu.map((item) => {
    if (name) {
        let input = name.toLowerCase();
        let inputSearch = item.name.toLowerCase()
        if (input === inputSearch.substring(0, name.length)){
        return <button key={item.id}>{item.name}</button>}
    }
}))}
</ul>


return (
    <span>
        {/*button to add new items*/}
    {button && type == 'add' ? (
    <span className='admin_button_container'>
          {/*inputs for name, price, and category*/}
        Name: <input type='text' 
        value={name}
        onFocus={() => {handleFocus('name')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        Price: <input type='number' 
        value={price}
        onFocus={() => {handleFocus('price')}}
        onBlur={handleBlur}
        onChange={handleEvent}>
    </input>
        Category: {input}
        <button onClick={() => {AddtoMenu(menu.length + 1, name, price, category); handleSubmit()}}>
        Submit
        </button>
    </span>
    ):(button && type == 'edit' ?(
        <span>
              {/*button to edit items*/}
        {input}
        <input type='search'
        onFocus={() => {handleFocus('name')}}
        onBlur={handleBlur}
        onChange={handleEvent}>     
        </input>
        {search}
        </span>
    ):(<>  
    {/*button to submit update*/}
    <button
    onClick={() => setButton(true)}>
    {type}</button>
    </>))}
    </span>
)}