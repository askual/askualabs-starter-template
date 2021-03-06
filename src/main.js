import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SimulationState from './states/Sim'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

import askual_periodicTable from '../askualabs_core/js/periodicTable'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = window.innerWidth
    const height = window.innerHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Sim', SimulationState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
