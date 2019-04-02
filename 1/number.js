function toInt(value) {
    // 小数点以下の値を丸め込め
    var val = value.toFixed(0); //小数点以下の値を丸める（切り捨てる）
    return val;
}
console.log(toInt('hoge'));
