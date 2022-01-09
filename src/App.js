import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import Login from './components/Login';
import LoggedIn from './components/Loggedin'
import './App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1> The count is: {count}</h1>
     <button onClick={() => dispatch(increment())}>increment</button>
     <button onClick={() => dispatch(decrement())}>decrement</button>
     <button onClick={() => dispatch(incrementByAmount(33))}>incrementByAmount</button>
     <Login></Login>
     <LoggedIn></LoggedIn>
    </div>
  );
}

export default App;
