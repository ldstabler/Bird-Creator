
let BIRD, MENU;

function init_() {
  setSpriteSheet("spriteSheet");
  setNumberOfLayers(3);
  lset(1);
  palset([63, 63]);

  console.log(ITM);

  BIRD = new Bird();
  MENU = new Menu();

}

function draw_() {
  cls(48);

  BIRD.draw();
  MENU.draw();
}

function Bird() {
  this.itemIndex = ['hats','tail','eyes','beak'];
  this.selectedYet = false;

  this.randomize = () => {
    this.items = [
      floor(random(0,ITM[0].length)),
      floor(random(0,ITM[1].length)),
      floor(random(0,ITM[2].length)),
      floor(random(0,ITM[3].length)),
    ];
    if(this.items[0] == 6) this.items[3] = 0;
  }

  this.items = [0,0,0,0];

  this.draw = () => {
    this.selectedYet = false;
    if(btn('a') && !pbtn('a')) this.randomize();

    let p = v(128-8*5,120-8*6);
    palset([63, 48]);

    let offset = 4 * sin(frameCount/16 % TWO_PI);
    spr(5, p.x, p.y + offset, 5, 6);

    for (var n = 0; n < ITM.length; n++) {
      i = ITM[n][this.items[n]];
      spr(parseInt(i.f, 16), p.x + i.p.x, p.y + i.p.y + offset, i.s.x, i.s.y);
    }

  }
}

function Menu() {
  this.itmType = 0;
  this.pressed = false;

  this.draw = () => {
    let p = createVector(D.W/2 - 48, D.H-D.H/6 - 16);
    palset([63, 48]);

    this.arrow(true);
    this.arrow(false);

    for (var i = 0; i < ITMlst[this.itmType].length; i++) {
      let x = p.x + i % 6 * 16;
      let y = p.y + floor(i/6) * 16;
      let w = 16;
      if(this.selected(x, y)) {
        w += 2;
        if(mouseIsPressed || touches.length) BIRD.items[this.itmType] = i;
      }
      spr(ITMlst[this.itmType][i], x, y, 1, 1, false, 0, w, w);
    }
  }

  this.selected = (x, y, isArrow) => {
    let w = 16;
    if(isArrow) w = 32;
    let m = createVector(mouseX/D.S, mouseY/D.S)
    return (m.x > x && m.x < x+w && m.y > y && m.y < y+w);
  }

  this.arrow = (dir) => {
    let p = createVector(D.W/2, D.H-D.H/6 - 16);
    if(dir) p.x -= (48 + 16 + 32);
    else p.x += 48 + 16;
    let w = 32;
    if(this.selected(p.x, p.y, true)) {
      w += 2;
      if((mouseIsPressed || touches.length) && !this.pressed) {
        this.pressed = true;
        this.itmType += dir? -1:1;
      } else if(!(mouseIsPressed || touches.length)) this.pressed = false;
      if(this.itmType < 0) this.itmType = ITM.length - 1;
      this.itmType %= ITM.length;
    }

    spr(220, p.x + 8, p.y + 8, 2, 2, dir, 0, w/2, w/2);
  }
}
