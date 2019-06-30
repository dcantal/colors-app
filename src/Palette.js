import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => {
            return (
                <ColorBox background={color.color} name={color.name} />
            )
        });
        // const colorBoxes = this.props.colors.map(color => {
        //     return <ColorBox background={color.color} name={color.name} />
        // });
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer goes here */}
                <h1>PALETTE</h1>
            </div>
        )
    }
}

export default Palette;