var isMomHappy = false;

var willIGetNewPhone = new Promise(
    function(resolve,reject){
        if(isMomHappy){
            var reason = 'I am so getting a phone';
            var phone = {
              brand: 'Samsung',
              color: 'black'
            };
            resolve(reason);
            resolve(phone);
        }else{
            var reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);

var askMom = function(){
    willIGetNewPhone.then(function(fulfilled){
       console.log(fulfilled);
    })
        .catch(function(error){
            console.log(error.message);
        });
};
askMom();








