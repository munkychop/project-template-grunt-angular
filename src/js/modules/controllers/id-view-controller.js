'use strict';

function IDViewController ($scope, idService) {

    $scope.v1 = idService.getV1();
    $scope.v4 = idService.getV4();
}

module.exports = IDViewController;