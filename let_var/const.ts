/** 
 * 定数宣言 
 *  大文字で宣言する
 * */
const DATA:number = 100;
console.log(DATA); //100

// 再代入不可
// DATA = 180; //Cannot assign to 'DATA' because it is a constant

/** 定数宣言した配列の一部の変更は可 */
const ORANGE = [1,2,3];
ORANGE[0] = 5;
console.log(ORANGE); //[ 5, 2, 3 ]
// 全ての要素を一括で全て変えることはできない
// ORANGE = [9,8,7]; //Cannot assign to 'ORANGE' because it is a constant