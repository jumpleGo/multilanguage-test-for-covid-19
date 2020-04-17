<?php 

  $amount = $_REQUEST['amount'];
  $currency  = $_REQUEST['currency'];

  if($amount && $currency){
      return $amount;
      
  };
?>

<script>
  
  setTimeout(() => {
        location.href = 'https://test-covid-19.ml/success';
    }, 1000);
  
</script>