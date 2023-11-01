const food=require('./food.json');

//console.log(food);


console.log("1. list all the food items");
food.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n2. list all the food items with category vegetables");
food.filter(item=>item.category=="Vegetable")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n3. list all the food items with category fruit");
food.filter(item=>item.category=="Fruit")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n4. list all the food items with category protien");
food.filter(item=>item.category=="Protein")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n5. list all the food items with category nuts");
food.filter(item=>item.category=="Nuts")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n6. list all the food items with category grains");
food.filter(item=>item.category=="Grain")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n7. list all the food items with category dairy");
food.filter(item=>item.category=="Dairy")
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.category));

console.log("\n\n8. list all the food items with calorie above 100");
food.filter(item=>item.calorie>=100)
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.calorie));

console.log("\n\n9. list all the food items with calorie below 100");
food.filter(item=>item.calorie<=100)
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.calorie));

console.log("\n\n10. list all the food items with highest protien content to lowest");
food.sort((item1,item2)=>item2.protiens-item1.protiens)
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.protiens));

console.log("\n\n11. list all the food items with lowest cab content to highest");
food.sort((item1,item2)=>item1.cab-item2.cab)
.forEach((item,index)=>console.log((index+1)+". "+item.foodname+" -- "+item.cab));