/**
 * Created by Jakob on 18/01/17.
 */
import React from 'react';

export default class Work extends React.Component {
    render() {

        //Calculate difference in hours, return as String
        function hoursString(d1,d2){
            return parseInt((new Date(d2)-new Date(d1))/(3600*1000));
        }

        //Format string for presenting Date
        function dayString(d) {
            var date = new Date(d);
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var month = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."];

            return days[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ": ";
        }

        return (
            <li className="work">
                <span className="start">{dayString(this.props.start)}</span>
                <span className="Time">{hoursString(this.props.start, this.props.end)}</span>
            </li>
        );
    }
}
