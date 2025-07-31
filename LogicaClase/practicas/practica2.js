function sayHello(){
  console.log('Hello, World!');
  return;
}

function nameHello(name){
  console.log(`Hello, ${name}!`);
  return;
}

function dobleNumber(num){
  return num * 2;
}

function promedio(num1,num2,num3){
  let sum = num1 + num2 + num3;
  return sum / 3;
}

function mayorOfTwoNumbers(num1, num2){
  if(num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

function NumberWithItself(num){
  return num * num;
}