import React from "react";

function Warning({ warning }) {
  return (
    <div className="alert">
      <h3>{warning}</h3>
    </div>
  );
}

export default Warning;
