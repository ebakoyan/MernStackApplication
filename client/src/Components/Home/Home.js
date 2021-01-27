import {Component} from "react"

import {Card} from "../Card/Card"
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {getAllStories} from '../../api/'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default class Home extends Component {
    state = {
        story: []
    }
    async componentDidMount(){
        this.setState ({story:await getAllStories()})
    }
    componentWillReceiveProps({story}){
        this.setState({story:story})
    }
    render() {
        const {story} = this.state

        const list = story.map(item => (
            <SwiperSlide style={{display:"flex",justifyContent:"center"}} key={item._id}>
                <Card {...item} />
            </SwiperSlide>
        ))
        return (
            <div>
                <Swiper
                    style={{
                        width:"400px",margin:"0 auto",display:"flex",justifyContent:"center"
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{
                    clickable: true
                }}
                    scrollbar={{
                    draggable: true
                }}>
                    {list}
                </Swiper>
            </div>
        )
    }
}