import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                 to="/posts/" 
                                 exact
                                 activeClassName="mmy-active"
                                 activeStyle={{
                                     color: '#fa923f',
                                     textDecoration: 'underline'   
                                 }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
                    <Route path='/posts'  component={Posts} />
                    <Route render={() => <h1>Not Found (or instead of render can use component)</h1>} />  
                    {/* <Redirect path='/' to='/posts' /> */} 
                </Switch>
            </div>
        );
    }
}

export default Blog;