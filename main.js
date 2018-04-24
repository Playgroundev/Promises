var isMomHappy = true;

var willIGetNewPhone = new Promise(
    function(resolve,reject){
        if(isMomHappy){
            var reason = 'I am so getting a phone';
            var phone = {
              brand: 'Samsung',
              color: 'black'
            };

            resolve(phone);
        }else{
            var reason = new Error('mom is not happy');
            reject(reason);
        }
    }
);
var askMom = function(){
    console.log('before asking mom')
    willIGetNewPhone.then(showOff).then(function(fulfilled){
        console.log(fulfilled);
    })
        .catch(function(error){
            console.log(error.message);
        });
};


var showOff = function(phone){
    return new Promise(
        function(resolve,reject){
            var message = 'Hey Friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
            resolve(message);
        }
    );
};
/*The Below Code Describes the task in EmmaScript Version 6*/
const isMomHapp = false;

const getNewPhone = new Promise(
    (resolve,reject) =>{
        if(isMomHapp){
            const phon = {
                brand: 'Samsung',
                color: 'Black',
            };
            resolve(phon);
        }else{
            const reaso = new Error('Mom is not happy');
            reject(reaso);
        }
    }
);
const showOf = function(phon){
    const message = "Hey Friend, I have a new " + phon.color + ' ' + phon.brand + ' phone';
    return Promise.resolve(message);
};

const askMo = function(){
    getNewPhone.then(showOf).then(fulfilled => console.log(fulfilled)).catch(error => console.log(error.message));
}
askMom();
askMo();