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

const Form = ({onSubmit}) => {
    const { resetValue, ...text } = useInputValue("");

    return (
        <form method="post" onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
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