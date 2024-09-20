console.log("Mohamed Sayed");
/*
let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}




let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}



var arr = ['ahmed', 'cairo', 1253, true, 'id', 'age'];


// Escape 'cairo' and stop at 'id'
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 'cairo') {
    continue; 
  }
  if (arr[i] === 'id') {
    break; 
  }
  console.log(arr[i]);
}


var friends = ['ali', 2, 'ahmed', 3, 5, 'sara'];
var names = [];


for (var i = 0; i < friends.length; i++) {
  if (typeof friends[i] === 'string') {
    names.push(friends[i]);
  }
}
console.log(names);



var friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';
for(i=0;i<friends.length;i++)
    {
        if(friends[i][0]===letter.toUpperCase()){continue;}
        console.log(i+"=>"+friends[i]);
        
    }
    
    
     let products = ["Product A", "Product B", "Product C", "Product D"];
  let colors = ['red', 'green', 'blue'];
  let models = ['2020', '2022'];

  let productsSection = document.getElementById('products-section');

 
  for(let i = 0; i < products.length; i++) {
    productsSection.innerHTML += `
      <div class="col-12">
        <div class="product-card">
          <h5>Type : ${products[i]} ___</h5>
          <div class="separator"></div>
          <p class="colors">-Colors-</p>
          <p>${colors.join(' ')}</p>
          <p class="model">---model---</p>
          <p>${models.join('')}</p>
        </div>
      </div>
    `;
  }

  


function generateYearOptions(startYear, lastYear) {
    const selectElement = document.createElement('select');
    
    for (let year = startYear; year <= lastYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        selectElement.appendChild(option);
    }
    
    return selectElement;
}
document.body.appendChild(generateYearOptions(2003, 2024));


// task 2 // 
let myArray = [1, 2, 3, 4, 5];

function printArrayData(array) {
    console.log('Data in array:', array);
}

printArrayData(myArray);


  */



