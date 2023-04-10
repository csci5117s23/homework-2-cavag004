import React from 'react'

const TodoItem = (props) => {
    return (
        <div class="my-3">
            <label class="checkbox">
                <input class="checkbox" type="checkbox" checked={props.complete} onChange={props.onClick}/>
                <span class="ml-2 pt-3"
                style={{
                    textDecoration: props.complete ? "line-through" : "",
                }}
                >{props.text}</span>
            </label>
        </div>
    )
}

export default TodoItem;