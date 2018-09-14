import p5 from "p5";

function sketch(p) {
  let x = 0;
  p.setup = () => {
    p.background(100);
  };

  p.draw = () => {
    p.ellipse(x, p.height / 2, 20, 20);
    x = x + 1;
  };
}

const app = new p5(sketch, document.body);
