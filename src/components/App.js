
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import '../styles/App.css';

function App() {
    const [markdown, setMarkdown] = useState("")
    const [loading, setLoading] = useState(true)
 
    const hancleChange = (e) => {
        setMarkdown(e.target.value)
    }
 
    return (
        <div className='app'>
            <textarea className="textarea" onChange={hancleChange}></textarea>
            <ReactMarkdown className="preview" children={markdown} />
        </div>
    )
}


export default App;

{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
