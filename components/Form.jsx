import React from 'react'
import { useState } from 'react'

const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    };
};

async function postFetch(text) {
    let obj;
    const res = await fetch("https://backend-26tw.api.codehooks.io/dev/todoitems", {
        method: "post",
        headers: {
            'x-apikey': '31568e98-9595-4f58-a147-57e18af001c7',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        //make sure to serialize your JSON body
        body: JSON.stringify({
            todoItem: text,
            done: false
        })
    })
    obj = await res.json();
}

const Form = ({ onSubmit }) => {
    const { resetValue, ...text } = useInputValue("");

    return (
        <form method="post" onSubmit={e => {
            e.preventDefault();

            var obj;
            fetch("https://backend-26tw.api.codehooks.io/dev/todoitems", {
                method: "post",
                headers: {
                    'x-apikey': '31568e98-9595-4f58-a147-57e18af001c7',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    todoItem: text,
                    done: false
                })
            })
                .then(res => res.json())
                .then(data => {
                    obj = data;
                })
                .then(() => {
                    const item = text.value;
                    const jsonId = obj._id;
                    onSubmit({item, jsonId});
                    resetValue();
                });
        }}>
            {/* The html input */}
            <div class="box">
                <div class="field is-grouped">
                    <div class="control is-expanded">
                        <input id="todo-add" class="input" type="text" {...text} placeholder="Enter Item"></input>
                    </div>
                    <div class="control">
                        <button class="button is-info" type="submit">Add</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Form;