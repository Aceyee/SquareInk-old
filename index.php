<?php
     $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 4); //只取前4位，这样只判断最优先的语言。如果取前5位，可能出现en,zh的情况，影响判断。  
    if (preg_match("/zh-c/i", $lang)){
        echo "简体中文";
    } 
    else if (preg_match("/en/i", $lang)){   
        echo "English";  
        require("./en/nav.htm"); 
        require("./en/body.htm"); 
    }  
?>
