// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 1.99
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 2.19
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		both: false,
		organic: false,
		price: 2.35
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 2.79
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 2.99
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		both: false,
		organic: false,
		price: 4.99
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		both: false,
		organic: false,
		price: 6.79
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		both: false,
		organic: false,
		price: 6.89
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		both: false,
		organic: false,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		both: false,
		organic: false,
		price: 12.45
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + " " + prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name+ " " +prods[i].price);
		}
		else if ((restriction == "Both") && (prods[i].both == true)){
			product_names.push(prods[i].name+ " " +prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name+ " " +prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name+ " " +prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name+ " " + products[i].price) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}