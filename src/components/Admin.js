import { React, useEffect, useState } from "react";
import AdminButton from "./AdminButton";
import './Admin.scss'

export default function Admin({ data }) {
    //array of categories
    const categories = [... new Set(data.map(item => item.category ))]
    //function to add new items to menu
    const AddtoMenu = ((id, name, price, category) => {
        if (name && price && category !== ''){
        return data.push({id, name, price, category})
        }
    })

    return <div className="control_container">
            <AdminButton
            type={'add'}
            categories={categories}
            AddtoMenu={AddtoMenu}
            menu={data}>
            </AdminButton>
            <AdminButton
            type={'edit'}
            categories={categories}
            AddtoMenu={AddtoMenu}
            menu={data}>
            </AdminButton>
    </div>
}