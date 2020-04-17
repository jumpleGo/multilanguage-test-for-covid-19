<template>
    <input 
      :type="type" 
      :placeholder="placeholder"
      v-model="model"
      @blur="(val) => $emit('blur', val)">
</template>

<script>
export default {
    name : "Input",
    props: {
        type: {
            type : String,
            default : 'text',
            required : true
        },
        placeholder : {
            type : String,
            required: true
        },
        model : {
            required: true,
            default: null
        }


    }
}
</script>

<style lang="scss" scoped>
    
</style>