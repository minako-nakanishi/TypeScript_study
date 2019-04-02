/** 配列の宣言 */
let data:string[] = ['Java', 'Python', 'PHP', 'Ruby']; //データ型の後ろに[]を付加する
console.log(data); //[ 'Java', 'Python', 'PHP', 'Ruby' ]
console.log(data[0]); //Java

/** 多次元配列の宣言 */
let fruits:number[][] = [[1,2,3],[4,5,6],[7,8,9]];
console.log(fruits[1][1]); //5

/** 空の配列の宣言方法(最も良いVer)シンプルだかららしいです */
let animal:string[] = [];

/** 連想配列の宣言方法 */
let obj: {[key: string]:string}={
    'hoge': 'ほげ',
    'foo': 'ふう',
    'bar': 'ばー'
};
console.log(obj); //{ hoge: 'ほげ', foo: 'ふう', bar: 'ばー' }
console.log(obj.hoge); //ほげ-> プロパティ構文
console.log(obj['hoge']); //ほげ-> ブラケット構文

/** インターフェースを使って宣言 */
// interfaceで中身を宣言しておく
interface StringMap{
    [index: string]:string;
}
let obj2:StringMap = {
    'hoge': 'ほげhoge',
    'foo': 'ふう',
    'bar': 'ばー'
};
console.log(obj2.hoge); //ほげhoge


