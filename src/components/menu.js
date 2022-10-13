
    const regular_price =[
        {
            size : "8 oz",
            price : "4.99"
        },
        {
            size : "12 oz",
            price : "6.29"
        },
        {
            size : "16 oz",
            price : "6.49"
        },
        {
            size : "20 oz",
            price : "7.99"
        },
        {
            size : "1/2 gallon",
            price : "12.99"
        },
        {
            size : "1 gallon",
            price : "18.99"
        },
    ];
       
    const special_price =[
        {
            size : "8 oz",
            price : "5.99"
        },
        {
            size : "12 oz",
            price : "7.49"
        },
        {
            size : "16 oz",
            price : "7.99"
        },
        {
            size : "20 oz",
            price : "9.49"
        },
        {
            size : "1/2 gallon",
            price : "16.99"
        },
        {
            size : "1 gallon",
            price : "27.99"
        },
    ]
       

export const yogurt = [
    { id: 1, name: "Banana", description: "", image: '../assets/images/yogurt/banana_12.jpg',  regular_price },
    { id: 2, name: "Coconut", description: "", image: '../assets/images/yogurt/coconut_12.jpg', regular_price},
    { id: 3, name: "Strawberry", description: "", image: '../assets/images/yogurt/strawberry_12.jpg', regular_price },
    { id: 4, name: "Plain", description: "", image: '../assets/images/yogurt/plain_12.jpg', regular_price},
    { id: 5, name: "Mango", description: "", image: '../assets/images/yogurt/mango_12.jpg', regular_price },
    { id: 6, name: "Pineapple", description: "", image: '../assets/images/yogurt/pineapple_12.jpg', regular_price },
    { id: 7, name: "Vanilla", description: "", image: '../assets/images/yogurt/vanilla_12.jpg', regular_price }
]


export const juices = [
    { id: 8, name: "Orange", description: "", image: '../assets/images/juices/orange12.jpg', regular_price },
    { id: 9, name: "Pineapple", description: "", image: '../assets/images/juices/pineapple_hgallon.jpg', regular_price },
    { id: 10, name: "Guava", description: "", image: '../assets/images/juices/guava12.jpg', regular_price },
    { id: 11, name: "Papaya", description: "", image: '../assets/images/juices/papaya12.jpg', regular_price },
    { id: 12, name: "Watermelon", description: "", image: '../assets/images/juices/watermelon_8.jpg', regular_price },
    { id: 15, name: "Grapefruit", description: "", image: '../assets/images/juices/grapefruit12.jpg', regular_price },
    { id: 14, name: "Apple", description: "", image: '../assets/images/juices/apple_hgallon.jpg', regular_price },
    { id: 13, name: "Mango", description: "", image: '../assets/images/juices/mango12.jpg', regular_price },
    // { id: 16, name: "Mixed", description: "", image: '../assets/images/jucies/mixed.png', price: "" }
]


export const specialJuices = [
    { id: 17, name: "Green Juice", description: "", image: '../assets/images/special/green_hgallon.jpg', special_price },
    // { id: 17, name: "Constipation", description: "", image: '../assets/images/special/constipatio.jpg', special_price },
    { id: 18, name: "Energy Booster", description: "", image: '../assets/images/special/energy_hgallon.jpg',special_price },
    { id: 19, name: "Vision Juices", description: "", image: '../assets/images/special/vision_hgallon.jpg', special_price },
    { id: 20, name: "Recovery Juice", description: "", image: '../assets/images/special/recovery_hgallon.jpg', special_price },
    { id: 21, name: "Regulator Juice", description: "", image: '../assets/images/special/regulator_hgallon.jpg', special_price },
    { id: 22, name: "Natural Kidney Cleanser", description: "", image: '../assets/images/special/natural_kidney_hgallon.jpg', special_price },
    { id: 23, name: "Rejuvenated Juice", description: "", image: '../assets/images/special/rejuvenated_hgallon.jpg', special_price }
]

export const salad = [
    { id: 24, name: "Southwest Chicken Salad", description: "", image: '../assets/images/salad/salmon_salad.jpg', price: "10.99" },
    { id: 25, name: "Grilled Salmon Salad", description: "", image: '../assets/images/salad/southwest.jpg', price: "14.99" },
    // { id: 26, name: "African Salad", description: "", image: '../assets/images/salad/33.png', price: "9.99" }
]

export const food = [
    { id: 27, name: "Jollof Rice", description: "", image: '../assets/images/food/jollof.jpg', price: "12.99" },
    { id: 28, name: "Fried Rice", description: "", image: '../assets/images/food/fried_rice.jpg', price: "13.99" },
     { id: 29, name: "Moi Moi", description: "", image: '../assets/images/food/moimoi.jpg', price: "2.49" }
]

export const pastries = [
    
    { id: 39, name: "Suya/Kebab", description: "", image: '../assets/images/pastries/kebab.jpg', price: "8.99" },
    { id: 32, name: "Meat Pie", description: "", image: '../assets/images/pastries/meatpie.jpg', price: "2.25" },
    { id: 33, name: "Chicken Pie", description: "", image: '../assets/images/pastries/chickenpie.jpg', price: "2.25" },
    { id: 35, name: "Egg Roll", description: "", image: '../assets/images/pastries/eggroll.jpg', price: "2.49" },
    { id: 37, name: "Scotch Egg", description: "", image: '../assets/images/pastries/scotch_egg.jpg', price: "2.25" },
    { id: 38, name: "Popcorn Chicken", description: "", image: '../assets/images/pastries/popcornchicken.jpg', price: "5.99" },
    { id: 30, name: "French Fries", description: "", image: '../assets/images/pastries/fries.jpg', price: "1.99" },
    { id: 40, name: "Baked Fish", description: "", image: '../assets/images/pastries/bakedfish.jpg', price: "14.99" },
    // { id: 41, name: "Sausage Roll", description: "", image: '../assets/images/pastries/saus2.jpg', price: "1.99" },
    { id: 42, name: "Fruit Bowl", description: "", image: '../assets/images/pastries/fruitbowl.jpg', price: "6.29" },
    { id: 36, name: "Chicken Nuggets", description: "", image: '../assets/images/pastries/chicken_nugget.jpg', price: ["4.49/10 pcs","5.99/20 pcs" ]},
    { id: 31, name: "Sweet Potato Fries", description: "", image: '../assets/images/pastries/sweetpotato.jpg', price: "1.99" },
    { id: 34, name: "Spring Roll", description: "", image: '../assets/images/pastries/springroll.jpg', price: "2.25" },

]

export const parfait = [
    { id: 43, name: "Blueberry", description: "", image: '../assets/images/parfait/parfait.jpg', price: "10.99" },
    { id: 44, name: "Coconut", description: "", image: '../assets/images/parfait/parfait.jpg', price: "10.99" },
    { id: 45, name: "Chocolate", description: "", image: '../assets/images/parfait/parfait.jpg', price: "10.99" },
    { id: 46, name: "Strawberry", description: "", image: '../assets/images/parfait/parfait.jpg', price: "10.99" },
    { id: 47, name: "Coffee", description: "", image: '../assets/images/parfait/parfait.jpg', price: "10.99" }
]
export const hotshot = [
    { id: 48,ingredients: ["garlic","ginger","turmeric", "lemon", "pineapple"], name: "Hot Shot", description: "", image: '../assets/images/hotshot.jpg', price: [{ "2 oz": "4.99" }, {"4 oz": "6.99"}]}
]

