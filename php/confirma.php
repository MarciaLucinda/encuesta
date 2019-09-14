<?php
 include('conn.php');
 $codif=$_GET['co'];
 $resultado_s=0;

	$sql = " SELECT * FROM datos where codigoconfirm='".$codif."'";
	if (!$resultado = $mysqli ->query($sql)) {
    
    echo "Lo sentimos, intentelo de nuevo.";
    /*
    echo "Error: La ejecución de la consulta falló debido a: \n";
    echo "Query: " . $sql . "\n";
    echo "Errno: " . $mysqli->errno . "\n";
    echo "Error: " . $mysqli->error . "\n";
    */
    exit;
}

while ($ac = $resultado->fetch_assoc()) {
		     $confirmado=$ac['confirmo'];

		     if($confirmado==1){

		     	 echo "Este E-mail ya ha sido confirmado";

		     }else{
		     	$update=" UPDATE datos SET confirmo=1 where codigoconfirm='".$codif."'";

		     	 if ($mysqli->query($update) === TRUE) {
					    echo "E-mail confirmado de manera correcta ";
					} else {
					    echo "Error al confirmar E-mail: " . $mysqli->error;
					}


		     }
  

}

?>