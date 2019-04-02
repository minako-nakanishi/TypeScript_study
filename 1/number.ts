
function toInt(value:number){
    // 小数点以下の値を丸め込め
    let val =value.toFixed(0); //小数点以下の値を丸める（切り捨てる）
    return val;
}
console.log(toInt(<any>'hoge')); // toFixed(0)がnumber型にしか適用できないためエラーとなる.