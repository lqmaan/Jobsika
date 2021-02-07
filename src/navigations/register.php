<?php 
include 'configdb.php';

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$username = $obj['username'];
$pw = $obj['password'];
$checksql = "select * from user where username='$username'";
$check = mysqli_fetch_array(mysqli_query($con,$checksql));

if(isset($check)){
 
    $Existmsg = 'Username Already Exist, Please Try Again !!!';
   $ExistJson = json_encode($Existmsg);
    echo $ExistJson ; 
    }
    else{
   $Sql_Query = "insert into user (username,password) values ('$username','$pw')";
    if(mysqli_query($con,$Sql_Query)){
   $MSG = 'User Registered Successfully' ;
   $json = json_encode($MSG);
    echo $json ;
    }
    else{
    echo 'Try Again';
    }
    }
    mysqli_close($con);
?>