<?php
// Only process the form if $_POST isn't empty
if ( ! empty( $_POST ) ) {
  
  // Connect to MySQL
  $mysqli = new mysqli( 'localhost', 'roshan', '123456', 'osu_poc' );
  
  // Check our connection
  if ( $mysqli->connect_error ) {
    die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error );
  }
  
  // Insert our data
  $sql = "INSERT INTO student_info ( schoolName, studentClass, studentName, studentEmail, studentPhone, parentEmail, parentPhone ) VALUES ( '{$mysqli->real_escape_string($_POST['schoolName'])}', '{$mysqli->real_escape_string($_POST['studentClass'])}', '{$mysqli->real_escape_string($_POST['studentName'])}', '{$mysqli->real_escape_string($_POST['studentEmail'])}', '{$mysqli->real_escape_string($_POST['studentPhone'])}', '{$mysqli->real_escape_string($_POST['parentEmail'])}', '{$mysqli->real_escape_string($_POST['parentPhone'])}' )";

  $insert = $mysqli->query($sql);
  
  if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
    $schoolName = $_POST['schoolName'];
    $studentClass = $_POST['studentClass'];
    $studentName = $_POST['studentName'];
    $studentEmail = $_POST['studentEmail'];
    $studentPhone = $_POST['studentPhone'];
    $parentEmail = $_POST['parentEmail'];
    $parentPhone = $_POST['parentPhone'];
    if($name !=''&& $email !=''&& $contact !=''&& $address !='')
    {
//  To redirect form on a particular page
      header("Location:http://www.formget.com/app/");
    }
    else{
      ?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
    }
  }
  
  // Close our connection
  $mysqli->close();
}
?>
<form method="post" action="">
  <input name="schoolName" type="text" placeholder="schoolName">
  <input name="studentClass" type="text" placeholder="studentClass">
  <input name="studentName" type="text" placeholder="studentName">
  <input name="studentEmail" type="text" placeholder="studentEmail">
  <input name="studentPhone" type="text" placeholder="studentPhone">
  <input name="parentEmail" type="text" placeholder="parentEmail">
  <input name="parentPhone" type="text" placeholder="parentPhone">
  <input type="submit" value="Submit Form">
</form>