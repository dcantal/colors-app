import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 500,
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name}/>
        });
        // const colorBoxes = this.props.colors.map(color => {
        //     return <ColorBox background={color.color} name={color.name} />
        // });
        return (
            <div className="Palette">
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    onAfterChange={this.changeLevel} 
                    step={100}
                />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}

export default Palette;