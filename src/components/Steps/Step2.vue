<template>
    <div>
        <h3 class="head-title">{{ $t('question_2.text') }}</h3>
      <button 
        v-if="btn"
        @click="cirk = true; btn = false"
        class="button-circle">
        {{ $t('start')}}
      </button>
     <circular-count-down-timer
        v-if="cirk"
        class="counter"
        :initial-value="20"
        :stroke-width="3"
        :seconds-stroke-color="'#08ae4f'"
        :underneath-stroke-color="'lightgrey'"
        :seconds-fill-color="'transparent'"
        :size="150"
        :padding="1"
        :hour-label="'hours'"
        :minute-label="'minutes'"
        :second-label="$t('question_2.second') "
        :show-second="true"
        :show-minute="false"
        :show-hour="false"
        :show-negatives="false"
        @finish="finished"
        :paused="finish"
        :notify-every="'minute'">       
     </circular-count-down-timer>


     <div v-if="finish" class="content">
         <b-form-group>
           <b-form-group>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="0">
                   {{ $t('question_2.answer_1') }}
              </b-form-radio>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="1">
                  {{ $t('question_2.answer_2') }}
              </b-form-radio>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="2">
                   {{ $t('question_2.answer_3') }}
              </b-form-radio>
           </b-form-group>
        </b-form-group>

        <btn 
          :isDisabled="isDisabled"
          @click.native="$emit('next', {num : 'third', value : selected})" />
     </div>
    </div>
</template>

<script>
import Btn from "./Inputs/Btn"
export default {
     components : {
        Btn
    },
    data : () => ({
        finish : false,
        selected: '',
        cirk : false,
        btn : true
    }) ,
   methods : {
       finished(){
         this.finish = true
       }
   },
   computed: {
        isDisabled(){
            return !this.selected
        }
    }
}
 
</script>

<style lang="scss" scoped>
  .button-circle{
    height: 125px;
    width: 125px;
    border: none;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: 3px solid  #08ae4f;
    background: transparent;
    color: #08ae4f;
    margin: 0 auto;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    outline: none;
  }
</style>
