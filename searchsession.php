<?php
    require "init2.php";

    $name = "SSS";
    $search_input = $_POST["searchinput"];

    //$sql_query = "SELECT course from session WHERE course like '$search_input';";
    $sql_query = "SELECT course from session WHERE REPLACE(course, ' ', '') = REPLACE('$search_input', ' ', '');";
    $result_course = mysqli_query($con, $sql_query);
    if(mysqli_num_rows($result_course)>0){
            $row = mysqli_fetch_assoc($result_course);
            $course = $row["course"];
            echo "Search Success ".$course;
    }else{
        echo "Search Fail. No Result";
    }
?>