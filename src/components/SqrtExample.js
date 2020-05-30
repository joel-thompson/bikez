import React from 'react';
import { sqrt } from 'mathjs';

function SqrtExample(props) {
  const number = props.number || 4;

  return (
    <section className="SqrtExample section">
      <p>
        square root of {number}: {sqrt(number).toString()}
      </p>
    </section>
  );
}

export default SqrtExample;
