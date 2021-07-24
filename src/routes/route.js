import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Notes } from '../features/notes/Notes';
import { Notesadd } from '../features/notesAdd/Notesadd';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/noteAdd">
          <Notesadd />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
