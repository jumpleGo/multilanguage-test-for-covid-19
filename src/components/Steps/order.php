<?php 
    $public = 'a88df6319ec077ae028e68f4f31910fc'; // api key
    $secret = 'aef174cee83d155ce17ae222f3ee0a0a'; // api sercet
    $data = array(
     'amount' => $_REQUEST['amount'],
     'currency' => $_REQUEST['currency'],
     'orderId' => $_REQUEST['orderId'],
     'urlResult' => $_REQUEST['urlResult'],
     'urlSuccess' => $_REQUEST['urlSuccess'],
     'urlFail' => $_REQUEST['urlFail'],
     'paymentSystem' => $_REQUEST['paymentSystem']
    );
    $method = 'payment';
    $data['token'] = $public;

    $data['sign'] = md5(implode('', $data) . $secret);
 
    $url = 'https://merchant.betatransfer.io/api/' . $method . '?' . http_build_query($data);

     $ch = curl_init();
     curl_setopt($ch, CURLOPT_URL, $url);
     curl_setopt($ch,CURLOPT_USERAGENT, 'Betatransfer');
     curl_setopt($ch, CURLOPT_HEADER, 0);
     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
     curl_setopt($ch, CURLOPT_TIMEOUT, 30);
     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
     curl_setopt($ch, CURLOPT_POST, true);
     curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
     $response = curl_exec($ch);
     curl_close($ch);
     $new_url = (json_decode($response, true));
     
?>

<script>

    setTimeout(() => {
        location.href = '<?php echo $new_url['url'] ?>';
    }, 1000);
  
    </script>



