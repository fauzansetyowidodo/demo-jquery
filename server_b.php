<?php
$inputText = $_POST['text'];
$inputNumber = $_POST['number'];

$response = array();
for ($i = 0; $i < $inputNumber; $i++) {
  $response[$i] = $inputText . ' ' . $i;
}

header('Content-Type: application/json');
echo json_encode($response);
?>
