/**
 * Created by Jakob on 22/01/17.
 */
import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class NewTask extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            employer: ''
        }
    }

    //Keep name in state updated
    updateName(e) {
        this.setState({name: e.target.value})
    }

    //Save Task by updating template and passing to method in index, then return
    saveTask(t) {
        t.name = this.state.name;
        t.id = this.state.name.toLowerCase().replace(/\s/g, '');
        this.props.params.addTask(t);
        browserHistory.push('/')
    }

    render() {
        //Empty Task template
        const task =
            {
                'id': '',
                'name': '',
                'employer': '1',
                'unaccounted_work': [],
                'accounted_work': []
            };
        return (
            <div className="new-task-full">
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
                <div className="new-task">
                    <h2 className="title">New task</h2>
                    <p>Name:</p>
                    <input onChange={this.updateName.bind(this)}/>
                    <button className="button" onClick={this.saveTask.bind(this, task)}>Save task</button>
                </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
            </div>
        )
    }
}

