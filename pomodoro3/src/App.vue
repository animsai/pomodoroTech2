<template>
  <div id="app">
    <h2>Pomodoro</h2>
    <controls-component></controls-component>
    <pomodoro-state-component></pomodoro-state-component>
      <hr/>
      <countdown-component></countdown-component>
    <transition name="fade">
    <kittens-component></kittens-component>
    </transition>
    </div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import PomodoroStateComponent from './components/PomodoroStateComponent'
import KittensComponent from './components/KittensComponent'


window.data = {
    isworking: true

}

export default {
  name: 'app',
  components: {
      ControlsComponent,
      CountdownComponent,
      PomodoroStateComponent,
      KittensComponent
  },
    data () {
        return window.data
    }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
