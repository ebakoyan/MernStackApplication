import {NavLink} from 'react-router-dom'
import {Component} from "react"

import s from "./Hader.module.css"
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className={s.logo}>
                    <img
                        src="https://sid07designs.com/wp-content/uploads/2020/05/Your-Story-Logo.png"
                        alt=""/>
                </div>
                <nav className={s.link}>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/stories'>Stories</NavLink>
                        <NavLink to='/new'>Create</NavLink>
                </nav>
            </header>
        )
    }
}