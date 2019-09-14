// JavaScript Document

function opciones(){

	  //codigo select
	  var parametros={
	  	"uno" : "uno"
	  }

	  	$.ajax({

                url:'../php/option.php',
                type:'POST',
                data:parametros,
                cache: false,
                beforeSend: function(){                                          

                }, 
                success: function(data, textStatus, jqXHR){ 
                   $("#ar").html(data);
                                                                                                                                                                         
                                                                                      
                 },
                 error: function(data, textStatus, jqXHR){
                     //$("#areaentrega_u").html('error');
                 }

        });
	  //fin de codigo select

}

function Validar(){

	  $("#result_d").removeClass('alert alert-danger'); 

	  $("#result_d").html('');



	 var ed=$("#ed").val();
	 var em=$("#em").val();
	 var sx=$("#sx").val();
	 var ar=$("#ar").val();
	 var po=$.trim($("#po").val());
	 var ne=$.trim($("#ne").val());
	 var cu=$.trim($("#cu").val());
	 var num_po=po.length;
	 var num_ne=ne.length;
	 var num_cu=cu.length;
	 var menj="";


	  if(ed==""){
	  	  menj+='<strong> Se requiere  seleccionar la Edad. </strong> <br/>'; 
	  }
	  if(em==""){
	  	  menj+='<strong> Se requiere  Escribir el E-mail. </strong> <br/>'; 
	  }else{

	  	 if($("#em").val().indexOf('@', 0) =='-1'  || $("#em").val().indexOf('.', 0) == '-1') {

                  menj+=' <strong> El email introducido no es correcto.</strong> <br/>';                          
           }

	  }

	  if(sx==""){
	  	  menj+='<strong> Se requiere  seleccionar el Sexo . </strong> <br/>'; 
	  }

    if(ar==""){
        menj+='<strong> Se requiere  seleccionar El area. </strong> <br/>'; 
    }

	  if(po=="" && num_po <= 0){
            menj+=' <strong> Se requiere que explique el porque.</strong>  <br/> ';
        }

         if(ne=="" && num_ne <= 0){
            menj+='<strong> Se requiere que escriba Que necesidad personal o de trabajo suplirias con una app. </strong> <br/> ';
        }
         if(cu=="" && num_cu <= 0){
             menj+='<strong> Se requiere que escribir como mejorarías la sociedad con una app.</strong>  <br/> ';
        }


		        if(menj==""){
		        	var parametros_g={
		        		"ed" : ed,
		        		"em" : em,
		        		"sx" : sx,
		        		"ar" : ar,
		        		"po" : po,
		        		"ne" : ne,
		        		"cu" : cu


		        	}




		        																 $.ajax({

                                                                                    url:'../php/inerta.php',
                                                                                    type:'POST',
                                                                                    data:parametros_g,
                                                                                    cache: false,
                                                                                    beforeSend: function(){                                          

                                                                                    }, 
                                                                                    success: function(data, textStatus, jqXHR){ 
                                                                                    	//alert(data);
                                                                                       //$("#result_d").html(data);
                                                                                      //alert(data); 
                                                                                       var content = JSON.parse(data);
                               										                   var resp=content.respuesta; 
                               										                   var mens=content.mensaje;

                               										                    if(content.respuesta==1 || content.respuesta=='1'){ 
                               										                    	$("#result_d").html(content.mensaje);
                               										                    	$("#env").hide();
                               										                    }else{
                               										                    	$("#result_d").html(content.mensaje);

                               										                    }
                                                                                  
                                                                                      
                                                                                    },
                                                                                    error: function(data, textStatus, jqXHR){
                                                                                      //$("#areaentrega_u").html('error');
                                                                                    }

                                                                                });


		        }else{
		        	$("#result_d").addClass('alert alert-danger');
		        	$("#result_d").html(menj);
		        }


           
}