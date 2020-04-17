<template>
  <div class="quiz">
    
    <p class="main-text" v-html="$t('text')"></p>
    <div class="button-wrapper">
    <button 
      @click="$router.push({name : 'pay'})"
      class="button-text"> 
      {{ $t("button" ) }} 
    </button>

    </div>
     <div class="links">
        <router-link class="link" to="/policy/">{{ $t('policy') }}</router-link>
        <router-link class="link" to="/contacts/">{{ $t('contacts') }}</router-link>
     </div>
  </div>
</template>

<script>


export default {
  name: 'MainComponent',
  mounted(){
    window.$cookies.remove('result')
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.quiz{
  min-height: 70vh;
  background-image: url('/images/covid-19.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 720px) and (max-width: 1920px){
    height: 80vh;
  }
}

.button-wrapper{
  width: 100%;
  display:flex;
  justify-content: center;

}
.button-text{
  width: auto;
  background: #08ae4f;
  color: white;
  padding: 10px 30px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
  box-shadow: 0px 3px 10px -1px rgba(91, 185, 123, 0.75);
  &:hover{
    box-shadow: 0px 3px 10px 0px rgba(54, 119, 76, 0.75);
    cursor: pointer;
  }

}

.main-text{
  font-size: 24px;
  padding: 20px 40px;
  line-height: 1.12;
}
.links{
  position: absolute;
  bottom: 0;
  display: flex;
}
.link{
  
  font-size: 10px;
  &:nth-child(2){
    margin-left: 15px;
  }
}
</style>
