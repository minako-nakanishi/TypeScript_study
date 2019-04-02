/**
 * 列挙型
 *  列挙型に属する定数(今回はMALE, FEMALE,UNKNOWN)は「列挙子」と呼ばれる.
 *   列挙子にはデフォルトで0,1,2, …と番号が振られる
 *  */
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["UNKNOWN"] = 2] = "UNKNOWN";
})(Gender || (Gender = {}));
// Maleにアクセス
var male = Gender.MALE;
console.log(male); //0
console.log(Gender[male]); // MALE
var female = Gender.FEMALE;
console.log(Gender[female]);
