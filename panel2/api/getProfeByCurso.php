<?php
  require_once('config/mysql.php');



	$db  = new dbConnect();
	$dbh = $db->conectardb();


	$rspta = json_decode(file_get_contents("php://input"));
	$id_curso= $rspta->id_curso;
	$modalidad= $rspta->modalidad;
	

	$q = 'SELECT profecurso.*, mp_profesor.*
		from profecurso inner join mp_profesor
		on profecurso.username = mp_profesor.username
where id_curso=:id_curso and modalidad=:modalidad';
	$stmt = $dbh->prepare($q);
	$stmt->bindParam(':id_curso', $id_curso, PDO::PARAM_INT);
	$stmt->bindParam(':modalidad', $modalidad, PDO::PARAM_INT);
	$stmt->execute();
	$r = $stmt->fetchAll(PDO::FETCH_ASSOC);

	//var_dump($r);
	echo json_encode($r);

?>