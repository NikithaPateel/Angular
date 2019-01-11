var myapp = angular.module ("myapp",[]);

myapp.controller('mycontroller', function($scope) {
$scope.itemlist = "";
$scope.message = "";
$scope.check = function() {
    var count = 0;
    console.log('checking for items');
    if($scope.list!== undefined) {
        var splititems = $scope.list.split(',');

        for (var i = 0; i < splititems.length; i++) {
            if (splititems[i].trim() !== '')
                count++;
        }
    }
    console.log(count);
    if (count <= 0) {
        $scope.message = "Enter Data";
    }
       else if(count <= 3)
        {

            $scope.message = "Enjoy";
        }
      else if(count > 3) {
            $scope.message = "TOO MUCH";
        }
    }

});