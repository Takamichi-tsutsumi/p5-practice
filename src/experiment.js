import p5 from "p5";

function sketch(p) {
  p.setup = () => {
    p.createCanvas(640, 480);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }

    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

const app = new p5(sketch, document.body);
