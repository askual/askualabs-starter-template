import Phaser from 'phaser'
import WebFont from 'webfontloader'
import { askualabs_snippet } from '../../askualabs_core/js/snippets'
import { askualabs_controller } from '../../askualabs_core/js/controllers'
import { askualabs_periodicTable } from '../../askualabs_core/js/periodicTable'
import { askualabs_brand } from '../../askualabs_core/js/brand'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }
  preloadElement(x){
    for (var i = 0; i < x.length; i++) {
      this.game.load.image(x[i].Symbol, './assets/images/'+x[i].Symbol+'.png')
    }
  }
  preload () {
    this.loadinTxt = game.add.text(game.world.centerX,game.world.centerY+66,'Loading...',{font:'12px Arial'});
    this.loadinTxt.anchor.setTo(.5);
    this.iconLogo = game.add.sprite(game.world.centerX,game.world.centerY-34,'icon');
    this.iconLogo.anchor.setTo(.5);
    this.preloadBar = this.add.sprite(game.world.centerX, game.world.centerY+100, 'preloaderBar');
    this.preloadBar.anchor.setTo(.5);
    this.load.setPreloadSprite(this.preloadBar);
    // menu assets
    game.load.image('menuHover','./assets/images/moveMenu.png')
    game.load.image('chall300','./assets/images/chall300x300.png')
    game.load.image('sim300','./assets/images/sim300x300.png')
    //simuallation assets
    askualabs_controller.preload();
    askualabs_brand.preload();
    //my assets
    let element = askualabs_periodicTable.element;
    this.preloadElement(element);
    this.game.load.image('Background', './assets/images/Background.png');
    this.game.load.image('PPP', './assets/images/Period.png')
    this.game.load.image('p1', './assets/images/place1.png')
    this.game.load.image('p2', './assets/images/place2.png')
    this.game.load.image('pluss', './assets/images/pluss.png')
    this.game.load.image('equalto', './assets/images/equalto.png')
    this.game.load.image('p3', './assets/images/place3.png')
    /*
    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    //let me =new askual_periodicTable();
    //console.log(me);
    let element = askual_periodicTable.searchByAtomicNumber(6);
    console.log(element);
    */
    /*for (var i = 0; i < 118; i++) {
      eval("this.game.load.image('"+elements[i].symbol+"', './assets/elements/"+elements[i].symbol+".png')")
    }
    */
  }
  create () {
    //this.game.add.sprite(0, 130, 'loaderBar');
    askualabs_brand.create();
    this.preloadBar.cropEnabled = false;
    this.preloadBar.destroy();
    this.iconLogo.destroy();
    this.loadinTxt.destroy();

    var box = function(options){
            var bmd = game.add.bitmapData(options.length,options.width);
            bmd.ctx.beginPath();
            bmd.ctx.rect(8,8,options.length,options.width);
            bmd.ctx.fillStyle = options.color;
            bmd.ctx.fill();
            return bmd;
    };

    //game.add.sprite(300,300,'challMenu');
    var style = { font: "32px Arial", fill: "#233740" },
        styleDev = { font: "12px Arial", fill: "#fff" };
    this.hvrMenu = game.add.sprite(game.world.centerX-425,145,'menuHover');
    this.simBtn = game.add.button(game.world.centerX-400,170,'sim300',this.gotoSim);
    this.challBtn = game.add.button(game.world.centerX+50,170,'chall300',this.gotoChall);

    this.simBtn.onInputOver.add(this.hoverSim,this);
    this.challBtn.onInputOver.add(this.hoverChall,this);

    this.txtSim = game.add.text(game.world.centerX-400,110,'Simulation',style);
    this.txtChall = game.add.text(game.world.centerX+50,110,'Challenge',style);

     this.devTab = game.add.sprite(-5,game.world.height-45,box({length:game.world.width+5,width:45,color:"#233740"}))

     this.devText = game.add.text(game.world.width-300,game.world.height-30,'Simulation Developed By - Askualabs',styleDev);
  }
  gotoSim(){
      game.state.start('Sim');
  }
  gotoChall(){
    game.state.start('Game');
  }
  hoverChall(){
      var cx = game.world.centerX+25;
     game.add.tween(this.hvrMenu).to( { x: cx }, 1400, Phaser.Easing.Bounce.Out,true,0,0,false);
  }
  hoverSim(){
     var cx = game.world.centerX-425;
     game.add.tween(this.hvrMenu).to( { x: cx }, 1400, Phaser.Easing.Bounce.Out,true,0,0,false);
  }

}
