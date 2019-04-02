/**
 * letで同じ変数名で宣言を試みるとエラーとなる
 */
var app = 1;
// let app:number = 2; //Cannot redeclare block-scoped variable 'app'.
/**
 * varで同じ変数名だた違う型で宣言した場合(エラーとなる)
 */
var sam = 100;
// var sam: string = 'hoge'; //Subsequent variable declarations must have the same type.  Variable 'sam' must be of type 'number', but here has type 'string'.
