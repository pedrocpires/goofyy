// Created by Pedro Pires [https://github.com/pedrocpires]

import React from 'react';
import './style.css';

function Content_title(props) {
return (
    <div className="Content_title">
    <h3>{props.content_title}</h3>
    </div>
);
}

Content_title.defaultProps = {
    content_title: 'Session Title'
}

export default Content_title;
