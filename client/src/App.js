import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Home, Stories, New, NoteFound, Header} from './Components' //geting all cmpnt from /Components

import {getAllStories} from './api'

export default class App extends Component {
    state = {
        hasError: false,
        story: []
    }
    //in error show cmp NoteFound
    componentDidCatch(e) {
        this.setState({hasError: true})
    }
    // async geting data from api
    async componentDidMount() {
        this.setState({story: await getAllStories()})
    }
    render() {
        //gettng story and eror statment from state
        const {hasError, story} = this.state
        //if no error return Router
        return (!hasError
            ? <Router>
                    <Header></Header>
                    <Switch>
                        <Route path='/' exact>
                            <Home story={story} />
                        </Route>
                        <Route path='/stories'>
                            <Stories story={story}/>
                        </Route>
                        <Route path='/new'>
                            <New/>
                        </Route>
                        <Route component={NoteFound}/>
                    </Switch>
                </Router>

            //if error return cmp NoteFound
            : <NoteFound/>)
    }

}
