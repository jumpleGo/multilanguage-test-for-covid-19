<template>
    <div class="pay"> 
        <p class="message">{{ $t('result') }}</p>       
<form method="post"  action="https://test-covid-19.gq/order.php">
<input type="hidden" name="amount" :value="summ">
<input type="hidden" name="currency" :value="currency">
<input type="hidden" name="orderId" value="1">
<input type="hidden" name="urlResult" value="https://test-covid-19.gq/impact.php">
<input type="hidden" name="paymentSystem" value="Card">
<input type="hidden" name="urlSuccess" value="https://test-covid-19.gq/quiz">
<input type="hidden" name="urlFail" value="https://test-covid-19.gq/">
<input type="submit" id="submit" class="pay-btn" :value="$t('pay')">
</form>
    </div>
</template>
<script>
import  {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters({
            summ : 'summ',
            currency : 'currency'
        })
    },   
   
}
</script>
<style lang="scss" scoped>
    .pay{
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
    .pay-btn{
    margin-top: 80px;
    width: 100%;
    background: #086cae;
    color: white;
    padding: 10px 30px;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    transition: all 0.3s;
    box-shadow: 0px 3px 10px -1px rgba(18, 28, 117, 0.75);

    &:hover {
        box-shadow: 0px 3px 10px 0px rgba(34, 40, 97, 0.75);
        cursor: pointer;
    }
    }
    .message{
        font-size: 16px;
        font-weight: normal;
    }
</style>