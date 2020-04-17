<template>
    <div class="quiz">
      <b-progress class="progress" :value="value" :max="9" :show-progress="false" animated></b-progress>
        <body-question
        v-if="state === 'body'"
        @next="changeState($event); progress()" />
        <step1 
        v-if="state === 'first'"
        @next="changeState($event); progress()" />
        <step2 
          v-if="state === 'second'"
          @next="changeState($event); progress()"/>
        <step3 
           v-if="state === 'third'"
           @next="changeState($event); progress()"/>
        <step4 
          v-if="state === 'fourth'"
          @next="changeState($event); progress()" />
        <step5 
          v-if="state === 'fifth'"
          @next="changeState($event); progress()" />
        <step6 
           v-if="state === 'sixth'"
          @next="changeState($event); progress()"/>
        <step7  
         v-if="state === 'seventh'"
         @next="changeState($event); progress()"/>
         
        <step8  
          v-if="state === 'eight'" 
          @next="changeState($event);  end(); progress()"/>

        <final 
          :result="result" 
          v-if="state === 'final'"/>

    </div>
</template>



<script>
import BodyQuestion from './BodyQuestion'
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import Step8 from "./Step8"
import Final from "./Final"

export default {
    name : "Index",
    components : {
        BodyQuestion,
        Step1,
        Step2,
        Step3,
        Step4,
        Step5,
        Step6,
        Step7,
        Step8,
        Final
    },
    data: () => ({
        state : "body",
        level : '',
        result : 0,
        percent : 0,
        value: 1,
    }),
    methods : {
        progress() {
          this.value += 1
        },
        changeState(data){
           this.state = data.num;
           this.result += +data.value
        },
        end(){
            this.percent = this.result * 100 / 12.2;
            window.$cookies.set('result', this.percent);
            // this.$router.push({name : 'pay',})
            this.$router.push({name : 'result',})
        }
    }
}
</script>

<style lang="scss" scoped>
.quiz{
    padding: 20px;
}
.progress{
  margin-bottom: 15px;
}
    
</style>