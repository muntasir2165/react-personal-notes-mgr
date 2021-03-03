import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  createNote,
  getNoteById,
  updateNoteById,
} from './../redux/actions/notesActionCreators';

const EditNotePage = ({
  match,
  history,
  dispatchCreateNoteAction,
  dispatchGetNoteByIdAction,
  dispatchUpdateNoteAction,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const { noteId } = match.params;
    if (noteId) {
      dispatchGetNoteByIdAction(
        noteId,
        ({ title, content, description, category }) => {
          setTitle(title);
          setContent(content);
          setDescription(description);
          setCategory(category);
        }
      );
    }
  }, [dispatchGetNoteByIdAction, match.params]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { noteId } = match.params;
    const data = { title, content, description, category };
    // if noteId is present, we are in edit/update mode for an existing note
    // else, we are on the page filling out the contents for a new note
    if (noteId) {
      dispatchUpdateNoteAction(
        noteId,
        data,
        () => {
          toast.success('Note Updated Successfully!');
          history.replace('/notes');
        },
        (message) => toast.error(`Error: ${message}`)
      );
    } else {
      dispatchCreateNoteAction(
        data,
        () => {
          toast.success('Note Created Successfully!');
          history.replace('/notes');
        },
        (message) => toast.error(`Error: ${message}`)
      );
    }
  };

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col'>
          <h2>Edit Note</h2>
        </div>
      </div>
      <div className='row align-items-center mt-4'>
        <div className='col-9'>
          <form noValidate onSubmit={handleOnSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                noValidate
                id='title'
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <input
                noValidate
                id='content'
                type='text'
                placeholder='Content'
                name='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                noValidate
                id='description'
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='category'>Category</label>
              <select
                noValidate
                id='category'
                name='category'
                className='form-control'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=''>-- Select --</option>
                <option value='GENERAL'>General</option>
                <option value='IDPROOF'>ID Proof</option>
                <option value='PROFESSIONAL'>Professional</option>
              </select>
            </div>

            <div className='mt-5'>
              <button type='submit' className='btn btn-primary mr-2 btn-lg'>
                Save | <i className='fas fa-save' />
              </button>
              <button
                type='button'
                onClick={() => history.replace('/notes')}
                className='btn btn-secondary btn-lg'
              >
                Cancel | <i className='fas fa-times' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateNoteAction: (data, onSuccess, onError) =>
    dispatch(createNote(data, onSuccess, onError)),
  dispatchUpdateNoteAction: (noteId, data, onSuccess, onError) =>
    dispatch(updateNoteById(noteId, data, onSuccess, onError)),
  dispatchGetNoteByIdAction: (noteId, onSuccess) =>
    dispatch(getNoteById(noteId, onSuccess)),
});

export default connect(null, mapDispatchToProps)(EditNotePage);
