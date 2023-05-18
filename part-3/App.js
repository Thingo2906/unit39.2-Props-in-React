const App = () => {
    return (
        <Person name = "Susan" age = {22} hobbies ={['running', 'cooking', 'play game']} />
    )
}
ReactDOM.render(<App />, document.getElementById('root'))