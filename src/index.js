import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    React.createElement(null),
    // eslint-disable-next-line no-undef
    document.getElementById('root'),
  );
}

export default { /* module surface */ };
