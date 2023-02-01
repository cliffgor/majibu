function App() {
    const title = 'majibu Post'
    const body = 'This is my jibu for the blog'
    const comments = [
        {id: 1, text: 'Wajibu wasemavyo one'},
        {id: 2, text: 'Wajibu wasemavyo two'},
        {id: 3, text: 'Wajibu wasemavyo three'}
    ]
    return(
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div>
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}

export default App