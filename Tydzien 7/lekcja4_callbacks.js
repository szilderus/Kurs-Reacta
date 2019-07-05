// 1. Stwórz funkcję sleep(ms, onSuccess, onError) która ma uruchomić callback onSuccess po wybranej
// ilości milisekund, chyba że użytkownik zażąda mniej niż 5 a więcej niż 4000. 
// W takim przypadku ma uruchomić callback onError.

function success(){
    console.log("success");
}

function error(){
    console.log("error");
}

function sleep(ms, onSuccess, onError){
    if(ms > 5 && ms < 4000){
        onSuccess()
    }
    else{
        onError()
    }
}


function slowRand(n, ms = 100) {
    return new Promise( (onSuccess, onError) => {
     	if(n < 1){
             setTimeout(()=> onError(new Error("n has to be greater than 1" )));             
         }   else {
             setTimeout( ()=> onSuccess(Math.floor(Math.random() * n) + 1), ms);
         }
    });
}


