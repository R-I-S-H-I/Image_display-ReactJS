import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';
import App from './App';

ReactDOM.render(
  <>
  {/* {console.log(Users)} */}
    {Users.map((user) => {
      return <App key={user.id} {...user} />
    })}
  </>,document.getElementById('root')
);