<template>
    <button
       class="next-button"
       :disabled="isDisabled">
        {{ $t('button_next') }}
    </button>
</template>

<script>
export default {
    props: {
        isDisabled: {
            required: true,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .next-button{
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
        &:disabled{
            background: #90f7a1ad;
        }

    }
</style>