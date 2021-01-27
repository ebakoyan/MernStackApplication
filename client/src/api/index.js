import axios from 'axios'
//Return all stories from back-end in array
export const getAllStories = async ()=>{
    // let data = [];

    const {data} = await axios.get('https://mernstack1221z.herokuapp.com/api/stories')
// console.log(data.story)

    return data.story;
}
export const postStory = async (data)=>{
    const body = await axios.post('http://localhost:5000/api/stories',data)
    return body
}