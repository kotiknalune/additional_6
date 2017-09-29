module.exports = function zeros(expression) {

	var arr=expression.split("*")
	var stack=""
function Version(v){
 	var f = 1;
 	for(i = 2; i <= v;i++){
 	 	f *= i;
  		stack += String(f).match(/0*$/)[0];
  		while(f%10 == 0){
  			f /= 10
  		}
 		f = String(f);
  		f = Number(f[f.length-1])
 	}
	return f
}
function Version2 (v){
	var f=1
	for (i=v%2==0?2:3; i<=v; i+=2){
		f *= i;
  		stack += String(f).match(/0*$/)[0];
  		while(f%10 == 0){
  			f /= 10
  		}
 		f = String(f);
  		f = Number(f[f.length-1])
 	}
	return f		
}
arr=arr.map(function (v,i)
{
	if(v.indexOf("!!")==-1){
		return Version(parseInt(v))
	}else{
		return Version2(parseInt(v))
	}
})
var numb=arr.reduce(function (a,b){
return a*=b})
while(numb%10==0)
	{stack +="0"; numb=numb/10}
return stack.length
}
