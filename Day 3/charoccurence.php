<?php

$s=(String)readline("Enter a String:");
$map=[];
for($i=0;$i<strlen($s);$i++){
    $ch=$s[$i];
    if($ch!=" "){
        $map[$ch]=($map[$ch] ?? 0) +1;
    }
}
print_r($map);
