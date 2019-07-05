// 1. Stwórz funkcję wait(ms). Ma ona zwrócić oczekującą (pending) obietnicę, która ma być dotrzymana 
// (resolved) po wybranej ilości milisekund. Obietnica zwrócona z tej funkcji nie powinna 
// być nigdy odrzucona (rejected).

function wait(ms){
    return new Promise( (resolve, reject) => {
        setTimeout( () => resolve( console.log('minelo ' + ms +" ms") ), ms);    
    });
}

// 2. Stwórz funkcję delayedError(ms, message), która ma zwracać oczekującą obietnicę 
//     i odrzucić ją po zadanym czasie w milisekundach (ms) przekazując jej w wartości 
//     obiekt Error z zadaną wiadomością (message). Obietnica zwrócona z tej funkcji nie powinna
//     być nigdy dotrzymana (resolved).

function delayedError(ms, message){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> reject(new Error('odrzucam po ' + ms + ' ms' ) ), ms);
    });
}

// 3. Stwórz funkcję isEven(num), zwracającą obietnicę, która ma natychmiast być dotrzymana jeśli przekazana 
// została liczba. Wartością ma być true jeśli liczba jest parzysta, false jeśli nieparzysta. 
// Obietnica ma być natychmiast odrzucona jeśli is argument funkcji nie jest liczbą całkowitą.

function isEven(num){
    return new Promise( (resolve, reject) => {
        if(Number.isInteger(num)){
            num % 2 === 0 ? resolve(true) : resolve(false)        
        }
        else{
            reject(new Error('liczba nie jest liczba calkowita'));
        }
    });
}

// 4. Stwórz funkcję slowIsEven(num, ms=1000), która robi to samo co funkcja isEven ale po zadanym czasie 
// w milisekundach. Wykorzystaj do implementacji funkcję isEven oraz wait.
function slowIsEven(num, ms=1000){
    wait(ms).then( () => isEven(num).then( (res)=> console.log("wynik sprawdzenia: " + res)));
}

// 5. Stwórz funkcję timeout(promise, ms=3000), zwracającą obietnicę, która ma być dotrzymana gdy przekazana 
// obietnica zostanie dotrzymana i otrzymać jej wartość. Chyba, że upłynie zadany czas w milisekundach, 
// to obietnica ma być odrzucona. Wykorzystaj do implementacji funkcję delayedError

function timeout(promise, ms=3000){
    return new Promise( (resolve, reject) => {

        
        if(promise.status === "resolved")
        {
            resolve(promise.value)
        }
        else{
            setTimeout(()=> {
                reject(promise);
            });            
        }
    });
}

// Przykład do punktu 5
// timeout(slowIsEven(5, 1000), 3000) // ma dotrzymać obietnicy z wartością false po sekundzie
// timeout(slowIsEven(5, 4000), 2000) // ma odrzucić obietnicę po dwóch sekundach