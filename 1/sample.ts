let data1:string = 'hoge'; //String型の宣言
data1 = 'foo';
console.log(data1); //foo

let data2 = 100; //型宣言をしなくても良い(型推論：初期値から型を推測する)
data2 = 150;
console.log(data2); //150