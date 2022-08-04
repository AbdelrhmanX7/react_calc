import React, { useContext, useEffect, useState } from "react";
import { ResultContext } from "../../Result_Context";

import '../Components.css'
export default function Header() {
    const [Theme, SetTheme] = useState([])
    const get_style = useContext(ResultContext)

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('themevalue'))
            SetTheme(saved)
        }catch {

        }
    }, [])

    function change_Theme(e) {
        SetTheme(+e.target.getAttribute('theme_number'))
    }
    function change_keypad() {
        document.querySelectorAll('button[btn_value').forEach((e) => {
            if(Theme === 1) {
                e.style =
                `background-color: hsl(30, 25%, 89%);
                 color: hsl(221, 14%, 31%);
                 box-shadow:0px 5px 0px 0px hsl(28deg 16% 65%);`
            }else if(Theme === 2) {
                e.style =
                `background-color: hsl(45, 7%, 89%);
                 color: hsl(60, 10%, 19%);
                 box-shadow:0px 5px 0px 0px hsl(35, 11%, 61%);`
            }else if(Theme === 3) {
                e.style =
                `background-color: hsl(268, 47%, 21%);
                 color: hsl(52, 100%, 62%);
                 box-shadow:0px 5px 0px 0px hsl(290, 70%, 36%);`
            }
        })
    }
    useEffect(() => {
        if(Theme === 1) {
            localStorage.setItem('themevalue', JSON.stringify(Theme))
            change_keypad()
            document.querySelectorAll('button[btn_value]')[3].style = 'background-color: hsl(225, 21%, 49%); box-shadow: 0px 5px 0px 0px hsl(224, 28%, 35%)'
            document.querySelectorAll('button[btn_value]')[16].style = 'background-color: hsl(225, 21%, 49%); box-shadow: 0px 5px 0px 0px hsl(224, 28%, 35%)'
            document.querySelectorAll('button[btn_value]')[17].style = 'background-color: hsl(6, 63%, 50%); box-shadow: 0px 5px 0px 0px hsl(6, 70%, 34%); color: white'
            document.querySelector('body').style =  'color: white; background: hsl(222, 26%, 31%);'
            get_style.change_style({Result: {background: 'hsl(224, 36%, 15%)'}, toggle_keypad: {background: 'hsl(223, 31%, 20%)'}})
        }
        else if(Theme === 2) {
            localStorage.setItem('themevalue', JSON.stringify(Theme))
            change_keypad()
            document.querySelectorAll('button[btn_value]')[3].style = 'background-color: hsl(185, 42%, 37%); box-shadow: 0px 5px 0px 0px hsl(185, 58%, 25%)'
            document.querySelectorAll('button[btn_value]')[16].style = 'background-color: hsl(25, 98%, 40%); box-shadow: 0px 5px 0px 0px hsl(25, 99%, 27%)'
            document.querySelectorAll('button[btn_value]')[17].style = 'background-color: hsl(6, 63%, 50%); box-shadow: 0px 5px 0px 0px hsl(6, 70%, 34%); color: white;'
            document.querySelector('body').style =  'color: black; background: hsl(0, 0%, 90%);'
            get_style.change_style({Result: {background: 'hsl(0, 0%, 93%)'}, toggle_keypad: {background: 'hsl(0, 5%, 81%)'}})
        }else if(Theme === 3) {
            localStorage.setItem('themevalue', JSON.stringify(Theme))
            change_keypad()
            document.querySelectorAll('button[btn_value]')[3].style = 'background-color: hsl(281, 89%, 26%); box-shadow: 0px 5px 0px 0px hsl(285, 91%, 52%)'
            document.querySelectorAll('button[btn_value]')[16].style = 'background-color: hsl(281, 89%, 26%); box-shadow: 0px 5px 0px 0px hsl(285, 91%, 52%)'
            document.querySelectorAll('button[btn_value]')[17].style = 'background-color: hsl(176, 100%, 44%); box-shadow: 0px 5px 0px 0px hsl(177, 92%, 70%); color: hsl(198, 20%, 13%);'
            document.querySelector('body').style =  'color: hsl(52, 100%, 62%); background: hsl(268, 75%, 9%);'
            get_style.change_style({Result: {background: 'hsl(268, 71%, 12%)'}, toggle_keypad: {background: 'hsl(268, 71%, 12%)'}})
        }
    }, [Theme])

    return(
        <div className="Main_Header">
            <p>calc</p>
            <div className="Theme_Changer">
                <p>THEME</p>
                <div className="toggle_container">
                    <div className="toggle_numbers">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div style={get_style.Styles.toggle_keypad} className="toggle_btn">
                        <p 
                        className="ball" 
                        style={Theme === 1 ? {left: '10%', background: 'hsl(6, 63%, 50%)'} 
                        : Theme === 2 ? {left: '40%', background: 'hsl(25, 98%, 40%)'} 
                        : {left: '70%', background: 'hsl(176, 100%, 44%)'}}
                        ></p>
                        <button className="toggle_btns" onClick={change_Theme} theme_number='1'></button>
                        <button className="toggle_btns" onClick={change_Theme} theme_number='2'></button>
                        <button className="toggle_btns" onClick={change_Theme} theme_number='3'></button>
                    </div>
                </div>
            </div>
        </div>
    )
}