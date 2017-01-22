import React from 'react';
import { Link } from 'react-router';

export default class TaskPreview extends React.Component {
    //Pass task back to update in index
    chooseTask() {
        this.props.updateTask(this.props);
    }

    render() {
        return (
            <div>
                <Link to={`/task/${this.props.id}`}>
                    <div className="task-preview">
                        <h2 className="name">{this.props.name}</h2>
                    </div>
                </Link>
                <button className="button" onClick={this.chooseTask.bind(this)}>Track Task</button>
            </div>
        );
    }
}