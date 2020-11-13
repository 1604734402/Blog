<template>
  <div id="ulli">
    <ul id="ulul">
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
      <li class="lili"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ulli"
  }
</script>

<style scoped>
  #ulli {
    padding-top: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  #ulul, ol {
    list-style: none;
  }

  #ulul {
    display: flex;
    height: 200px;
  }

  .lili {
    height: 20px;
    width: 20px;
    background: red;
    border-radius: 10px;
    margin-right: 20px;
  }

  .lili:nth-child(1) {
    background: red;
    animation: love1 4s 0s infinite;
  }

  .lili:nth-child(2) {
    background: darkturquoise;
    animation: love2 4s 0.2s infinite;
  }

  .lili:nth-child(3) {
    background: darksalmon;
    animation: love3 4s 0.4s infinite;
  }

  .lili:nth-child(4) {
    background: deeppink;
    animation: love4 4s 0.6s infinite;
  }

  .lili:nth-child(5) {
    background: yellow;
    animation: love5 4s 0.8s infinite;
  }

  .lili:nth-child(6) {
    background: deeppink;
    animation: love4 4s 1s infinite;
  }

  .lili:nth-child(7) {
    background: darksalmon;
    animation: love3 4s 1.2s infinite;
  }

  .lili:nth-child(8) {
    background: darkturquoise;
    animation: love2 4s 1.4s infinite;
  }

  .lili:nth-child(9) {
    background: red;
    animation: love1 4s 1.6s infinite;
  }

  @keyframes love1 {
    30%, 50% {
      height: 60px;
      transform: translateY(-30px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0px);
    }
  }

  @keyframes love2 {
    30%, 50% {
      height: 125px;
      transform: translateY(-60px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0px);
    }
  }

  @keyframes love3 {
    30%, 50% {
      height: 160px;
      transform: translateY(-75px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0px);
    }
  }

  @keyframes love4 {
    30%, 50% {
      height: 180px;
      transform: translateY(-60px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0px);
    }
  }

  @keyframes love5 {
    30%, 50% {
      height: 200px;
      transform: translateY(-45px);
    }
    70%, 100% {
      height: 20px;
      transform: translateY(0px);
    }
  }
</style>
