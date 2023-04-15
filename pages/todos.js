import { useState } from 'react'
import { useEffect } from 'react'
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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://backend-26tw.api.codehooks.io/dev/todoitems", {
                'method': 'GET',
                'headers': { 'x-apikey': '31568e98-9595-4f58-a147-57e18af001c7' }
            });
            const data = await response.json();
            for (var i = 0; i < data.length; i++) {
                var item = data[i].todoItem;
                var complete = data[i].done;
                var jsonId = data[i]._id;
                setTodos([{ item, complete, jsonId }, ...todos])
                console.log(i)
            }
            console.log(todos.length)
        };

        fetchData();
    }, []);

    const withTodos = (
        <>
            <Tabs />
            <section class="section">
                {/* <Form onSubmit={({ item, jsonId }) => { setTodos([{ item, complete: false, jsonId }, ...todos]) }} /> */}
                <Form/>
                <div class="box mt-5">
                    {todos.map(({ item, complete, jsonId }, i) => (
                    // {todos.map((todo, i) => (
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
            <Tabs />
            <section class="section">
                <Form/>
                {/* <Form onSubmit={({ item, jsonId }) => { setTodos([{ item, complete: false, jsonId }, ...todos]) }} /> */}
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