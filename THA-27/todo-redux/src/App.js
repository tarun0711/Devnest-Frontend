import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo';
import './App.css'
function App () 
{
    return(
        <div className="App">
            <h1> Todo List </h1>
            <AddTodo />
            <ListTodo />
        </div>
    );
};

export default App;