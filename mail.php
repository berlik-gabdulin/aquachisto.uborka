<?php
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$c = true;
$admin_email = 'aqua.chisto@mail.ru';
$name = trim($_POST["name"]);
$phone  = trim($_POST["phone"]);
$message  = trim($_POST["message"]);
$order  = trim($_POST["order"]);
$summary  = trim($_POST["summary"]);
$form_subject = 'Заказ с сайта Aqua-чисто Мебель';
$message = "Новая заявка с сайта<br><b>Аква-чисто</b><br><b>Клиент</b>: " . $name . "<br><b>Телефон</b>: " . $phone . "<br><b>Примечание:</b>" . $message . "<br><b>Заказ:</b><br>" . $order . "<br><b>Итого: </b>" . $summary;
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <info@aquachisto.kz>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
// mail($admin_email, adopt($form_subject), $message, $headers );
mail($admin_email, adopt($form_subject), $message, $headers );