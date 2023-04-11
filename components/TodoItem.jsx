import React from 'react'
import Link from 'next/link';

const TodoItem = (props) => {
    return (
        <div class="my-3">
            <label class="checkbox">
                <input class="checkbox" type="checkbox" checked={props.complete} onChange={props.onClick}/>
                {/* <Link href={`/todo/:${props.id}`} class="ml-2 pt-3" */}
                <Link href={{ pathname: `/todo/:${props.id}`, query: {id: props.jsonId}}} class="ml-2 pt-3"
                style={{
                    textDecoration: props.complete ? "line-through" : "",
                }}
                >{props.item}</Link>
            </label>
        </div>
    )
}

export default TodoItem;