<template>
  <div align="center"><canvas id="canvasBg"></canvas>
  <canvas id="myCanvas" width="600" height="600" align="center"></canvas></div>

</template>

<script>
    export default {
      name: 'Canvas',
      data() {
        return {
          newScore: 0
        }
      },
      mounted() {
        this.game();
      },
      methods: {
        game() {
          let _this = this;
          const GONE = 0;           const BLACK = 1;            const WHITE = 2;  //brick status constants
          const TOPSPD = 9;                                                       //ball speed limit
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          var x = canvas.width/2;   var y = canvas.height-75;                    //ball position
          var xArray = [(-5),5];    var yArray = [(-3),(-4),(-5)];                //default velocity settings for x, y axis
          var ballRadius = 10;
          var ballColor = "#000000";
          var dx = xArray[Math.floor(Math.random() * xArray.length)];             //x-axis velocity
          var dy = yArray[Math.floor(Math.random() * yArray.length)];             //y-axis velocity

      //paddle variables
          var paddleHeight = 13;    var paddleWidth = 80;
          var paddleX = (canvas.width-paddleWidth)/2;                             //x-position of paddle
          var paddleColor = "#000000";
          var rightPressed = false; var leftPressed = false;

          var score = 0;            var lives = 3;              var paused = false;
          _this.newScore == score

      //brick variables
          var brickRowCount = 6;    var brickColumnCount = 5;
          var brickWidth = 75;      var brickHeight = 20;
          var brickPadding = 25;
          var brickOffsetTop = 70;  var brickOffsetLeft = 65;
          var bricks = [];          var brokeBricks = 0;

          function setBricks(){                                                 //Sets up brick array
            for(var c=0; c<brickColumnCount; c++) {
                bricks[c] = [];
                for(var r=0; r<brickRowCount; r++) {
                    bricks[c][r] = { x: 0, y: 0, status: WHITE };
                }
            }
          }


          function drawBall() {
              ctx.beginPath();
              ctx.arc(x, y, ballRadius, 0, Math.PI*2);  //ball vector
              ctx.fillStyle = ballColor;
              ctx.fill();
              ctx.closePath();
          }

          function drawPaddle() {
            ctx.beginPath();
              ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
              ctx.fillStyle = paddleColor;
              ctx.fill();
              ctx.closePath();
          }

          function drawBricks() {
            for(var c=0; c<brickColumnCount; c++) {
                for(var r=0; r<brickRowCount; r++) {
                        var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft; //brick x position
                        var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop; //brick y position
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        if(bricks[c][r].status == BLACK) {                          //Color bricks
                          ctx.fillStyle = "#000000";
                        }
                        else if(bricks[c][r].status == WHITE) {
                          ctx.fillStyle = "#FFFFFF";
                        }
                        else {
                          ctx.fillStyle = 'rgba(0,0,0,0.3)';                        //Makes GONE bricks transparent
                        }
                        ctx.fill();
                        ctx.closePath();
                    }
                }
          }

          function drawScore() {
            ctx.font = "bold 20px Arial";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 4;
            ctx.strokeText("SKOЯЭ: "+score, 5, 590);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText("SKOЯЭ: "+score, 5, 590);
          }

          function drawLives() {
            ctx.font = "bold 20px Arial";
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 4;
            ctx.strokeText("LIVЭS: "+lives, 500, 590);
            ctx.fillStyle = "#d81c1c";
            ctx.fillText("LIVЭS: "+lives, 500, 590);
          }
      //key press event
          document.addEventListener("keydown", keyDownHandler, false);
          document.addEventListener("keyup", keyUpHandler, false);

      //key controls
          function keyDownHandler(e) {                          //move right
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = true;

          }
            else if(e.key == "Left" || e.key == "ArrowLeft") { //move left
                leftPressed = true;

          }
            else if (e.key == " " || e.key == "Spacebar") {   //Change paddle color
              if(paddleColor == "#000000") {
                paddleColor = "#FFFFFF";
              }
              else if(paddleColor == "#FFFFFF") {
                paddleColor = "#000000";
              }
            }

            else if (e.key == "Backspace") {                  // pause function
              if (!paused) {
                paused = true;
              } else if (paused)
              {
                paused = false;
                draw();
              }
            }
          }

          function keyUpHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = false;
            }
          }

      //brick collision
          function collisionDetectionA() {
          for(var c=0; c<brickColumnCount; c++) {
              for(var r=0; r<brickRowCount; r++) {
                  var b = bricks[c][r];                     //brick
                  if(b.status == BLACK) {                   //black bricks
                      if(x+ballRadius > b.x && x+ballRadius < (b.x+brickWidth) && y+ballRadius > b.y && y+ballRadius < (b.y+brickHeight)) {
                          dy = -dy;
                            if(ballColor == "#FFFFFF"){     //Check for white ball
                              b.status = GONE;
                              score = score + lives;        //Multiply points gained by number of lives
                              _this.newScore = score;
                              _this.$parent.$emit('point-change', _this.newScore);
                              console.log(_this.newScore);
                              brokeBricks++;
      //alert(brokeBricks);
                              if(brokeBricks == (brickRowCount*brickColumnCount)) {  //Win condition
                                  alert("KOMPLЭTIOИ OV OPЭЯдTIOИ");
                                  paused = true;
                                  document.location.reload();
                                  clearInterval(interval);
                                  brokeBricks = 0;          // Needed for Chrome to end game
                              }
                          }
                      }
                  }
                  else if(b.status == WHITE) {              //white bricks
                      if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                          dy = -dy;
                          if(ballColor == "#000000"){       //Check for black ball
                            b.status = BLACK;
                            score++;
                            _this.newScore = score;
                            _this.$parent.$emit('point-change', _this.newScore);
                            console.log(_this.newScore);
                            ballColor = "#FFFFFF";
                        }
                      }
                  }
              }
            }
          }

      //Reset paddle & ball position
          function resetPaddleBall(){
            x = canvas.width/2;
            y = canvas.height-75;
            paddleX = (canvas.width-paddleWidth)/2;
          }

      //wall & paddle collision
          function collisionDetectionB() {
        //WALLS
            //Right
            if(x + dx > canvas.width-ballRadius) {
              dx++;
              dy++;
              dx = -dx;
            }
            //Left
            if(x + dx < ballRadius) {
              dx++;
              dy++;
              dx = -dx;
            }
            //Top
            if(y + dy < ballRadius) {
              dx++;
              dy--;
              dy = -dy
            }

        //PADDLE
            else if((x > (paddleX-10) && x < (paddleX+10) + paddleWidth) && (y+dy > canvas.height-ballRadius)) {
              ballColor = paddleColor;
                if (rightPressed) {           //knock ball to the right when moving right
                      if(dx > 0) {
                        dx++;
                      }
                      else if (dx < 0){
                        dx = -dx;
                    }
                      dy = -dy;
                    }

                      else if (leftPressed) { //knock ball to the left when moving left
                          if(dx > 0) {
                            dx = -dx;
                          }
                          else if (dx < 0){
                            dx--;}
                            dy = -dy;
                    }

                    else {                  //no movement when contacting ball knocks it upward
                      dy++;
                      dy = -dy;
                    }
                  }
              else if(y + dy > canvas.height-ballRadius && y + dy > canvas.height) { //Failing to catch the ball
                lives--;
                paddleX = (canvas.width-paddleWidth)/2;
                dx = xArray[Math.floor(Math.random() * xArray.length)];  //reset x velocity
                dy = -yArray[Math.floor(Math.random() * yArray.length)]; //reset y velocity
                if(!lives) {
                    paused = true;
                    alert("OPЭЯдTIOИ FдILUЯЭ");                          //Loss condition
                    lives = 3;                                           //Reset Lives and Score
                    score = 0;
                    _this.newScore = 0;
                    _this.$parent.$emit('point-change', _this.newScore);
                    brokeBricks = 0;                                    //Reset brick counter
                    dy = -dy;
                      resetPaddleBall()
                      rightPressed = false;
                      leftPressed = false;
                      setBricks();                                      //Reset bricks
                }
                else {                                                  //Loss of life, but not game
                  dy = -dy;
                    resetPaddleBall()
                }
              }
            }


          function ballSpeed() {
              if(dx > TOPSPD){
                dx = TOPSPD;
              }
              else if(dy > TOPSPD) {
                dy = TOPSPD;
              }
              x += dx;
              y += dy;
          }

          function paddleMove() {
            if(rightPressed && paddleX < canvas.width-paddleWidth){
                paddleX+=9;
            }
            else if(leftPressed && paddleX > 0){
                paddleX+=-9;
            }
          }

          function draw() {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
              drawBricks();
              drawBall();
              drawPaddle();
              drawScore();
              drawLives();
              collisionDetectionA();
              collisionDetectionB();
              paddleMove();
              ballSpeed();
            if (!paused) {
              requestAnimationFrame(draw);
            }
          }


          setBricks();
          draw();
      }
    }
  }
</script>

<style>

#canvasBg {
  background-image: url('../assets/images/canvasWater.jpg');
  background-size: cover;
  background-position: center;
  resize: both;
  position: absolute;
  border: 5px solid black;
  border-style: double;
  width: 398px;
  height: 400px;
  margin-left: -203px;
  margin-top: 0px;
}

</style>
