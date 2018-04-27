<template>
  <div>
    <Square 
      v-for="(marker, index) in board" 
      :marker="marker"
      :checked="marker !== ''"
      @click.native="setMarker(index)"
    />
  </div>
</template>

<script>
import winConditions from './winning-states.js'
import isEqual from 'lodash/isEqual'

import Square from './Square'
  export default {
    name: 'Board',

    components: {
      Square,
    },
    
    created() {
      console.log(winConditions)
    },
    data() {
      return {
        board: this.makeBoard(),
        currentMarker: 'x'
      }
    },

    methods: {
      setMarker(index) {
        if (this.currentMarker === 'x') {
          this.board = this.board.map((x, i) => 
            i === index ? this.currentMarker : x)
        } else {
          this.board = this.board.map((x, i) => 
            i === index ? this.currentMarker : x)
        }

        const currentState = this.convertBoardToBinary()
        const check = this.checkForVictory(winConditions, currentState)
        console.log('win?', check)

        this.currentMarker = this.currentMarker === 'x' ? 'o' : 'x'
      },

      checkForVictory(winConditions, currentStateInBinary) {
        for (let i = 0; i < winConditions.length; i++) {
          console.log('con', winConditions[i])
          if (isEqual(winConditions[i], currentStateInBinary)) {
            return true
          }
        }
        return false
      },

      convertBoardToBinary() {
        return this.board.map(
          val => val === this.currentMarker ? 1 : 0
        )
      },

      makeBoard() {
        return new Array(4).fill('')
      }
    }
  }
</script>

<style scoped>
</style>
