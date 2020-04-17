<template>
    <div>  
       <h3 class="head-title">{{ $t('question_4.text') }}</h3>
       <b-form-group>
           <b-form-group>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="0">
                   {{ $t('question_4.answer_1') }}
              </b-form-radio>
              <b-form-radio 
                class="select" 
                v-model="selected" 
                value="0.5">
                   {{ $t('question_4.answer_2') }}
              </b-form-radio>
           </b-form-group>
        </b-form-group>
        <btn 
          :isDisabled="isDisabled"
          @click.native="$emit('next', {num : 'fifth', value : selected})" />
    </div>
</template>

<script>
import Btn from "./Inputs/Btn"
export default {
    name : "Step1",
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

