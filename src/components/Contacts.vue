<template>
<div class="contacts">
    <p>mail : rrotatew@gmail.com</p>
    <button @click="$router.push({name : 'main'})" class="button-text">
        {{ $t("button_end" ) }}
    </button>
</div>
</template>

<script>
export default {
    name: "Contacts"
}
</script>

<style lang="scss" scoped>
.contacts {
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
}

.button-text {
    margin-top: 80px;
    width: 100%;
    bottom: 0;
    background: #086cae;
    color: white;
    padding: 10px 30px;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;
    box-shadow: 0px 3px 10px -1px rgba(91, 97, 185, 0.75);

    &:hover {
        box-shadow: 0px 3px 10px 0px rgba(54, 119, 76, 0.75);
        cursor: pointer;
    }

}
</style>
