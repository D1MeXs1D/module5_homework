let fruits = new Map([

    ["Яблоко",  "150р"],
  
    ["Груша", "200р"],
  
    ["Банан",    "60р"]
  
  ]);


  let sizeObject = fruits.size; 
  alert (sizeObject + " элемента ассоциативного массива");
  let i = 1;
  for (let elem of fruits) { // то же самое, что и recipeMap.entries()
    console.log(`Фрукт ${i} -  ${elem}.`);
    i++;
 }

