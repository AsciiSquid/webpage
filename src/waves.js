import React, { createRef } from 'react';
import './style/wave.css';

function Wave(count, ) {
    var waves = [];
    for(var i=0; i<count; i++) {
        waves.push((
            <div class="wave"></div>
        ));
    }
    return (
        <canvas ref=""></canvas>
    );
}

const rad = deg => deg * (Math.PI / 180);

class SineWave extends React.Component{
  constructor(props) {
    super(props);
    this.canvas = createRef();
    this.ctx = null;
  }
  
  shouldComponentUpdate(nextProps) {
    const { width, height } = this.props
    return nextProps.width != width || nextProps.height != height
  }

  componentDidMount() {
    const { height, fill, stroke, strokeWidth } = this.props
    this.ctx = this.canvas.current.getContext("2d");

    // Create linear gradient
    const lg = this.ctx.createLinearGradient(0, 0, 0, height);
    lg.addColorStop(0, "#3d29f500");
    lg.addColorStop(1, "#3d29f5aa");
    
    // Configure colors
    this.ctx.fillStyle = fill;
    this.ctx.strokeStyle = strokeWidth === 0 ? 'transparent' : stroke;
    this.ctx.lineWidth = strokeWidth;

    // Perform initial render
    this.draw();
  }

  componentWillReceiveProps() {
    this.draw();
  }

  draw = () => {
    const { start, width, height, amplitude, frequency } = this.props
    this.ctx.clearRect(0, 0, width, height)
    const mid = height / 2;
    const y = d => amplitude * Math.sin(rad(frequency * d));
    this.ctx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      this.ctx.lineTo(x, mid + y(start + x));
    }
    this.ctx.stroke();
    this.ctx.lineTo(width, height);
    this.ctx.lineTo(0, height);
    this.ctx.fill();
  }

  render() {
    const { width, height, amplitude, frequency } = this.props
    return (
        <canvas ref={this.canvas} id="wave" width={width} height={height} />
    );
  }
}

class AnimatedSineWave extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0
    }
  }
  
  componentDidMount() {
    const { speed, frequency } = this.props
    setInterval(() => {
      this.setState(prevState => ({
        start: (prevState.start + speed)%(360/frequency)
      }))
    }, 16)
  }

  render() {
    const { start } = this.state
    return <SineWave start={start} {...this.props} />
  }
}

const config = {
  width: 360,
  height: 180,
  amplitude: 10,
  frequency: 1,
  fill: '#3d29f588',
  stroke: 'transparent',
}

const Apps = () => (
  <div>
    <div style={{width: 360, height: 180, position: 'relative'}}>
      <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <AnimatedSineWave speed={1} {...config}  />
      </div>
      <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <AnimatedSineWave speed={3} {...config} frequency={0.5} />
      </div>
    </div>
  </div>
)

export default Apps