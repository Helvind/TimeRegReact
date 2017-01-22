import React from 'react';
import { Link } from 'react-router';

export default class EmployerPreview extends React.Component {
    render() {
        return (
            <Link to={`/employer/${this.props.id}`}>
                <div className="employer-preview">
                    <h2 className="name">{this.props.name}</h2>

                </div>
            </Link>
        );
    }
}