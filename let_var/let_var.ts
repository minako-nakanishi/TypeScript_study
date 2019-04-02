/**
 * 変数の出力
 */

/** var型 */
if(true){
    var i:number = 1;
}
console.log(i); // 1  ブロックの外でも出力可能

/** let */
if(true){
    let j:number = 2;
}
// console.log(j); //ブロックの外では出力できないため、Cannot find name 'j'エラーとなる