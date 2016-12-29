function controlador1 ($scope) {
	$scope.variable1=0;
	$scope.variable2=0;
	$scope.variable3=1;

		$scope.boton1= function(){
			if ($scope.variable1==0) {
				$scope.variable1=1;
				$scope.variable3=0;
				console.log("variable1",$scope.variable1);
			};
		}
		$scope.boton2= function(){
			if ($scope.variable2==0) {
				$scope.variable2=1;
				$scope.variable3=0;
				console.log("variable2",$scope.variable2);
			};
		}
	}



