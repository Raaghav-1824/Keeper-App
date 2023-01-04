import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function SubmitNotes(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <div className="mainDiv">
        <form className="inputDiv">
          <input
            name="title"
            onChange={handleChange}
            className="input"
            placeholder="Title"
            value={note.title}
          />
          <textarea
            name="content"
            onChange={handleChange}
            className="input"
            placeholder="Enter your task"
            cols="4"
            rows="5"
            value={note.content}
          ></textarea>
          <button
            onClick={SubmitNotes}
            type="button"
            className="btn btn-primary"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateArea;
