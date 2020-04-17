<template>
<div class="content">
    <p class="text">{{ $t('final.text') }}</p>
    <span class="percent">{{ result }} %</span>
    <div class="share">
        {{ $t('final.friends') }}
    </div>
    <div class="copy">
        <input type="text" v-model="message" disabled>
        <button class="copy-btn" type="button" v-clipboard:copy="message">
            <img class="copy-img" src="/images/copy.png" alt="">
        </button>
    </div>
    <button @click="$router.push({name : 'main'})" class="button-text">
        {{ $t("button_end" ) }}
    </button>
</div>
</template>

<script>
export default {
    data: () => ({
        message: 'https://test-covid-19.gq'
    }),

    methods: {
        show(group, type) {
            this.$notify({
                group,
                title: `Ссылка скопирована`,
                type
            })
        },
    },
    computed : {
        result(){
            let percent = window.$cookies.get('result');
            return parseFloat(percent).toFixed(2)
        }
    }

}
</script>

<style lang="scss" scoped>
.button-text {
    margin-top: 80px;
    width: 100%;
    background: #086cae;
    color: white;
    padding: 10px 30px;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;
    box-shadow: 0px 3px 10px -1px rgba(91, 185, 123, 0.75);

    &:hover {
        box-shadow: 0px 3px 10px 0px rgba(54, 119, 76, 0.75);
        cursor: pointer;
    }

}

.content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text {
    font-weight: 500;
    font-size: 23px;
    line-height: 20px;
    text-align: center;
}

.percent {
    font-size: 30px;
    background: url('/images/corona.png');
    background-size: cover;
    background-position: center;
    height: 180px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.share {
    margin-top: 30px;
}

.copy {
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        border: none;
        padding: 3px 5px;
        background: rgba(0, 0, 0, 0.034);
        height: 30px;
    }

    &-btn {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        height: 30px;

        .copy-img {
            width: 15px;
            height: auto;
        }
    }

}
</style>
