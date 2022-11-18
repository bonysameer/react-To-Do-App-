import React, { useState } from 'react';
import moment from 'moment';

export default function App() {
  const dateDifference = (date) => {
    return moment().diff(date, 'days');
  };

  const [state, setState] = useState([
    {
      date: '2022-01-01',
    },
    {
      date: '2022-09-01',
    },
    {
      date: '2022-12-01',
    },
  ]);
  return (
    <div>
      {state.map((ele) => (
        <li
          style={{
            border: dateDifference(ele.date) > 0 ? '4px solid green' : '',
          }}
        >
          {ele.date}
        </li>
      ))}
    </div>
  );
}