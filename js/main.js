//declaring the variables
var bill = document.querySelector("#bill input");
var peopleCount = document.querySelector("#people-count input");
var box = document.getElementsByClassName("box");
var custom = document.querySelector(".box input");
var tipamount = document.querySelector("#tip-amount input");
var totalamount = document.querySelector("#total input");
var reset = document.querySelector("#output button");
var error_bill = document.querySelector(".error.bill");
var error_peoplenumber = document.querySelector(".error.peoplenumber");

//events
bill.addEventListener("click",function(){
	if(bill.value == 0){
		bill.value = "";
	}
    bill.classList.remove("active");
    error_bill.style.display = "none";
});
peopleCount.addEventListener("click",function(){
	if(peopleCount.value == 0){
		peopleCount.value = "";
	}
    peopleCount.classList.remove("active");
    error_peoplenumber.style.display = "none";
});

for(a=0;a<6;a++){
    if(a!==5){
	box[a].addEventListener("click",function(){

		//setting classes
		  var elems = document.querySelector(".box.active");
        if(elems !==null){
            elems.classList.remove("active");
        }
     this.classList.add("active");

     //getting percentage
       var tippp = this.innerHTML;
     //calculation
       if(bill.value == 0){

       	  bill.classList.add("active");
          error_bill.style.display = "block";
       }else if(peopleCount.value == 0){
          peopleCount.classList.add("active");
          error_peoplenumber.style.display = "block";
       }else{
       	//tip 
       	var tip = (bill.value * (tippp/100))/peopleCount.value ;
       	tip = tip.toFixed(2);
       	tipamount.value = "$" + tip;

        //total
        tip = parseFloat(tip);
        var total = (bill.value/peopleCount.value);
        total = total.toFixed(2);
        total = parseFloat(total);
        var totalam = tip + total ;
        totalamount.value ="$" + totalam ;
       };
       
    //change color of reset button
   var relems = document.querySelector(".reset.active");
        if(relems !==null){
            
        }else{
            reset.classList.add("active");
        }
	  });
}else{
    custom.addEventListener("keyup",function(){
            tippp = this.value;

            //changing color of reset button
            var relems = document.querySelector(".reset.active");
        if(relems !==null){
            
        }else{
            reset.classList.add("active");
        }

    //calculation
        if(bill.value == 0){
-
          bill.classList.add("active");
          error_bill.style.display = "block";
       }else if(peopleCount.value == 0){
          peopleCount.classList.add("active");
          error_peoplenumber.style.display = "block";
       }else{
        //tip 
        var tip = (bill.value * (tippp/100))/peopleCount.value ;
        tip = tip.toFixed(2);
        tipamount.value = "$" + tip;

        //total
        tip = parseFloat(tip);
        var total = (bill.value/peopleCount.value);
        total = total.toFixed(2);
        total = parseFloat(total);
        var totalam = tip + total ;
        totalamount.value ="$" + totalam ;
       };
    });
};
};

//resetting
reset.addEventListener("click",function(){
    bill.value = "0";
    peopleCount.value = "0";
    tipamount.value = "$" + 0.00;
    totalamount.value = "$" + 0.00;
    custom.value = "";
    this.classList.remove("active");
    bill.classList.remove("active");
    peopleCount.classList.remove("active");
    error_bill.style.display = "none";
    error_peoplenumber.style.display = "none";
    
    var elems = document.querySelector(".box.active");
        if(elems !==null){
            elems.classList.remove("active");
    };
});

