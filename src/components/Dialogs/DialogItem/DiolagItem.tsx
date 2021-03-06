import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
type dialogsType = {
    name: string
    id: string

}

const DialogItem: React.FC<dialogsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;