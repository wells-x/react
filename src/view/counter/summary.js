import React from 'react';
import {connect} from 'react-redux';

function Summary({value}) {
  return (
    <div>Total Count: {value}</div>
  );
}

function mapState({counter}) {
  let sum = 0;
  for (const key in counter) {
    if (counter.hasOwnProperty(key)) {
      sum += counter[key];
    }
  }
  return {value: sum};
}

export default connect(mapState)(Summary)