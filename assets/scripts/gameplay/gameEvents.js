'use strict'
// required files
const getFormFields = require('../../../lib/get-form-fields.js')
const gameApi = require('./gameApi.js')
const gameLogic = require('./gameLogic.js')
const gameUi = require('./gameUi.js')
//
let logicCheck = function (event) {
  let i = event.target.id.slice(0, 1)
  if ((gameLogic.gameBoard[i] === undefined) && (gameLogic.current.gameOver === false)) {
    gameLogic.updateBoard(i, gameLogic.current.player)
    gameUi.validMove(event.target, gameLogic.current.player)
    gameLogic.winConditions()
      if (gameLogic.current.gameOver === false) {
        gameLogic.current.changePlayer()
      } else if (gameLogic.current.gameOver === true) {
        gameUi.declareWinner(gameLogic.current.player)
       }
    } else if (gameLogic.current.gameOver === false) {
    gameUi.invalidMove()
  } else if (gameLogic.current.gameOver === true) {
    gameUi.promptNew(gameLogic.current.player)
  }
}
//
const onAllGames = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.onIndexSuccess)
    .catch(gameUi.onApiFail)
}
//
const onOneGame = function () {}
//
const onNewGame = function () {
  // event.preventDefault()
  // const data = getFormFields(event.target)
  //   .then(gameLogic.newGame)
  // api.startGame(data)
  //     .then(ui.startSuccess)
  //     .catch(ui.startFailure)
  //   .catch(ui.startFailure)
}
//
const onPatchGame = function () {}
//
let gameplayHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('#0box').on('click', logicCheck)
  $('#1box').on('click', logicCheck)
  $('#2box').on('click', logicCheck)
  $('#3box').on('click', logicCheck)
  $('#4box').on('click', logicCheck)
  $('#5box').on('click', logicCheck)
  $('#6box').on('click', logicCheck)
  $('#7box').on('click', logicCheck)
  $('#8box').on('click', logicCheck)
}
//
let userHandlers = function () {
  $('#games-index').on('click', onAllGames)
}
//
module.exports = {
  gameplayHandlers,
  userHandlers
}
