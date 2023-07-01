/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {

  var spendEstimates = {};

  for (var i=0; i<transactions.length; i++){
      var t = transactions[i];
      if (spendEstimates[t.category]){
        spendEstimates[t.category] = spendEstimates[t.category] + t.price
      }
      else{
        spendEstimates[t.category] = t.price
      }
  }
    console.log(spendEstimates)

    function solve(input){
      var keys = Object.keys(input);
      var ans = [];
      for(i = 0; i<=keys.length - 1; i++){
        var category = keys[i];
        ans.push({
          category: category,
          amountSpend: input[category]
        })
      }
      console.log(ans);
    }

    solve(spendEstimates)
    
}


var transactions = [
  { itemName:"Pepsi", category:"drink", price:15, timestamp:"2 July" },
  { itemName:"Marinda", category:"drink", price:25, timestamp:"5 July" },
  { itemName:"Samosa", category:"food", price:5, timestamp:"8 July" },
  { itemName:"Kurkure", category:"food", price:10, timestamp:"12 July" }
]

calculateTotalSpentByCategory(transactions)


module.exports = calculateTotalSpentByCategory;
