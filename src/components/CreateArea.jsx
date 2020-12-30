import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });

    setIsExpanded(false);
    event.preventDefault();
  }

  const [isExpanded, setIsExpanded] = useState(false);

  function modify() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <div>
            {" "}
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              onClick={modify}
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
          </div>
        ) : (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            onClick={modify}
          />
        )}

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
