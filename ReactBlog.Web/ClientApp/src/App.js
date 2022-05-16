import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Layout from './Layout';
import AddPost from "./AddPost";
import BlogPage from "./BlogPage";


const App = () => {
    return (
        <Layout>
           <Route exact path='/' component={Home}/>
           <Route exact path='/page/:page' component={Home}/>
           <Route exact path='/addpost' component={AddPost}/> 
           <Route exact path='/blogpage/:id' component={BlogPage}/> 
            
        </Layout>
    )
}
export default App;