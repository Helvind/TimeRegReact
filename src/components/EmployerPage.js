/**
 * Created by Jakob on 16/01/17.
 */
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import Work from './Work'
import employers from '../data/employers';
import tasks from '../data/tasks';

export default class EmployerPage extends React.Component {
    render() {
        //Find Employer matching the 'id' in params
        const id = this.props.params.id;
        const employer = employers.filter((employer) => employer.id === id)[0];
        if (!employer) {
            return <NotFoundPage/>;
        }
        //Find Tasks for the matched Employer
        const filtered_tasks = tasks.filter((task) => task.employer === employer.id);

        const unaccounted = [];
        const accounted = [];

        filtered_tasks.map((task) => {
            unaccounted.push(task.unaccounted_work);
            accounted.push(task.accounted_work);
        });

        //Concat work across tasks
        const unaccounted_work = unaccounted.reduce((work_a, work_b) => work_a.concat(work_b));
        const accounted_work = accounted.reduce((work_a, work_b) => work_a.concat(work_b));

        return (
            <div className="employer-full">
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
                <div className="employer">
                    <header/>
                    <div className="picture-container">
                        <img src={`/img/task.png`}/>
                        <h2 className="name">{employer.name}</h2>
                    </div>
                    <section className="description">
                    </section>
                    <section className="unaccounted">
                        <p>Work registered <strong>{unaccounted_work.length}</strong> times:</p>
                        <ul>{
                            unaccounted_work.map((work, i) => <Work key={i} {...work}/>)
                        }</ul>
                    </section>
                    <section className="accounted">
                        <p>Work accounted <strong>{accounted_work.length}</strong> times:</p>
                        <ul>{
                            accounted_work.map((work, i) => <Work key={i} {...work}/>)
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
