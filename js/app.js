var MyApp = angular.module("MyApp", ['ui.router']);
MyApp.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider, $stateProvider)
{
	
	$urlRouterProvider.otherwise("/home");
	
	$stateProvider
	.state('home', 
	{ url: '/home', templateUrl:"home.html" }) 
 	
	.state('about',
	{ url: '/about', templateUrl:'about.html' })
	
	.state('offer',
	{ url: '/offer', templateUrl:'offer.html' })
	
	.state('usecases',
	{ url: '/usecases', templateUrl:'usecases.html' })
	
	.state('faq',
	{ url: '/faq', templateUrl:'faq.html' })
		
	.state('contact',
	{ url: '/contact', templateUrl:'contact.html' })


}]);

