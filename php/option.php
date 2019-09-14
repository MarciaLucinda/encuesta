<?php
include('conn.php');
$option='<option value="">Selecciona </option>';

$sql = " SELECT * FROM profesiones";
if (!$resultado = $mysqli ->query($sql)) {
    
    echo "Lo sentimos, este sitio web está experimentando problemas.";

    echo "Error: La ejecución de la consulta falló debido a: \n";
    echo "Query: " . $sql . "\n";
    echo "Errno: " . $mysqli->errno . "\n";
    echo "Error: " . $mysqli->error . "\n";
    exit;
}

while ($actor = $resultado->fetch_assoc()) {
  

    $option.='<option value="'.$actor['idprof'].'">'.utf8_encode($actor['prof']).'</option>';

}
echo $option;
?>