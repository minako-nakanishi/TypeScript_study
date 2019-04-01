let mail:string = 'admin@example.con'; //string型で宣言

/** バッククオートの使い道 
 * 改行文字を正規表現で書かなくてもOK
*/
let msg = `管理者のメールアドレス
は${mail}ですわ`;


console.log(msg);