/**
 * Created by Jakob on 20/01/17.
 */
import React from 'react';

export default class CurrentTask extends React.Component {
    //Call to index to stop registering for the current task
    stopCount() {
        this.props.stopWork();
    }

    render() {
        return (
            <div className="current-task">
                <span>{this.props.name}</span>
                <button className="button" onClick={this.stopCount.bind(this)}>Stop current Task</button>
            </div>
        );
    }
}