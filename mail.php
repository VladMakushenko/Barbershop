<?php

$recepient = "vlad.is74.ru@mail.ru";
$sitename = "Salon";

$name = trim($_POST["Имя"]);
$phone = trim($_POST["Телефон"]);
$service = trim($_POST["Услуга"]);
$message = "Имя: $name \Телефон: $phone \nУслуга: $service";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");

