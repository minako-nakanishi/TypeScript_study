/** 
 * 関数宣言
 * 引数に型を宣言できる
 */
function show(result:string){
    return `結果は${result}です。`;
}

// show(100); 数値を渡すとエラー
show('hello')
console.log(show('hello'));

var showany = show(100 as any); //asを使用すると型を変換できる
console.log(showany);