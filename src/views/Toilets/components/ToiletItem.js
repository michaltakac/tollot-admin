import React from 'react';
import { Link } from 'react-router'

const style = {
    margin: '5px',
    padding: '10px',
    border: '1px solid #000'
}

const ToiletItem = (props) => {
    return (
        <div style={style}>
            Toilet ID: {props.id}<br />
            Toilet token: {props.token}<br />
            Active: {String(props.active)}<br />
            Status: {String(props.status)}<br />
            <Link to={`/toilets/${props.id}`}>Settings</Link>
        </div>
    );
};

export default ToiletItem;
