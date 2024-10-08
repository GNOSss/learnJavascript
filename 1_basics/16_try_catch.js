/**
 * try..catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 * 
 * etc) finally는 선택적인 구문
 */

function runner(){
    try{                        //try 블록 실행
    console.log('hello')
    
    throw new Error('에러 발생'); // throw 구문 실행되어 에러 객체를 던짐 

    console.log('world')
    } catch(e){                 // throw 구문을 통해 catch 블록 실행
        console.log('---catch---');
        console.log(e);         // 형식매개변수(e)에는 실제 매개변수 new Error('에러발생'); 이 들어감
    } finally {                 // try에서 에러발생해서 catch실행함 , 그럼에도 불구하고 finally는 실행 됨 ex) SQL에서 session.close() 수행할때 쓸지도?
        console.log('=====finally=====');
    }
}

runner();





// function seungsoo(init){
//     let bora = init; // temp 
//     let getter = () => {
//         return bora
//     }
//     const setter = function(value){
//         if  (!value) {
//            return bora;
//         }
//         bora = value
//         return bora; 
//     };

    

//     return [getter, setter];
// }

// let [state, setState] = seungsoo(1);

// let state = 'dsdasdasdasd'

// // setState(2);
// console.log(()) // 1


// class State {
//     constructor(init) {
//         this.state = init;
//     }

//     get state () { return this.state; }

//     set setState(value) {//+
//         if (!value) {//+
//             return this.state;//+
//         }
//         this.state = value;//+
//         return this.state;//+
//     }//+
// }


// new State() 