import React, { createRef } from 'react';

const rad = deg => deg * (Math.PI / 180);
class Wave extends React.Component{
  constructor(props) {
    super(props);
    this.canvas = createRef();
    this.ctx = null;
    this.start = 0
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext("2d");
    const { speed, frequency } = this.props
    setInterval(() => {
      this.start = (this.start + speed)%(360/frequency)
      this.draw();
    }, 32)
  }

  draw = () => {
    const { height, amplitude, frequency, fill } = this.props
    let width = window.innerWidth;
    this.ctx.canvas.width = width;
    this.ctx.clearRect(0, 0, width, height)
    const mid = height / 2;
    const y = d => amplitude * Math.sin(rad(frequency * d));
    this.ctx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      this.ctx.lineTo(x, mid + y(this.start + x));
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
        <canvas ref={this.canvas} className="wave" width="100vw" height={height} />
    );
  }
}

const Waves = (props) => {
  let count = props.count != null ? props.count : 1;
  let wavelist = [];
  for (var i=0; i < count; i++) {
    wavelist.push(
      <div key={i} style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
        <Wave {...props} speed={props.speed * (1 + i * 2)} frequency={props.frequency / (1 + i * 2)} />
      </div>
    )
  }
  return (
  <div>
    <div id="waves">
      {wavelist}
    </div>
  </div>
)}

export default Waves