let callback = returnsAnAnonymousFunction
function receivesAFunction(callback){
callback()
};
function returnsANamedFunction(){
return callback
};
function returnsAnAnonymousFunction(){
return function(){

};
};