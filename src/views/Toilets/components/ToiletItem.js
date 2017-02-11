import React from 'react';
import { Link } from 'react-router'

const style = {
    margin: '5px',
    padding: '10px',
    border: '1px solid #000'
}

const setStatusColor = status => status ? 'green' : 'red';

const ToiletItem = (props) => {
    return (
        <div style={style}>
            <strong>{props.title}</strong><br />
            Toilet ID: {props.id}<br />
            Toilet token: {props.token}<br />
            Active: <div style={{width: '10px', height: '10px', borderRadius: '10px', background: setStatusColor(props.active), display: 'inline-block'}}></div><br />
            Status: <div style={{width: '10px', height: '10px', borderRadius: '10px', background: setStatusColor(props.status), display: 'inline-block'}}></div><br />
            <Link to={`/toilets/${props.id}`}>Settings</Link>
        </div>
    );
};

export default ToiletItem;
