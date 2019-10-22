import React from 'react';
import './Buttons.css';

////currently the handleclick function is passed from
//app (handleInput)
//         v 
//Buttons (handleClick)
//         v   
//Number/OperatorSecondary/OperatorPrimary(handler)

function Buttons(props) {  
    return (
        <ul>
            <OperatorSecondary display='C' handler={props.clear}/>
            <OperatorSecondary display='+/-' handler={props.handleClick}/>
            <OperatorSecondary display='%' handler={props.handleClick}/>
            <OperatorPrimary display='÷' handler={props.handleClick}/>

            <Number display='7' handler={props.handleClick}/>
            <Number display='8' handler={props.handleClick}/>
            <Number display='9' handler={props.handleClick}/>
            <OperatorPrimary display='x' handler={props.handleClick}/>

            <Number display='4' handler={props.handleClick}/>
            <Number display='5' handler={props.handleClick}/>
            <Number display='6' handler={props.handleClick}/>
            <OperatorPrimary display='-' handler={props.handleClick}/>

            <Number display='1' handler={props.handleClick}/>
            <Number display='2' handler={props.handleClick}/>
            <Number display='3' handler={props.handleClick}/>
            <OperatorPrimary display='+' handler={props.handleClick}/>

            <Number display='0' handler={props.handleClick} buttonStyle={{ width: '170px', textAlign: 'left', paddingLeft: '28px' }}/>
            <OperatorSecondary display='.' handler={props.handleClick}/>
            <OperatorPrimary display='=' handler={props.calculate}/>
        </ul>
    )
}

function Number(props){
    return (
        <button onClick={()=>props.handler(props.display,'operand')} style={props.buttonStyle}>{props.display}</button>
    )
}

function OperatorPrimary(props){
    return(
        <button onClick={()=>props.handler(props.display,'operator')} className='operator'>{props.display}</button>
    )
}

function OperatorSecondary(props){
    return(
        <button onClick={()=>props.handler(props.display,'operand')} className='operator-secondary'>{props.display}</button>
    )
}

export default Buttons;