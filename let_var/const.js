/**
 * 定数宣言
 *  大文字で宣言する
 * */
var DATA = 100;
console.log(DATA); //100
// 再代入不可
// DATA = 180; //Cannot assign to 'DATA' because it is a constant
/** 定数宣言した配列の一部の変更は可 */
var ORANGE = [1, 2, 3];
ORANGE[0] = 5;
console.log(ORANGE); //[ 5, 2, 3 ]
ORANGE = [9, 8, 7];
