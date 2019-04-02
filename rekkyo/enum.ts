/** 
 * 列挙型
 *  列挙型に属する定数(今回はMALE, FEMALE,UNKNOWN)は「列挙子」と呼ばれる.
 *  列挙子にはデフォルトで0,1,2, …と番号が振られる
 *  */
enum Gender{
    MALE,
    FEMALE,
    UNKNOWN
}
// Maleにアクセス
let male: Gender = Gender.MALE;
console.log(male); //0
console.log(Gender[male]); // MALE

let female:Gender = Gender.FEMALE;
console.log(Gender[female]); // FEMALE