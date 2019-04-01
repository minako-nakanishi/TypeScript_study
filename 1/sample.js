var data1 = 'hoge'; //String型の宣言
data1 = 'foo';
console.log(data1); //foo
var data2 = 100; //型宣言をしなくても良い(型推論：初期値から型を推測する)
data2 = 150;
console.log(data2); //150
var data3 = 100; // 任意の型を代入したい場合は「any」で型宣言する
data3 = 150;
console.log(data3); // 150
data3 = 'hoge';
console.log(data3); //hoge -> エラーとならない
var data4; // 初期値も型も宣言しない場合はany型と見なされる
data4 = 100;
console.log(data4); //100
data4 = 'hogehoge';
console.log(data4); //hogehoge
var data5 = undefined;
data5 = 200;
console.log(data5);
data5 = 'mogemoge';
console.log(data5);
