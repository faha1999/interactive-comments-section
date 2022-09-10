import React from 'react';
import { AddComment } from './components/AddComment';
import { Comment } from './components/Comment';
import { EditComment } from './components/EditComment';
import { Reply } from './components/Reply';

export const App = () => {
  return (
    <>
      <Comment />
      <Reply />
      <AddComment />
      <EditComment />
    </>
  );
};
