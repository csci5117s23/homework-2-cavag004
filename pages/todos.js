import { useState } from 'react'
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

    const withTodos = (
        <section class="section">
            <Form onSubmit={text => setTodos([{ text, complete: false }, ...todos])} />
            <div class="box mt-5">
                {todos.map(({ text, complete }, i) => (
                    <TodoItem text={text} complete={complete}
                        onClick={() => toggleComplete(i)}
                    />
                ))}
            </div>
        </section>
    );

    const withoutTodos = (
        <section class="section">
            <Form onSubmit={text => setTodos([{ text, complete: false }, ...todos])} />
            <div class="box mt-5"><span>//TODO: add todo items</span></div>
        </section>
    );

    // if there are todos, display the todos box
    if (todos.length > 0) {
        return (withTodos);
    }
    // if there are not any todos, don't display the todos box
    return (withoutTodos);
}