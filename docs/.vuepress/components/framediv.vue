<template>
  <div id="app">
    <div class="content">
      <div>123465</div>
    </div>
    <div class="fluorescence fluorescence-filter" :style="{background:background}"></div>
    <div class="fluorescence fluorescence-border" :style="{background:background}"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        angle: 235, background: "linear-gradient(235deg,#89ff00,#060c21,#00bcd4)",
        timer: 0
      }
    }
    ,
    methods: {
      rotate() {
        var that = this
        if (this.timer != 0) {
          clearInterval(this.timer)
          this.timer = 0
        }
        this.timer = setInterval(function () {
          that.angle++;
          that.background = "linear-gradient(" + that.angle + "deg,#89ff00,#060c21,#00bcd4)";
          if (that.angle == 595) {
            that.angle = 235
          }
        }, 50)
      }
    },
    created() {
      this.rotate();
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #130f40;
  }
  #app {
    width: 500px;
    height: 100px;
    margin: 50px auto;
    background-color: #130F40;
    color: #fff;
    text-align: center;
    /* border: 1px solid; */
    position: relative;
  }
  #app .content h2 {
    padding-top: 50px;
  }
  #app .content p {
    padding-top: 30px;
  }
  #app .fluorescence {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
  }
  #app .fluorescence-filter {
    z-index: -1;
  }
  #app .fluorescence-border {
    z-index: -2;
    filter: blur(40px);
  }
</style>
