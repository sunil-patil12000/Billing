<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sp_billing";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `sys_invoice` (`u_id`, `in_nu`, `c_name`, `c_address`, `c_phone`, `date`, `a_type`, `n_total`, `in_type`, `g_type`, `total`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
