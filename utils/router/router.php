<?php

//Si llega un cors, hago magia
//Probablemente sea necesario agregar mas headers a futuro
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header, access-control-allow-origin');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

//Seteo un handler para que sea lindo el mensaje de error
set_error_handler(
    function ($err_severity, $err_msg, $err_file, $err_line, array $err_context) {
      // do not throw an exception if the @-operator is used (suppress)
      if (error_reporting() === 0) return false;
  
      throw new ErrorException( $err_msg, 0, $err_severity, $err_file, $err_line );
    },
    E_WARNING
  );


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//Preparo la url que voy a ejecutar
//$url = 'http://ubclinicavirtual.000webhostapp.com/api/v1/login3';
$url = $_REQUEST['url'];

$headers = '';
foreach (getallheaders() as $header => $value)
    if( strtolower($header) == "accept-encoding")
    {
        
    }
    else if( $header != "Host")
        $headers.= "${header}: ${value}\r\n";
    else
        $headers.= "${header}: ".parse_url($url)['host']."\r\n";

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header' => $headers,
        'method' => $_SERVER['REQUEST_METHOD'],
        'content' => file_get_contents('php://input')
    )
);

//Hago la conexion con el server
$context  = stream_context_create($options);

try {
    $result = file_get_contents($url, false, $context);
} catch (Exception $e) {
    echo $e->getMessage();
    return;
}

echo $result;