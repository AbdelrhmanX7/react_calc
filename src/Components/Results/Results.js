import React, { useContext } from "react";
import { ResultContext } from "../../Result_Context";
import '../Components.css'
export default function Results() {
    const res = useContext(ResultContext)
    return(
        <div style={res.Styles.Result} className="Results">
            <h1>{res.value.length !== 0 ? res.value : '0'}</h1>
        </div>
    )
}