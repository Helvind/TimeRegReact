/**
 * Created by Jakob on 16/01/17.
 */
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import Work from './Work';
import tasks from '../data/tasks';
import employers from '../data/employers';

export default class TaskOverviewPage extends React.Component {
    render() {
        //Find Task with 'id' matching param
        const id = this.props.params.id;
        const task = tasks.filter((task) => task.id === id)[0];
        if (!task) {
            return <NotFoundPage/>;
        }
        //Find name of Employer for matching Task
        const emp_name = employers.filter((emp) => emp.id === task.employer)[0].name;

        return (
            <div className="task-full">
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
                <div className="task">
                    <header/>
                    <div className="picture-container">
                        <img src={`/img/task.png`}/>
                        <h2 className="name">{task.name}</h2>
                    </div>
                    <section className="description">
                        Employer: {emp_name}.
                    </section>
                    <section className="unaccounted">
                        <p>Work registered <strong>{task.unaccounted_work.length}</strong> times:</p>
                        <ul>{
                            task.unaccounted_work.map((work, i) => <Work key={i} {...work}/>)
                        }</ul>
                    </section>
                    <section className="accounted">
                        <p>Work accounted <strong>{task.accounted_work.length}</strong> times:</p>
                        <ul>{
                            task.accounted_work.map((work, i) => <Work key={i} {...work}/>)
                        }</ul>
                    </section>
                </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
            </div>
        );
    }
}
