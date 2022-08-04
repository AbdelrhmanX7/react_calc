import React, { useState } from "react";

export const ResultContext = React.createContext();

export default function RContext(props) {
  const [value, setValue] = useState("");

  const [Styles, SetStyles] = useState({
    Result: {
      background: "hsl(224, 36%, 15%)",
    },
    toggle_keypad: {
        background: 'hsl(223, 31%, 20%)'
    }
  });

  function save_value(Data) {
    setValue([...value, Data]);
  }

  function Delete_btn() {
    if (value.length !== 0) {
      value.pop();
      setValue([...value]);
    }
  }

  function Reset_btn() {
    setValue("");
  }

  function Calc_btn() {
    try {
      setValue([...eval(value.join("")).toString().split("")]);
    } catch (e) {
      console.log(e);
    }
  }
  function change_style(Data) {
    SetStyles(Data);
  }
  return (
    <ResultContext.Provider
      value={{
        value,
        save_value,
        Delete_btn,
        Reset_btn,
        Calc_btn,
        Styles,
        change_style,
      }}
    >
      {props.children}
    </ResultContext.Provider>
  );
}
