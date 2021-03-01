import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthPage from './pages/authpage.component';
import NotesPage from './pages/notespage.component';
import EditNotePage from './pages/editnotepage.component';
import Header from './components/header.component';

const App = ({ user }) => {
  return (
    <React.Fragment>
      <Header />
      <div className='container my-5'>
        {!user.isLoggedIn ? (
          <Switch>
            <Route exact path='/auth' component={AuthPage} />
            <Redirect to='/auth' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/notes' component={NotesPage} />
            <Route exact path='/edit-note' component={EditNotePage} />
            <Route exact path='/edit-note/:noteId' component={EditNotePage} />
            <Redirect to='/notes' />
          </Switch>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
