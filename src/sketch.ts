import p5 from 'p5';
// import 'p5/lib/addons/p5.sound';  

const sketch = (p5: p5) => {

  p5.setup = () => {
    const canvas = p5.createCanvas(640, 360);
    canvas.parent('app');
    p5.background(0);
  }
  p5.draw = () => {
    // Draw here
  };
}

new p5(sketch);
