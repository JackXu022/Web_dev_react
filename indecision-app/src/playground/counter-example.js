let count = 0;
const addOne = () => {
    count++;
    //rerender to refresh the count on the page; real time data binding
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

// Challenge
// const user = {
//     name : 'Mike',
//     age : 25,
//     location : 'Philadelphia'
// };
// function getLocation(location) {
//     if (location){
//         return <p>Location : {location}</p>;
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name:'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
// Creat a templateTwo var JSX expression
// div
//   h1 -> Zhaopeng Xu
//   p -> Age: 
//   p -> Location: Philadelphia
// Render templateTwo instead of template
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();