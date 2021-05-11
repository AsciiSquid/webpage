import React, { createRef } from 'react';

const rad = deg => deg * (Math.PI / 180);

const config = {
  height: 60,
  amplitude: 16,
  frequency: 1,
  fill: '#01377E'
}
class SineWave extends React.Component{
  constructor(props) {
    super(props);
    this.canvas = createRef();
    this.ctx = null;
  }
  
  shouldComponentUpdate(nextProps) {
    const { height } = this.props
    return nextProps.width != window.innerWidth || nextProps.height != height
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    this.draw();
  }

  componentWillReceiveProps() {
    this.draw();
  }

  draw = () => {
    const { start, height, amplitude, frequency, fill } = this.props
    let width = window.innerWidth;
    this.ctx.canvas.width = width;
    this.ctx.clearRect(0, 0, width, height)
    const mid = height / 2;
    const y = d => amplitude * Math.sin(rad(frequency * d));
    this.ctx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      this.ctx.lineTo(x, mid + y(start + x));
    }
    this.ctx.strokeStyle = 'transparent';
    this.ctx.stroke();
    this.ctx.lineTo(width, height);
    this.ctx.lineTo(0, height);
    this.ctx.fillStyle = fill;
    this.ctx.fill();
  }

  render() {
    const { height } = this.props
    return (
        <canvas ref={this.canvas} class="wave" width="100vw" height={height} />
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
    }, 32)
  }

  render() {
    const { start } = this.state
    return <SineWave start={start} {...this.props} />
  }
}

const Waves = () => (
  <div>
    <div id="waves">
      <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <AnimatedSineWave speed={1} {...config}  />
      </div>
      <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <AnimatedSineWave speed={3} {...config} frequency={config.frequency/2} />
      </div>
      <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <AnimatedSineWave speed={6} {...config} frequency={config.frequency/4} />
      </div>
    </div>
  </div>
)

export default Waves