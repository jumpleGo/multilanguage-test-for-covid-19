<template>
    <div class="text">
        <p class="policy">
          {{ $t('license')}}
       </p>
       <router-link class="link" to="/policy/">{{ $t('policy') }}</router-link>
       <button @click="gotIt()" class="button">
           {{ $t('ok') }}
       </button>
    </div>
</template>

<style lang="scss" scoped>
  .text{
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #3f4157;
      align-items: center;
      
      .policy{
          text-align: left;
          font-size: 12px;
          color: white;
      }
      .link{
          display: block;
          font-size: 14px;
      }
      .button{
          text-transform: uppercase;
          background: transparent;
          font-size: 12px;
          color: white;
          border: 2px solid white;
          margin-top: 15px;
          padding: 5px 10px;
      }
  }
    
</style>

<script>
export default {
    name : 'License',
    methods : {
        gotIt(){
            this.$store.dispatch('TO_COOKIES')
        }
    },
}
</script>