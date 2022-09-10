import React from 'react';
import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import iconDelete from '../assets/images/icon-delete.svg';
import iconEdit from '../assets/images/icon-edit.svg';
import iconReply from '../assets/images/icon-reply.svg';

export const EditComment = (props) => {
  const [score, setScore] = React.useState(props.counter);
  const [editText, setEditText] = React.useState(props.textarea_value);
  function increaseScore() {
    if (score > props.counter) {
      return '';
    }
    return setScore((prevDate) => prevDate + 1);
  }

  function decreaseScore() {
    if (score < props.counter) {
      return '';
    }
    setScore((prevDate) => prevDate - 1);
  }

  return (
    <>
      <div className="comment flex-desktop">
        <div className="comment-rate comment-rate-flex-column">
          <img onClick={increaseScore} src={iconPlus} />
          <p>{score}</p>
          <img onClick={decreaseScore} src={iconMinus} />
        </div>
        <div className="flex-column">
          <div className="user-info">
            <img className="user-logo" src={props.image} />
            <p className="user-name">{props.username}</p>
            {props.currentUser && <p className="you-card">you</p>}
            <p className="comment-date">{props.createdAt}</p>
            {props.currentUser ? (
              <div className="comment-edit hide">
                <span onClick={props.handleDelete}>
                  <img src={iconDelete} />
                  <span className="comment-edit-delete">Delete</span>
                </span>
                <span onClick={props.handleEdit}>
                  <img src={iconEdit} />
                  <span className="comment-edit-edit">Edit</span>
                </span>
              </div>
            ) : (
              <div className="comment-edit hide">
                <div onClick={props.handleReply}>
                  <img src={iconReply} />
                  <span className="comment-edit-reply">Reply</span>
                </div>
              </div>
            )}
          </div>
          <textarea
            className="edit-text"
            placeholder={props.textarea_placeholder}
            value={editText}
            onInput={(e) => setEditText(e.target.value)}
          >
            {props.comment}
          </textarea>
          <div className="comment-info">
            <div className="comment-rate show-flex">
              <img onClick={increaseScore} src={iconPlus} />
              <p>{score}</p>
              <img onClick={decreaseScore} src={iconMinus} />
            </div>
            <div className="comment-edit show">
              <span onClick={props.handleDelete}>
                <img src={iconDelete} />
                <span className="comment-edit-delete">Delete</span>
              </span>
              <span onClick={props.handleEdit}>
                <img src={iconEdit} />
                <span className="comment-edit-edit">Edit</span>
              </span>
            </div>
          </div>
          <button
            className="update-btn"
            onClick={() => props.updateEdit(editText)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
