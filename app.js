var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'This is a practice app!';

  $scope.posts = posts.posts;
  
  $scope.posts = [
    {title: 'post1', upvotes: 5},
    {title: 'post2', upvotes: 2},
    {title: 'post3', upvotes: 15},
    {title: 'post4', upvotes: 9},
    {title: 'post5', upvotes: 4}
  ];

  // $scope.title below enables custom titles from html input
  $scope.addPost = function(){
  	//if statement below prevents user from inputing blank title
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]).

factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);


