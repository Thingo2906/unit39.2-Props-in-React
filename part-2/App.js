const App = () => {
    return (
    <div>
        <Tweet username = "hana123" name = "Hana" dateTweet = "04-02-2023" message = "I love dog" />
        <Tweet username = "john95" name = "John" dateTweet = {new Date().toDateString()} message = "I will buy a car" />
        <Tweet username = "Annies22" name = "Annie" dateTweet = "04-05-2023" message = "I will travel in May" />
    </div>
    )
}
