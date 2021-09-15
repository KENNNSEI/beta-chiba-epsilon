var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bgImage = new function () {
  this.x = 0
  this.y = 0;

  this.width = canvas.width;
  this.height = canvas.height;

  this.loadImage = function () {
    this.image = new Image();
    this.image.src = "assets/images/platform_b.jpg";
    this.image.onload = loader;

  }

  this.render = function () {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

// var personImage = new function () {
//   this.y = 0;

//   this.loadImage = function () {
//     this.image = new Image();
//     this.image.src = "assets/images/seinen.png";
//     this.image.onload = loader;
//   }

//   this.render = function () {

//     this.aspect = this.image.width / this.image.height;

//     this.width = canvas.height * this.aspect;
//     this.height = canvas.height;

//     this.x = canvas.width / 2 - this.width / 2;

//     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//   }
// }


var messageBox = new function () {
  this.x = 0;

  this.loadImage = function () {
    this.image = new Image();
    this.image.src = "assets/images/message_box.png";
    this.image.onload = loader;
  }

  this.render = function () {

    this.aspect = this.image.width / this.image.height;

    this.width = canvas.width;
    this.height = canvas.height / this.aspect;

    this.marginBottom = 20;
    this.y = canvas.height - this.height - this.marginBottom;

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

var myText = new function () {

  this.render = function () {
    var messageBoxInnerWidth = messageBox.width - 40;
    var messageBoxPaddingTop = 50;
    var messageBoxPaddingLeft = 20;

    var s = "";
    var sentenceArray = text.split("");

    var kaigyouHeight = 0;

    for (var i = 0; i < sentenceArray.length; i++) {
      s += sentenceArray[i];
      var textWidth = ctx.measureText(s).width;

      if(textWidth > messageBoxInnerWidth) {
        ctx.fillText(s, messageBoxPaddingLeft, messageBox.y + kaigyouHeight + messageBoxPaddingTop);

        kaigyouHeight += 20;
        s = "";
      }
    }

    ctx.fillStyle = "#594639";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "left";

    ctx.fillText(s, messageBoxPaddingLeft, messageBox.y + kaigyouHeight + messageBoxPaddingTop);
  }
}

var sentences = [
"ああああああああ",
"ああああああ「ああああああ」",
"あああああああ",
"あああああああああ",
"あああああ",
"あああああああああ",
"ああああ"
];

var Loader = function (expectedCnt, callback) {
  var cnt = 0;
  return function() {
    cnt++;
    if(cnt == expectedCnt) {
      callback();
    }
  }
}

var loader = Loader(3, function () {
  update();
});

bgImage.loadImage();
// personImage.loadImage();
messageBox.loadImage();

var sentenceIndex = 0;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(sentenceIndex > sentences.length - 1) {
    bgImage.render();
    alert("終了です");
    location.reload();
  } else {
    bgImage.render();
    // personImage.render();
    messageBox.render();

    myText.render(text=sentences[sentenceIndex]);
    sentenceIndex++;
  }
}

canvas.addEventListener("click", function(){
  update();
});