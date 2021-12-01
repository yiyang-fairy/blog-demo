import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
//import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


 //import Games from '../Games'
// import Ryan from '../Ryan'
// import Twitter from '../Twitter'
// import Blog from '../Blog'

const articles = [
    {
        id: 1, 
        title:"What's the current state?",
        content:"I ran into a situation where I needed to use the value state of a useState hook inside an event handler callback. The callback would execute later on after an event was triggered. By this time, the value of my state would have changed. This is where my trouble began.I was passing a simple constant variable into the callback that was not a React component. This callback was unaware that my state value had been changed.",
        code:""
    },
    {
        id: 2, 
        title:"What's the current state?",
        content:"I ran into a situation where I needed to use the value state of a useState hook inside an event handler callback. The callback would execute later on after an event was triggered. By this time, the value of my state would have changed. This is where my trouble began.I was passing a simple constant variable into the callback that was not a React component. This callback was unaware that my state value had been changed.",
        code:""
    },
    {
        id: 3, 
        title:"What's the current state?",
        content:"I ran into a situation where I needed to use the value state of a useState hook inside an event handler callback. The callback would execute later on after an event was triggered. By this time, the value of my state would have changed. This is where my trouble began.I was passing a simple constant variable into the callback that was not a React component. This callback was unaware that my state value had been changed.",
        code:""
    }
]
class Head extends React.Component {
    render() {
        return (


            
            <div className = "head">
                <div className = 'left'>
                    <Link to = '../Ryan' style={{ textDecoration: 'none' }}> Ryan Kubik</Link>
                </div>
                
            
               <div className = 'right'>
                   <Link to = '../Blog' style={{ textDecoration: 'none' }}>Blog</Link>
                   <Link to = '../Twitter' style={{ textDecoration: 'none' }}>Twitter</Link>
                   <Link to = '../Games' style={{ textDecoration: 'none' }}>Games</Link>
               </div>

            </div>
       
        )
    }
}
class Title extends React.Component {
    render() {
        return (
            <div className = 'title'>
                <h1>🎣 useRefState Hook - Access state outside of a component</h1>
                <div>September 3, 2019</div>
                <div>13 min read</div>
            </div>
        )
    }
}
class Bottom extends React.Component {
    render() {
        return (
            <div className = 'bottom'>
                <div className="last">111</div>
                <div className ="next">222</div>
            </div>
        )
    }
}

class Body extends React.Component {
    renderArticles() {
        return articles.map(item => 
        <div key = {item.id}>
            <h1> {item.title}</h1>
            <div>{item.content}</div>
            <div>{item.code}</div>
            </div>)
    }
    render() { 
        return (
            <div className = 'main'>
               {this.renderArticles()}
            </div>
        )
    }
}
console.log(window.screen.height)
console.log(document.height)
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div className= "red"></div>
                <div className="hello">hello</div>
                <Head></Head>
                <Title></Title>                
                <Body></Body>
                <Bottom></Bottom>
            </div>
            
        )
    }
}