var ball = {
  x: 200,
  y: 200,
  size: 15,
  directionX: 2,
  directionY: -4,


  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword this
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.y += this.directionY;
    this.x += this.directionX;// this line is the same as: this.x = this.x + 1;
  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bounceY();
    if (this.y < 0 + this.size / 2) this.bounceY();
    if (this.x > width - this.size / 2) this.bounceX();
    if (this.x < 0 + this.size / 2) this.bounceX();
  },

  bounceY: function () {
    // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
    this.directionY = this.directionY*-1;
  },


  bounceX: function() {
    this.directionX = this.directionX*-1;
},
};

var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
