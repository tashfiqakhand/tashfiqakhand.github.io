// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

// var img = document.creatElement("img");
// var img = {
// 	height:'20px',
// 	width:'20px' 
// }


var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		// both: true,
		organic: true,
		price: 1.99,

		Vegetable: true,
		Fruit: false,
		Meat: false,
		WFD: false,
		image: "Images/brocoli.jpg"
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		// both: true,
		organic: true,
		price: 2.19,

		Vegetable: true,
		Fruit: false,
		Meat: false,
		WFD: false,
		image: "Images/carrot.jpg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		// both: false,
		organic: false,
		price: 2.35,

		Vegetable: false,
		Fruit: false,
		Meat: false,
		WFD: true,
		image: "Images/bread.jpg"
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		// both: true,
		organic: false,
		price: 2.79,

		Vegetable: false,
		Fruit: true,
		Meat: false,
		WFD: false,
		image: "Images/banana.jpg"
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		// both: true,
		organic: true,
		price: 2.99,

		Vegetable: false,
		Fruit: true,
		Meat: false,
		WFD: false,
		image: "Images/apple.jpg"
	},
	{
		name: "croissant",
		vegetarian: true,
		glutenFree: false,
		// both: false,
		organic: false,
		price: 3.35,

		Vegetable: false,
		Fruit: false,
		Meat: false,
		WFD: true,
		image: "Images/croissant.jpg"
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		// both: false,
		organic: false,
		price: 4.99,

		Vegetable: false,
		Fruit: false,
		Meat: false,
		WFD: true,
		image: "Images/pasta.jpg"
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		// both: false,
		organic: false,
		price: 6.79,

		Vegetable: false,
		Fruit: false,
		Meat: true,
		WFD: false,
		image: "Images/chicken.jpg"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		// both: false,
		organic: false,
		price: 10.00,

		Vegetable: false,
		Fruit: false,
		Meat: true,
		WFD: false,
		image: "Images/salmon.jpg"
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		// both: false,
		organic: false,
		price: 12.45,

		Vegetable: false,
		Fruit: false,
		Meat: true,
		WFD: false,
		image: "Images/steak.jpg"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian & Organic") && (prods[i].vegetarian == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree & Organic") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(prods[i]) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}