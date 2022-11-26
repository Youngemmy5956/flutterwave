const form = document.getElementById("PayForm")
form.addEventListener("submit", payNow);

function payNow(e){
    //prevent normal form submit
    e.preventDefault();

    //set configurations
    FlutterwaveCheckout({
       public_key: "FLWPUBK_TEST-56b2efd3edd36fdc4bbb640efbd7f207-X",
       tx_ref: "em_"+Math.floor((Math.random()*100000000)+1),
       amount: document.getElementById("amount").value,
       currency: "NGN",
      customer: {
        
            email: document.getElementById("email").value,
            phonenumber: document.getElementById("phoneNumber").value,
            fullName: document.getElementById("fullName").value,
      },
      callback:function(data){
        // console.log(data);

        const reference = data.tx_ref;
        alert("Payment was successfully completed!!" +reference)
      },
      customizations:{
        'title': 'Beatsbymxrc payment',
        'description': 'Testing flutterwave Payment',
        'logo':''
      }
    }); 
}