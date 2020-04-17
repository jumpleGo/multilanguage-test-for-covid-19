<template>
    <div class="nav">
        <div class="images">
            <img class="who" src="/images/logo-who.png" alt="">
            <img v-if="country === 'RU'" class="ru_logo" src="/images/logo_rus.svg" alt="">
        </div>
    
    <span class="location">
    <img class="map" src="/images/gps.svg" alt="">
      {{ location }}
    </span>  
    <multiselect 
        class="multiselect"
        v-model="value" 
        :options="options"
        select-label=""
        deselect-group-label=""
        deselect-label=""
        selected-label=""
        tag-placeholder=""
        :searchable="false"
        :placeholder="$t('select') "
        @input="select()">
      </multiselect>

      
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { i18n } from "./../main"
import Multiselect from 'vue-multiselect'
export default {
    components: { Multiselect },
    data(){
      return{
        value: null,
        options: ['RU', 'EN', 'ES', 'IT', 'CN']
      }
    },
    computed: {
      ...mapGetters({
        location : 'location',
        country : 'country'
      })
    },
    
    methods: {
      select(){
       i18n.locale = this.value
      }
    },
    mounted(){
      i18n.locale = this.country
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.nav{
    padding-left: 10px;
    padding-right: 10px;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(187, 208, 240, 0.308);
    padding-bottom: 20px;
}
.quiz{
  display: flex;
  flex-direction: column;
}
.multiselect{
  width: 80px;
  margin-top: 5px;
}
.ru_logo{
  margin-left: 5px;
}
.multiselect__tags{
  padding: 8px 30px 0 8px;
  font-size: 14px;
}
.images{
    width: 140px;
    .who{
      width: 100%
    }
    img{
      width: 100%
    }
}
.location{
    color: #08ae4f;
    display:flex;
    align-items: center;
    font-weight: 600;
    margin-top: 15px;

    .map{
        height: 20px;
        color: #08ae4f;
       
    }
}

</style>