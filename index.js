
 var recipeCategories = [
  { id: 'all', name: 'All' },
  { id: 'chicken', name: 'Chicken' },
  { id: 'redmeat', name: 'Red Meat' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'vegetarian', name: 'Vegetarian' }
 ];

var recipeLists =
[
  	{
  		name: 'Cheesy Potato Chicken',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Red Potatoes',
  			'Cheddar',
  			'Bacon',
  			'Broccoli',
  			'Butter'
		 ]
	},
	{
  		name: 'Grilled Chicken with Mashed Potatoes',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Red Potatoes',
  			'Cheddar',
  			'Bacon',
  			'Broccoli'
		 ]
	},
	{
  		name: 'Chicken Casserole',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Red Potatoes',
  			'Cheddar',
  			'Bacon',
  			'Broccoli'
		 ]
	},
	{
  		name: 'Rice Stuffed Chicken',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Black Beans',
  			'Salsa',
  			'Cheddar',
  			'Rice',
  			'Chicken Stock'
		 ]
	},
	{
  		name: 'Salsa Chicken with Rice',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Black Beans',
  			'Salsa',
  			'Cheddar',
  			'Rice'
		 ]
	},
	{
  		name: 'Broiled Chicken with Veggies',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Orange Marmalade',
  			'Capsicum',
  			'Soy Sauce',
  			'Red Onions',
  			'Butter'
		 ]
	},
	{
  		name: 'Orange Chicken Stir Fry',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Orange Marmalade',
  			'Capsicum',
  			'Soy Sauce',
  			'Red Onions',
  			'Chicken Stock'
		 ]
	},
	{
  		name: 'Grilled Balsamic Chicken',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Zucchini',
  			'Mozzarella',
  			'Tomatoes',
  			'Onions',
  			'Balsamic Vinegar'
		 ]
	},
	{
  		name: 'Chicken with Caremalized Onion',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Zucchini',
  			'Mozzarella',
  			'Tomatoes',
  			'Onions'
		 ]
	},
	{
  		name: 'Cheese Stuffed Chicken',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Brie',
  			'Mushrooms',
  			'Pine Nuts',
  			'Pesto'
		 ]
	},
	{
  		name: 'Skillet Chicken',
  		category: 'chicken',
  		ingredients: [
  			'Chicken Breast',
  			'Mushrooms',
  			'Brie',
  			'Pine Nuts',
  			'Capsicum',
  			'Chicken Stock',
  			'Rice'
		 ]
	},
	{
  		name: 'Bacon Wrapped Pork',
  		category: 'redmeat',
  		ingredients: [
  			'Pork Tenderloin',
  			'Onion',
  			'Balsamic Vinegar',
  			'Soy Sauce',
  			'Bacon'
		 ]
	},
	{
  		name: 'Sweet and Sour Pork Stir Fry',
  		category: 'redmeat',
  		ingredients: [
  			'Pork Tenderloin',
  			'Onion',
  			'Balsamic Vinegar',
  			'Soy Sauce',
  			'Capsicum',
  			'Broccoli'
		 ]
	},
	{
  		name: 'Skillet Lasagna',
  		category: 'redmeat',
  		ingredients: [
  			'Mince Beef',
  			'Pasta',
  			'Ricotta',
  			'Parmesan',
  			'Pasta Sauce',
  			'Egg',
  			'Flour'
		 ]
	},
	{
  		name: 'Beef Stir Fry',
  		category: 'redmeat',
  		ingredients: [
  			'Flank Steak',
  			'Onion',
  			'Balsamic Vinegar',
  			'Soy Sauce',
  			'Capsicum',
  			'Broccoli'
		 ]
	},
	{
  		name: 'Steak with Spinach Sauce',
  		category: 'redmeat',
  		ingredients: [
  			'Beef Tenderloin',
  			'Feta',
  			'Spinach',
  			'Tomato',
  			'Butter',
  			'Flour'
		 ]
	},
	{
  		name: 'Seared Steak with Stuffed Tomatoes',
  		category: 'redmeat',
  		ingredients: [
  			'Beef Tenderloin',
  			'Feta',
  			'Spinach',
  			'Tomato',
  			'Egg',
  			'Balsamic Vinegar',
  			'Tzatziki Sauce'
		 ]
	},
	{
  		name: 'Steak with Feta Sauce',
  		category: 'redmeat',
  		ingredients: [
  			'Beef Tenderloin',
  			'Feta',
  			'Spinach',
  			'Tomato',
  			'Balsamic Vinegar'
		 ]
	},
	{
  		name: 'Skillet Seared Steak and Veggies',
  		category: 'redmeat',
  		ingredients: [
  			'Sirloin Steak',
  			'Potatoes',
  			'Carrots',
  			'Onions',
  			'Asparagus',
  			'Butter',
  			'Balsamic Vinegar'
		 ]
	},
	{
  		name: 'Beef Stew',
  		category: 'redmeat',
  		ingredients: [
  			'Sirloin Steak',
  			'Potatoes',
  			'Carrots',
  			'Onions',
  			'Asparagus',
  			'Flour',
  			'Beef Stock'
		 ]
	},
	{
  		name: 'Shrimp with Tomato and Zucchini Rice',
  		category: 'seafood',
  		ingredients: [
  			'Shrimp',
  			'Rice',
  			'Tomato',
  			'Bacon',
  			'Zucchini'
		 ]
	},
	{
  		name: 'Bacon Wrapped Shrimp with Rice',
  		category: 'seafood',
  		ingredients: [
  			'Shrimp',
  			'Rice',
  			'Tomato',
  			'Bacon',
  			'Zucchini'
		 ]
	},
	{
  		name: 'Baked Scallop Soup',
  		category: 'seafood',
  		ingredients: [
  			'Scallops',
  			'Tomatoes',
  			'Bacon',
  			'Breadcrumbs',
  			'Butter'
		 ]
	},
	{
  		name: 'Skillet Shrimp',
  		category: 'seafood',
  		ingredients: [
  			'Shrimp',
  			'Potatoes',
  			'Capsicum',
  			'Chipotle Sauce',
  			'Mayonnaise',
  			'Light Cream'
		 ]
	},
	{
  		name: 'Baked Spaghetti',
  		category: 'vegetarian',
  		ingredients: [
  			'Pasta',
  			'Artichokes',
  			'Olives',
  			'Feta',
  			'Tomatoes'
		 ]
	}
 ];

var ractive = new Ractive({
	el: 'container',
	template: '#template',
	oninit: function () {
		var recipeLists = this.get('recipeLists');
		var selectedIndex = Math.floor((Math.random() * recipeLists.length));
		this.set('selectedRecipe', recipeLists[selectedIndex]);
    },
	data: {
		recipeCategories: recipeCategories,
		recipeLists: recipeLists
	}
});

ractive.on( 'getRecipe', function (e) {
		var recipeLists = ractive.get('recipeLists');
		var selectedIndex = Math.floor((Math.random() * recipeLists.length));
		ractive.set('selectedRecipe', recipeLists[selectedIndex]);
});