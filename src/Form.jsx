import React, { useState } from "react";

const Form = ({ author = "", comment = "", id, rate = 0 }) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const handleChangeAuthor = (event) => setAuthorInput(event.target.value);
  const handleChangeRate = (event) => setRateInput(event.target.value);
  const handleChangeComment = (event) => setCommentInput(event.target.value);

  const handleOnSubmit = (event) => {};

  return (
    <form onSubmit>
      <div>
        <label>
          Autor:
          <input onChange={handleChangeAuthor} typ="text" value={authorInput}></input>
        </label>
      </div>

      <div>
        <label>
          Ocena:
          <input onChange={handleChangeRate} typ="numbert" value={rateInput}></input>
        </label>
      </div>

      <div>
        <label>
          Komentarz:
          <input onChange={handleChangeComment} typ="text" value={commentInput}></input>
        </label>
      </div>
      <button type="submit">{id ? "Edycja oceny" : "Wyślij ocenę"}</button>
    </form>
  );
};

export default Form;
