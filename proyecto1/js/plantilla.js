(function(){
    var app = angular.module('store', ['ngRoute']);
    
    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
    name: 'Doce',
    price: 2.95,
    description: 'prueba description',
    canPurchase: true,
}
}) ();

