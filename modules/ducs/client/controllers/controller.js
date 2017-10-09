angular.module('ducs').controller('DucsController', ['$scope','$stateParams', '$state', 'Ducs', 
  function($scope,$stateParams, $state, Ducs){
    $scope.find = function() {

      /* Get all the listings, then bind it to the scope */
      Ducs.getAll().then(function(response) {
        $scope.ducs = response.data;
      }, function(error) {
        $scope.error = 'Unable to retrieve listings!\n' + error;
      });
    };

    $scope.findOne = function() {
      debugger;
      $scope.loading = true;

      /*
        Take a look at 'list-listings.client.view', and find the ui-sref attribute that switches the state to the view 
        for a single listing. Take note of how the state is switched: 

          ui-sref="listings.view({ listingId: listing._id })"

        Passing in a parameter to the state allows us to access specific properties in the controller.

        Now take a look at 'view-listing.client.view'. The view is initialized by calling "findOne()". 
        $stateParams holds all the parameters passed to the state, so we are able to access the id for the 
        specific listing we want to find in order to display it to the user. 
       */

      var id = $stateParams.listingId;

      Listings.read(id)
              .then(function(response) {
                $scope.listing = response.data;
                $scope.loading = false;
              }, function(error) {  
                $scope.error = 'Unable to retrieve listing with id "' + id + '"\n' + error;
                $scope.loading = false;
              });
    };  


         $scope.buttonclick =  function(){
          console.log("hello");
            var UserInput = document.getElementById('NumCC').value;

             for (i=0;i<=UserInput-1;i++)
            {
              document.write( ' <label class="control-label" for="name">Amount of Water</label><input name="name" type="number" ng-model="vm.duc.water" id="name" class="form-control" placeholder="amount" required></br>');

            }
            document.write('<div class="form-group"><button type="submit" class="btn btn-default" ><a href="results-ducs.client.view.html"> {{vm.duc._id ? Update : Create}}</a></button></br></div>');
          }

    $scope.create = function(isValid) {
 console.log("hello");
      var data = new Measurement({
        can_depth:
        zipcode:
        county: 
        time:
      });

      /* Save the article using the Listings factory */
      Ducs.create(data)
              .then(function(response) {
                //if the object is successfully saved redirect back to the list page
              }, function(error) {
                //otherwise display the error
               
              });
    };

    $scope.update = function(isValid) {
      /*
        Fill in this function that should update a listing if the form is valid. Once the update has 
        successfully finished, navigate back to the 'listing.list' state using $state.go(). If an error 
        occurs, pass it to $scope.error. 
       */
         $scope.error = null;
      
            /* 
              Check that the form is valid. (https://github.com/paulyoder/angular-bootstrap-show-errors)
             */
            if (!isValid) {
              $scope.$broadcast('show-errors-check-validity', 'articleForm');
      
              return false;
            }

            var listing = {
              name: $scope.name, 
              code: $scope.code, 
              address: $scope.address
            };


            Listings.update($scope.listing._id, listing)
              .then(function(response) {
              
              $state.go('listings.list', { successMessage: 'Updated' });
            }, function(error) {
            
              $scope.error = 'Unable to save listing!\n' + error;
            });

    };

    $scope.remove = function() {
      /*
        Implement the remove function. If the removal is successful, navigate back to 'listing.list'. Otherwise, 
        display the error. 
       */
           Listings.delete($scope.listing._id)
      .then(function(response) {
      
      $state.go('listings.list', { successMessage: 'Deleted' });
    }, function(error) {
      
      $scope.error = 'Unable to save listing!\n' + error;
    });

    };

    /* Bind the success message to the scope if it exists as part of the current state */
    if($stateParams.successMessage) {
      $scope.success = $stateParams.successMessage;
    }

    
$scope.initialize = function(){
/* Map properties */
      debugger;
      $scope.markers=[];
      

            /* Get all the listings, then bind it to the scope */
      Listings.getAll().then(function(response) {
        $scope.listings = response.data;

        for(var i in $scope.listings){
          
          if($scope.listings[i].coordinates){
            $scope.markers.push($scope.listings[i]);
          }
        }

        $scope.loading = false; //remove loader
        
      }, function(error) {
        $scope.loading = false;
        $scope.error = 'Unable to retrieve listings!\n' + error;
      });


      $scope.map = {
        center: {
          latitude: 29.65163059999999,
          longitude: -82.3410518
        }, 
       zoom: 14

      }

    };
    
    

    // $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };

  }
]);