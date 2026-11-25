<?php

$n=(int)readline("Enter the amount of numbers:");

$arr=[];

for($i=0;$i<$n;$i++){
    $arr[$i]=(int)readline("Enter element:");
}
$sum=0;
for($i=0;$i<$n;$i++){
    $sum+=$arr[$i];
}
echo $sum;

