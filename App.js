
// React is a js library bc it only works independently on small portion of your app
// that why react is not a framework

// Making this str using react
/* <div class = "root">
    <div class = "parent">
        <div class = "child">
            <h1>I am an h1 tag</h1>
        </div>
    </div>
</div> */


// if you want to pass multiple childs to one element pass an array of child objects

// This is how you create nested structes in react
const parent = React.createElement(
    "div",
    {className : "parent"},
    React.createElement(
        "div",
        {className : "child"},
        [
            React.createElement("h1",{},"I am that H1 tag"),
            React.createElement("h1",{},"I am the second H1 tag")
        ]
    )
)


// But making big nested pages writing like this creates mess ?
// that is why we have "JSX". to make our life easy

// React element (object) => html(Browser understands)


const heading = React.createElement(// creates an object
    "h1",
    {id : "heading"},
    "Hello World from React"
);

console.log(heading); // heading is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);// render method creates a h1 tag from this heading obj and render it on dom

root.render(parent);


