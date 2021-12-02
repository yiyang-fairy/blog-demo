import React from 'react'
import './index.css'

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
                <a href="../Ryan">Ryan Kubik</a>
                <a href="../Blog">Blog</a>
                <a href="../Twitter">Twitter</a>
                <a href="../Games">Games</a>
            </div>       
        )
    }
}
class Title extends React.Component {
    render() {
        return (
            <div className = 'title'>
                <h1>🎣 useRefState Hook - Access state outside of a component</h1>
                <p>September 3, 2019</p>
                <p>13 min read</p>
            </div>
        )
    }
}
class Body extends React.Component {
    renderArticles() {
        return articles.map(item => 
        <div key = {item.id}>
            <h2> {item.title}</h2>
            <p>{item.content}</p>
            <pre>{item.code}
                <div>11</div>
                <div>111</div>
            </pre>
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
class Bottom extends React.Component {
    render() {
        return (
            <div className = 'bottom'>
                <a href="../Games"> ← Showcase Season Retrospective:Wildfire Swap at & XOXO 2019</a>
                <a href="../Games"> All the Indie Puzzle Games at PAX West 2019 →</a>
            </div>
        )
    }
}
export default class Index extends React.Component {
    // read() {
    //     let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight; //页面总高度
    //     let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; //浏览器视口高度
    //     let scrollAvail = pageHeight - windowHeight;//可滚动高度
    //     console.log(pageHeight, windowHeight, scrollAvail)
    //     window.onscroll = function () {
    //         let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条的高度
    //         console.log('滚动条的高度：', scrollTop);
    //         document.querySelector('.progress').style.width = (scrollTop/scrollAvail)*100 + '%';    // 计算占比
    //     };
    // }
    render() {
        return (
            <div className = "center">
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