/** 配列の宣言 */
var data = ['Java', 'Python', 'PHP', 'Ruby']; //データ型の後ろに[]を付加する
console.log(data); //[ 'Java', 'Python', 'PHP', 'Ruby' ]
console.log(data[0]); //Java
/** 多次元配列の宣言 */
var fruits = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(fruits[1][1]); //5
/** 空の配列の宣言方法(最も良いVer)シンプルだかららしいです */
var animal = [];
/** 連想配列の宣言方法 */
var obj = {
    'hoge': 'ほげ',
    'foo': 'ふう',
    'bar': 'ばー'
};
console.log(obj); //{ hoge: 'ほげ', foo: 'ふう', bar: 'ばー' }
console.log(obj.hoge); //ほげ-> プロパティ構文
console.log(obj['hoge']); //ほげ-> ブラケット構文
var obj2 = {
    'hoge': 'ほげhoge',
    'foo': 'ふう',
    'bar': 'ばー'
};
console.log(obj2.hoge);
