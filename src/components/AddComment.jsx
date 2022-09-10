import React from 'react';

export const AddComment = (props) => {
  return (
    <>
      <div className="add-comment">
        <img className="author-logo hide" src={props.currentUser} />
        <textarea
          placeholder={props.textarea_placeholder}
          value={props.textarea_value}
          onInput={props.handleTextarea}
        >
          {props.comment}
        </textarea>
        <div className="send-info">
          <img className="author-logo show" src={props.currentUser} />
          <button onClick={props.handleComment} className="send-btn">
            {props.sendButton}
          </button>
        </div>
      </div>
    </>
  );
};
