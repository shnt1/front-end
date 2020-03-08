import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddComment = () => {
  const [addComment, setAddComment] = useState("");
  const [addId, setAddId] = useState(1);

  useEffect(
    addId => {
      axiosWithAuth()
        .post(
          `https://saltyhacker.herokuapp.com/api/users/:id/favorites/${addId}`
        )
        .then(res => {
          console.log("This is the response", res);
          setAddComment(...addComment);
          setAddId(addId++);
        })
        .catch(e => console.log(e));
    },
    [addId]
  );

  return (
    <form>
      <input type='text' value={addComment} name='comment' />
    </form>
  );
};

export default AddComment;
