<?php
$servername = "localhost"; // Change if needed
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "intershippage"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

require("./mailing/mailfunction.php");

$name = $_POST["name"];
$phone = $_POST['phone'];
$email = $_POST["email"];
$internship_type = $_POST["internship_type"];
$university = $_POST["university"];
$course = $_POST["course"];
$year = $_POST["year"];
$skills = $_POST["skills"];

$filename = $_FILES["fileToUpload"]["name"];
$filetype = $_FILES["fileToUpload"]["type"];
$filesize = $_FILES["fileToUpload"]["size"];
$tempfile = $_FILES["fileToUpload"]["tmp_name"];
$filenameWithDirectory = "".$name."_internship.pdf";  //give path of tmp-uploads folder(available in this project folder) with slash(/ or \ as per your path) at end of path

$body = "<ul><li>Name: ".$name."</li><li>Phone: ".$phone."</li><li>Email: ".$email."</li><li>Internship Type: ".$internship_type."</li><li>University: ".$university."</li><li>Course: ".$course."</li><li>Year: ".$year."</li><li>Skills: ".$skills."</li><li>Resume(Attached Below):</li></ul>";
if(move_uploaded_file($tempfile, $filenameWithDirectory))
{
	$status = mailfunction("", "Company", $body, $filenameWithDirectory); //reciever
    if($status)
        echo '<center><h1>Thanks! We will contact you soon.</h1></center>';
    else
        echo '<center><h1>Error sending message! Please try again.</h1></center>';
}
else 
{
	echo "<center><h1>Error uploading file! Please try again.</h1></center>";
}

?>



