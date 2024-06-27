<?php
require_once('_config.php');

// phpinfo();

$GLOBALS["viewables"]["head_title"] = "Homepage";
$GLOBALS["viewables"]["route"] = "homepage";

$name = $_POST["myName"] ?? null;
$GLOBALS["viewables"]["h1"] = \Samplephp\Message::hello($name);
require_view('layout/layout');