import Phaser from 'phaser'
import WebFont from 'webfontloader'

import { askual_periodicTable } from '../../askualabs_core/js/periodicTable'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
  }

  preload () {

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    //let me =new askual_periodicTable();
    //console.log(me);
    let element = askual_periodicTable.searchByAtomicNumber(6);
    console.log(element);
    /*for (var i = 0; i < 118; i++) {
      eval("this.game.load.image('"+elements[i].symbol+"', './assets/elements/"+elements[i].symbol+".png')")
    }
    */
  }

}
