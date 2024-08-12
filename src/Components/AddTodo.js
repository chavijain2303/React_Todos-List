import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Fill Title and Description to add todo to the list");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3 className="text-center my-4 textBold">Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label textBold">ToDo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label textBold">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Description" className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary">Add a ToDo</button>
            </form>
        </div>
    );
}

export default AddTodo;
