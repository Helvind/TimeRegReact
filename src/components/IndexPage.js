/**
 * Created by Jakob on 16/01/17.
 */
import React from 'react';
import { Link } from 'react-router';
import TaskPreview from './TaskPreview';
import EmployerPreview from './EmployerPreview';
import CurrentWork from './CurrentTask';
import tasks from '../data/tasks';
import employers from '../data/employers'

export default class IndexPage extends React.Component {
    constructor() {
        super();
        this.state = {
            task_id: 'none',
            task_name: 'none',
            work_id: 'none',
            //Dummy count
            work_count: 8,
        };
    }

    //Add new Task
    addTask(t) {
        tasks.push(t);
    }

    //Find 'unended' work, maybe due to accidental browser shutdown
    //Works, but not in render(). Needs to be called only once
    checkCurrentWork() {
        let id = '';
        let current_task = tasks.filter(task => {
            let unended_work = task.unaccounted_work.filter(x => !('end' in x));
            if(unended_work.length == 1) {
                name = unended_work[0].id;
                return true;
            }
            return false

        });
        const len = current_task.length;

        //Only one task should be able to be 'unended'
        if (len == 1) {
            this.setState({task_id: current_task[0].id, task_name: current_task[0].name, work_id: id })
        }
        if (len > 1) {
            this.setState({task_id: 'error', task_name: 'error'})
        }
    }

    //Stop registering time for current task
    stopWork() {
        this.setState({task_id: 'none', task_name: 'none', work_id: 'none'});
        const task = tasks.filter((task) => task.id === this.state.task_id);
        const work = task.unaccounted_work.filter((work) => work.id === this.state.work_id);
        const d = new Date();
        work.end = d.toDateString();

    }

    //Change task for registering time
    updateTask(t) {
        const d = new Date();
        const id = this.state.work_count+1;
        this.setState({work_count: id});
        const work = {id: id, start: d.toDateString()};
        t.unaccounted_work.push(work);
        this.setState({task_id: t.id, task_name: t.name, work_id: id})
    }

    render() {
        //this.checkCurrentWork();
        return (
            <div className="home">
                <div className="task-selector">
                    <h1>Current task:</h1>
                    <CurrentWork name={this.state.task_name} stopWork={this.stopWork.bind(this)}/>
                    <h1>Choose task to start registering:</h1>
                    {tasks.map(task => <TaskPreview key={task.id} {...task} updateTask={this.updateTask.bind(this)}/>)}
                    <Link to={`/newTask`} params={{ addTask: this.addTask.bind(this) }}>
                        <div className="new-task">
                            <h2 className="name">New Task</h2>
                        </div>
                    </Link>
                </div>
                <div className="employer-selector">
                    <h1>Employers:</h1>
                    {employers.map(employer => <EmployerPreview key={employer.id} {...employer} />)}
                    <Link to={`/newEmployer`}>
                        <div className="new-employer" >
                            <h2 className="name">New Employer</h2>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}