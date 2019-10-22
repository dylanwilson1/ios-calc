import React from 'react';
import './Display.css';

class Display extends React.Component {
    render() {
        let x=String(this.props.display)
        // console.log(x)
        return (
            <div id='display'>
                {x<=14 ? x : x.slice(0,14)}
                {/* {x} */}
            </div>
        )
    }
}

export default Display