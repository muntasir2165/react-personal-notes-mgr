import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NotesCollection from '../components/notescollection.component';
import { fetchAllNotes } from './../redux/actions/notesActionCreators';

const NotesPage = ({ loading, notes, dispatchFetchAllNotesAction }) => {
  useEffect(() => dispatchFetchAllNotesAction(), [dispatchFetchAllNotesAction]);

  return (
    <React.Fragment>
      <NotesCollection notes={notes} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllNotesAction: () => dispatch(fetchAllNotes()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
