(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gem;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E', 
			templateUrl: 'product/product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E', 
			templateUrl: 'product/product-panels.html',
			controller: function(){

			},
			controllerAs: 'panels'
		};
	});

	var gem = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Hello this is the description',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: '',
					thumb: ''
				},
				{
					full: '',
					thumb: ''
				}
			],
			'reviews': [
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Hello this is the description',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: '',
					thumb: ''
				},
				{
					full: '',
					thumb: ''
				}
			],
			'reviews': [
			]
		}
	];

})();
