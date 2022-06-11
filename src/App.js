
import './App.css';
import React, { useState } from 'react';
import AddTodos from './Component/AddTodos';
function App() {
  const [inputList, setInputList] = useState('');
  const [item, setItem] = useState([]);
  const addTodoHandler = (event) => {
    setInputList(event.target.value)
  }
  const addListOfItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];

    })
    setInputList('')
  }

  const deleteTodo = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((ele, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>

      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add Todo list' value={inputList} onChange={addTodoHandler} />

          <button type='submit' onClick={addListOfItem}>Add</button>
        </div>
        {/* <li>{inputList}</li> */}
        <ul>
          {item.map((todos, index) => {
            return <AddTodos key={index}
              id={index}
              onSelect={deleteTodo} text={todos} />
          })}
        </ul>
      </div>
    </>
  );
}

export default App;



// import './App.css';
// // import Header from "./MyComponent/Header";//default export not name export
// // import {Footer} from "./MyComponent/Footer";
// // import {Todos} from "./MyComponent/Todos";


// function App() {
//   // let hello = 123
//   //  let todos=[
//   //    {
//   //     sNo:1,
//   //     title:"go to market",
//   //     desc:"to buy fruits"
//   //   },
//   //   {
//   //     sNo:2,
//   //     title:"go to cinama hall",
//   //     desc:"to watch movie"
//   //   },
//   //   {
//   //   sNo:3,
//   //     title:"go to swimming pool",
//   //     desc:"to swim"
//   //   }
//   // ]
//   return (
//     <>
//       {/* <Header title="MyToDoLists"/>
//       <Todos todos={todos}/>
//       <Footer/> */}
//       <div className='main_div'>
//         <div className='center_div'>
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input type="text" placeholder='Add Todo list' />
//           <br />
//           <button type='submit'>Add</button>

//         </div>

//       </div>
//     </>
//   );
// }

// export default App;

