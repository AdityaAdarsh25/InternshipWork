<?php 

$str = "Hello@World! PHP#2026$ is_awesome%123 & coding*rocks.";
$result="";
for($i=0;$i<strlen($str);$i++){
    $ch=$str[$i];
    if(ctype_alnum($ch) || $ch==' '){
        $result.=$ch;
    }
}
echo $result;
