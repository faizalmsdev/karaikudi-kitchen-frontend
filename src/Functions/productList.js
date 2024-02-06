const productList = [
    {
        dish_name: 'Chicken Chettinad',
        price: 599,
        inStock: true,
        discount_price: 499,
        description : "A spicy and flavorful chicken dish from the Chettinad region of Tamil Nadu.",
        category: ['Signature Dish', 'Non-Veg'],
        images:['../images/chicken_chettinad.jpg'],
    },
    {
        dish_name: 'Vegetable Biryani',
        price: 499,
        inStock: true,
        discount_price: null,
        description : "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
        category: ['Popular Choice', 'Veg'],
        images:['../images/vegetable_biryani.jpg'],
    },
    {
        dish_name: 'Fish Fry',
        price: 699,
        inStock: true,
        discount_price: null,
        description : "Fresh fish marinated in traditional spices and deep-fried until crispy.",
        category: ['Chef Recommendation', 'Non-Veg'],
        images:['../images/fish_fry.jpg'],
    },
    {
        dish_name: 'Paneer Tikka',
        price: 549,
        inStock: true,
        discount_price: null,
        description : "Soft and succulent paneer cubes marinated in yogurt and spices, grilled to perfection.",
        category: ['Vegetarian Delight', 'Veg'],
        images:['../images/paneer_tikka.jpg'],
    },
];

export default productList;
