<template>
  <div class="container">

      <span class="title">
        Front-End Coding Challenge
      </span>

      <div class="box">
       <a href="https://github.com/login/oauth/authorize/?client_id=0b4c30e2607568994db1"> Authorize my Github Account </a>
      </div>

      <div id="test">
         {{info}}
      </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  
  data() {
    return {
      info: null
    }
    },
  
  methods : {
    login() {
     let code = window.location.href;
     console.log(code);
    }
  }
}

</script>


<style>

 .container {
  height:100vh;
  min-width: 100vw;
  font-family: 'Poppins', sans-serif;
  background-color:#95389E;
  }


.title {
  font-size: 30px;
  width: 100vw;
  text-align: center;
  display: block;
  font-weight: 600;
  padding-top: 50px;
  color: #fff;

}

.box {
  width:30%;
  height: 65px;
  background-color: rgb(240, 217, 255, 0.2);
  margin-top: 15%;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
}

.box a {
  color: #FBFBFB;
  opacity: .8;
  text-align: center;
  align-self: center;
  text-decoration: none;
}
.box a:hover {
  color: black;
  cursor: pointer;
}

.box:hover {
  background-color: rgb(240, 217, 255, 0.5);
  cursor: pointer;
}

@media (max-width: 1200px) { 
  .left{
    height:50%
  }
  .right{
    height:50%
  }
}

</style>
