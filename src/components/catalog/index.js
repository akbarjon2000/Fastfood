import React, { useState } from 'react'
import Navbar from './catalogNav/CatalogNav'
import { AddNotify } from './AddNotify'
export const Notification = () => {
    const [notify, setNotify] = useState(false)
    const onNotify = () => {
        setNotify(false)
        console.log(notify)
    }
    const Activate = () => {
        setNotify(true);
    }
    return (
        <div>
            <Navbar Activate={Activate} />
            {notify && <AddNotify onNotify={onNotify} notify={notify} />}
        </div>
    )
}
