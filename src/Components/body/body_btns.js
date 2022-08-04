import React from "react";

export default function BodyBtns(props) {
  function get_btn_value(e) {
    props.fun(e.target.getAttribute('btn_value'))
  }
  return (
    <React.Fragment>
      <button onClick={get_btn_value} btn_value={props.value}>
        {props.value}
      </button>
    </React.Fragment>
  );
}
