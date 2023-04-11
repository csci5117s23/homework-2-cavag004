import { useState } from 'react'
import Tabs from '../components/Tabs'
import Form from '../components/Form'
import TodoItem from '../components/TodoItem'

export default function Todos() {
    const [todos, setTodos] = useState([])

    const toggleComplete = (i) => {
        setTodos(todos.map((todo, k) => k === i ? {
            ...todo,
            complete: !todo.complete
        } : todo))
    }

    const addTodo = ({ item, jsonId }) => {
        setTodos([{item, complete: false, jsonId}, ...todos]);
    }

    const withTodos = (
        <>
            <Tabs/>
            <section class="section">
                <Form onSubmit={({ item, jsonId }) => {setTodos([{item, complete: false, jsonId}, ...todos])}} />
                <div class="box mt-5">
                    {todos.map(({ item, complete, jsonId}, i) => (
                        <TodoItem id={i} item={item} complete={complete} jsonId={jsonId}
                            // onClick={() => toggleComplete(i)}
                        />
                    ))}
                </div>
            </section>
        </>
    );

    const withoutTodos = (
        <>
            <Tabs/>
            <section class="section">
                <Form onSubmit={text => setTodos([{ text, complete: false }, ...todos])} />
                <div class="box mt-5"><span>//TODO: add todo items</span></div>
            </section>
        </>
    );

    // if there are todos, display the todos box
    if (todos.length > 0) {
        return (withTodos);
    }
    // if there are not any todos, don't display the todos box
    return (withoutTodos);
}