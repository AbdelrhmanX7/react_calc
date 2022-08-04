import React, { useContext, useEffect } from "react";
import { ResultContext } from "../../Result_Context";
import "../Components.css";

export default function KeyBody() {
  const Data = useContext(ResultContext);



  function get_test_value(value) {
    value = value.target.innerHTML
    if (value === "DEL") {
      Data.Delete_btn();
    } else if (value === "RESET") {
      Data.Reset_btn();
    } else if (value === "=") {
      Data.Calc_btn();
    } else if (Data.value.length === 0 && value === "0") {
      console.log(`can't add number zero`);
    } else {
      Data.save_value(value);
    }
  }
  return (
    <div style={Data.Styles.toggle_keypad} className="KeyBody">
      <button onClick={get_test_value} btn_value="7">7</button>
      <button onClick={get_test_value} btn_value="8">8</button>
      <button onClick={get_test_value} btn_value="9">9</button>
      <button onClick={get_test_value} btn_value="DEL">DEL</button>
      <button onClick={get_test_value} btn_value="4">4</button>
      <button onClick={get_test_value} btn_value="5">5</button>
      <button onClick={get_test_value} btn_value="6">6</button>
      <button onClick={get_test_value} btn_value="+">+</button>
      <button onClick={get_test_value} btn_value="1">1</button>
      <button onClick={get_test_value} btn_value="2">2</button>
      <button onClick={get_test_value} btn_value="3">3</button>
      <button onClick={get_test_value} btn_value="-">-</button>
      <button onClick={get_test_value} btn_value=".">.</button>
      <button onClick={get_test_value} btn_value="0">0</button>
      <button onClick={get_test_value} btn_value="/">/</button>
      <button onClick={get_test_value} btn_value="*">*</button>
      <button onClick={get_test_value} btn_value="RESET">RESET</button>
      <button onClick={get_test_value} btn_value="=">=</button>
    </div>
  );
}
