let data1:string = 'hoge'; //String型の宣言
data1 = 'foo';
console.log(data1); //foo

let data2 = 100; //型宣言をしなくても良い(型推論：初期値から型を推測する)
data2 = 150;
console.log(data2); //150

let data3:any = 100; // 任意の型を代入したい場合は「any」で型宣言する
data3 = 150;
console.log(data3); // 150
data3 = 'hoge';
console.log(data3); //hoge -> エラーとならない

let data4; // 初期値も型も宣言しない場合はany型と見なされる
data4 = 100;
console.log(data4); //100
data4 = 'hogehoge';
console.log(data4); //hogehoge

let data5 = undefined; //undefinedで宣言した場合もany型となる
data5 = 200;
console.log(data5); //200
data5 = 'mogemoge';
console.log(data5); //mogemoge
