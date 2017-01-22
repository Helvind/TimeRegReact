import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import TaskOverviewPage from './components/TaskOverviewPage';
import EmployerPage from './components/EmployerPage';
import NewTask from './components/NewTask';
import NewEmployer from './components/NewEmployer';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="task/:id" component={TaskOverviewPage}/>
        <Route path="employer/:id" component={EmployerPage}/>
        <Route path="newTask" component={NewTask}/>
        <Route path="newEmployer" component={NewEmployer}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;