import {Component} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom";
import s from "./New.module.css"
// import {postStory} from "../../api"

export default class New extends Component {
    state = {
        message: null,
        redirect: false
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        let obj = {};
        [...e.target].forEach(item => {
            if (item.value!="Save") {
                obj[item.name] = item.value
            }
        })

        const res = await axios.post("https://mernstack1221z.herokuapp.com/api/stories", obj)
        if (res.status === 200) {
            this.setState({redirect: true})
        }
        this.setState({message: res.data.message})

    }
    render() {
        const {message, redirect} = this.state
        const page = redirect
            ? <Redirect to='/stories'/>
            : null
        const alert = message
            ? <div>
                    <h2>
                        {message.slice(message.lastIndexOf('[') + 1, message.length - 1)}
                    </h2>
                </div>
            : null
        return (
            <div className={s.container}>
                {page}
                {alert}
                <form onSubmit={this.handleSubmit} className={s.form}>
                    <input type="text" placeholder="Title" name='title'/>
                    <input type="text" name='body' placeholder="Body"/>
                    <input type="text" name='creator' placeholder="Creator"/>
                    <input type="text" name='img' placeholder="SourceIMG"/>

                    <input type="submit" style={{cursor:"pointer"}} value="Save"/>
                </form>
            </div>
        )
    }
}