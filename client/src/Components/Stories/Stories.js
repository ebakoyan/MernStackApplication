import {Component} from "react"
import {Card} from '../Card/Card'
import {getAllStories} from '../../api'

export default class Stories extends Component{
    state={
        story: null
    }
    async componentDidMount(){
        this.setState({story: await getAllStories()})
    }
    render(){
        let story = null
        if(this.state.story)
        story=this.state.story.map(item=><Card {...item} key ={item._id}></Card>);
        return(
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>{story}</div>
        )
    }
} 