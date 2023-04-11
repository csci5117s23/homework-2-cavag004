import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TodoItem from '../../components/TodoItem';

export default function Todos() {
    const [todos, setTodos] = useState([])
    const router = useRouter();
    console.log(router.query);
    
    var todoItem = "";
    const done = false;


    useEffect(() => {
        fetch("https://backend-26tw.api.codehooks.io/dev/todoitems/" + router.query, {
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                "X-Apikey": "31568e98-9595-4f58-a147-57e18af001c7"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    const toggleComplete = (i) => {
        setTodos(todos.map((todo, k) => k === i ? {
            ...todo,
            complete: !todo.complete
        } : todo))
    }

    const todo = (
        <section class="section">
            <div class="box mt-5">
                <TodoItem item={"beans"} complete={true}
                    onClick={() => toggleComplete(i)}
                />
            </div>
        </section>
    );

    return (todo);
}