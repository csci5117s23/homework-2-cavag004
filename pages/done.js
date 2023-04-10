import { useState } from 'react'
import TodoItem from '../components/TodoItem'
import Link from 'next/link'

export default function Todos() {
    const [todos, setTodos] = useState([])

    const toggleComplete = (i) => {
        console.log("Clicked on: " + i);
        setTodos(todos.map((todo, k) => k === i ? {
            ...todo,
            complete: !todo.complete
        } : todo))
    }

    const withTodos = (
        <section class="section">
            <div class="box">
                {todos.map(({ text, complete }, i) => (
                    <TodoItem text={text} complete={complete}
                        onClick={() => toggleComplete(i)}
                        display={!complete}
                    />
                ))}
            </div>
        </section>
    );

    const withoutTodos = (
        <section class="section">
            <div class="box mt-5">//TODO: add todo items</div>
        </section>
    );

    // if there are todos, display the todos box
    if (todos.length > 0) {
        return (withTodos);
    }
    // if there are not any todos, don't display the todos box
    return (withoutTodos);
}