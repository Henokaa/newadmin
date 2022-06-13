import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function NewUpdate(props) {
    const {type} = useParams();
    const { news } = useLocation().state;
    console.log("Props Parameter Value - " + type);
    console.log("Props State Value - " + news);
    return (
        <div>
            <h1>News Update</h1>
        </div>
      );
}

export default NewUpdate;