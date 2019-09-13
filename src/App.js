import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from './design-system/templates/Dashboard';
import EditRecipe from './design-system/templates/EditRecipes';
import ViewRecipe from './design-system/templates/ViewRecipe';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path="/recipes/create" exact component={EditRecipe} />
      <Route path="/recipes/view/:slug" component={ViewRecipe} />
    </BrowserRouter>
  );
}

export default App;
