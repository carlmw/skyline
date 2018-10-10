import React from 'react';
import CitiesTablePage from './CitiesTablePage';
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Route path='/orderBy/:orderBy'>
      {({ match }) => <CitiesTablePage params={match && match.params} />}
    </Route>
  </BrowserRouter>
);

export default App;
