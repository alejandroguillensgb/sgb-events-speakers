'use strict';

angular.module('sgb-events-speakers', ['megazord'])
    .controller('sgb-events-speakers-controller', ['$scope', '_router', '_screen', '_screenParams','_data','appConstants','lodash',
    			function ($scope, _router, _screen, _screenParams, _data, appConstants, _) {
        _screen.initialize($scope, _screenParams);
    	$scope.fullImagePath = appConstants.fullImagePath;
        $scope.speakers = _data.speakers; 
        $scope.filteredItems = angular.copy($scope.speakers); 

        $scope.filterItems = function(searchQuery){
            var search = searchQuery.toLowerCase();
            $scope.filteredItems = _.filter($scope.speakers, function(item){
                return (item.name && item.name.toLowerCase().indexOf(search) != -1) ||
                    (item.companyName && item.companyName.toLowerCase().indexOf(search) != -1);
            });
        };

        $scope.cancelSearch = function(){
            $scope.filteredItems = $scope.speakers;
        };


        $scope.itemClickHandler = function(item){
            _router.fireEvent({
                name: 'goToSpeakerDetail', 
                params: {
                    data: item
                }
            })
        };

    }]);