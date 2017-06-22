<!doctype>
<html>
<head>
	<title>Clockwork Test</title>

</head>

<body>
	<?php
	require("class-Clockwork.php")
		$apikey = "e47589474eb317b599bb992007c92587ae2f9462";
		$clockwork = new Clockwork($apikey);
		
		$message = array('to' => '09993339030', 'message' = > 'You did it brah hahaha');
		$done = $clockwork->send($message);
	?>
	<h1>It works...I think?</h1>
</body>
</html>