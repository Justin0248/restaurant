import { React, useEffect, useState } from "react";
import AdminButton from "./AdminButton";
import './Admin.scss'

export default function Admin({ data }) {
    const categories = [... new Set(data.map(item => item.category ))]
    const editMenu = ((name, price, category) => {
        return data.push([{name, price, category}])
    })

    return <div className="control_container">
            <AdminButton
            type={'add'}
            categories={categories}
            editMenu={editMenu}>
            </AdminButton>
            <AdminButton
            type={'edit'}
            categories={categories}
            editMenu={editMenu}>
            </AdminButton>
    </div>
}