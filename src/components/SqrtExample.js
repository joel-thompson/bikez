import React from "react";
import { sqrt } from "mathjs";

function SqrtExample(props) {

  const number = props.number || 4

  return (
    <div className="SqrtExample">
      <p>
        square root of {number}: {sqrt(number).toString()}
      </p>
    </div>
  );
}

export default SqrtExample;
