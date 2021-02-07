<?php 
include 'configdb.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$username = $obj['username'];
$pw = $obj['password'];
$checksql = "select * from user where username='$username' AND password='$pw'";
$check = mysqli_fetch_array(mysqli_query($con,$checksql));

if(isset($check)){
    $SuccessLoginMsg = 'Data Matched';
    $SuccessLoginJson = json_encode($SuccessLoginMsg);
    echo $SuccessLoginJson ; 
    }
    else{
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
    $InvalidMSGJSon = json_encode($InvalidMSG);
    echo $InvalidMSGJSon ;
    
    }
    
    mysqli_close($con);
   ?>