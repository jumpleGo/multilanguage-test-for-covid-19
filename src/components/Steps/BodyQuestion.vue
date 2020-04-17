<template>
    <div>  
       <h3 class="head-title">{{ $t('question_body.text') }}</h3>
       <b-form-group class="group">
           <b-form-group>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="0">
                 <img class="image" src="/images/1.jpg" alt="">
              </b-form-radio>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="1">
                  <img  class="image" src="/images/2.jpg" alt="">
              </b-form-radio>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="2">
                 <img  class="image" src="/images/3.jpg" alt="">
              </b-form-radio>
           </b-form-group>
        </b-form-group>
        <btn 
          :isDisabled="isDisabled"
          @click.native="$emit('next', {num : 'first', value : 0})" />
    </div>
</template>

<script>
import Btn from "./Inputs/Btn"
export default {
    name : "BodyQuestion",
    components : {
        Btn
    },

    data : () => ({
        selected: '',
    }),
    computed: {
        isDisabled(){
            return !this.selected
        }
    }
}
</script>

<style lang="scss" scoped>
    .image{
        height: 80px;
    }
    .select{
        display: flex;
        flex-direction: column;
    }
</style>

