import React from 'react';
import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import iconDelete from '../assets/images/icon-delete.svg';
import iconEdit from '../assets/images/icon-edit.svg';
import iconReply from '../assets/images/icon-reply.svg';

export const Comment = (props) => {
  const [score, setScore] = React.useState(props.counter);

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

        <div>
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
          <p className="comment-message">{props.content}</p>
          <div className="comment-info">
            <div className="comment-rate show-flex">
              <img onClick={increaseScore} src={iconPlus} />
              <p>{score}</p>
              <img onClick={decreaseScore} src={iconMinus} />
            </div>
            {props.currentUser ? (
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
            ) : (
              <div className="comment-edit show">
                <div onClick={props.handleReply}>
                  <img src={iconReply} />
                  <span className="comment-edit-reply">Reply</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
