<?php 
use Componere\Value;
  // Start the session
  session_start();
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  
        <script type="application/javascript" src="http://jsonip.appspot.com/?callback=getip"></script>

        <title>Document</title>

    </head>
    <body>
    
     <script src="assets/js/main.js"></script>
     
 
   <?php
   $message = '';  
   $error = '';  
       if(file_exists('assets/lan.json'))  
       {  
            $current_data = file_get_contents('assets/lan.json');  
            $array_data = json_decode($current_data, true);  
            $extra = array(  
                 'ip'          =>    $_COOKIE['ip'],
                 'lat'          =>   $_COOKIE['lat'],
                 'lon'          =>   $_COOKIE['lan']  
                  
            );  
            $array_data[] = $extra;  
            $final_data = json_encode($array_data);  
            if(file_put_contents('assets/lan.json', $final_data))  
            {  
                 $message = "<label class='text-success'>File Appended Success fully</p>";  
            }  
       }  
       else  
       {  
            $error = 'JSON File not exits';  
            echo $error;
       }   
   ?>
  
    </body>
    </html>