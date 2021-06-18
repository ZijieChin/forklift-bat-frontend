<template>
  <div id="loader-container">
    <p id="loadingText">Loading</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800,200);
body {
  background-color: #1e88e5;
}

#loader-container {
  width: 200px;
  height: 200px;
  color: white;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border: 5px solid #1e88e5;
  border-radius: 50%;
  -webkit-animation: borderScale 1s infinite ease-in-out;
  animation: borderScale 1s infinite ease-in-out;
}

#loadingText {
  font-family: "Raleway", sans-serif;
  font-weight: normal;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  color: #1e88e5;
}

@-webkit-keyframes borderScale {
  0% {
    border: 5px solid white;
  }
  50% {
    border: 25px solid #1e88e5;
  }
  100% {
    border: 5px solid white;
  }
}

@keyframes borderScale {
  0% {
    border: 5px solid white;
  }
  50% {
    border: 25px solid #3498db;
  }
  100% {
    border: 5px solid white;
  }
}
</style>
