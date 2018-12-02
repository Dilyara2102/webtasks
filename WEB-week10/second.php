<html>
<head>
<style>
select{
  width:100%;
  background:white;
  padding:5px;
  border-radius:5px;
  color:#444444;
}
input{
  border-radius:5px;
  padding:5px;
}
input[type='text'],input[type='number']{
  width:calc(100% - 12px);
}
table tr td{
  padding:3px;
}
</style>
</head>
<?php
$makers = ["Toyota","BMW","Mercedes"];
$engine = ["gas","diesel","petroleum"];

?>
<form action="secondaction.php" method="post">
    <select name="makers" id="makers" style="width: 30%; display: block; " >
      <?php
        for($i=0;$i<sizeof($makers);$i++){
          echo '<option>' . $makers[$i] . '</option>';
        }
      ?>    
    </select>
    <select name="years" id="years" style="width: 30%;display: block;">
      <?php
        for($i=2018;$i>1900;$i--){
          echo '<option>' . ($i) . '</option>';
        }
      ?>    
    </select>
    <input type="text" name="model" style="width: 30%;display: block;">
    <?php
        for($i=0;$i<sizeof($engine);$i++){
          echo '<input type="radio" name="engine" value="'.$engine[$i].'"> '.$engine[$i].'<br>';
        }
      ?>   
    <input type="text" name="price" style="width: 30%;display: block;">
    <input type="checkbox" name="additional1" value="yes"> tax payed<br>
    <input type="checkbox" name="additional2" value="yes"> technical check passed<br>
    <input type="checkbox" name="additional3" value="yes" checked>doesn't require investment<br>
    <input type="submit"/>
</form>