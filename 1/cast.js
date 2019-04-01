/**
 * 関数宣言
 * 引数に型を宣言できる
 */
function show(result) {
    return "\u7D50\u679C\u306F" + result + "\u3067\u3059\u3002";
}
// show(100); 数値を渡すとエラー
show('hello');
console.log(show('hello'));
var showany = show(100);
console.log(showany);
