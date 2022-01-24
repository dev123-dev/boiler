import React from 'react'
import { Logo } from './components'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import { NavBar } from '../components'
// import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <>
           <Logo/>
        </>
     
        // <Router>
        //     <NavBar />
        //     {/* <Switch>
        //         <Route path="/movies/list" exact component={MoviesList} />
        //         <Route path="/movies/create" exact component={MoviesInsert} />
        //         <Route
        //             path="/movies/update/:id"
        //             exact
        //             component={MoviesUpdate}
        //         />
        //     </Switch> */}
        // </Router> 
    )
}

export default App

