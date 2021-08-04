import './App.css';
import { IncNumber, DecNumber, ResetNum } from './actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch(); 
  return (
    <div className="App">
    <h1>Redux Counters</h1>
     <button onClick={ () => {dispatch(DecNumber())}}> -</button>
     <span>{count}</span>
     <button onClick={ () => {dispatch(IncNumber())}}> +</button>
     <div className="reset">
       <button onClick={ () => {dispatch(ResetNum())}} >Reset</button>
     </div>
    </div>
  );
}

export default App;
