/**
 * Created by mac on 2017/9/23.
 */

import React from 'react';

const List = (props) => {
    let props = {
        name: 'hector',
        age: 21
    }

    log = ({name, age}) => {
        console.log(name);
        console.log(age);
    }

    log(props);
    return (
<form>
    <div
        className="form-group">
        <label
            htmlFor="listInput">
            Email address
        </label>
        <input
            type="text"
            className="form-control"
            id="listItemInput"
            placeholder="Add new todo"
        />
        <button
            className="btn btn-primary">
            Add Item
        </button>
    </div>
</form>
    )
};


export default Input;
