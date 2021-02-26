import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/authpage.component';
import NotesPage from './pages/notespage.component';
import EditNotePage from './pages/editnotepage.component';

const App = () => {
  return (
    <div className='container my-5'>
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
        <Route exact path='/notes' component={NotesPage} />
        <Route exact path='/edit-note' component={EditNotePage} />
        <Route exact path='/edit-note/:noteId' component={EditNotePage} />
        <Redirect to='/auth' />
      </Switch>
    </div>
  );
};

export default App;
