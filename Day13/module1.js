const add = (num1,num2)=>{
    let c = num1+num2
    console.log(c);
}


const obj = {
    fname : 'jhon',
    surname : 'doe',
    
    getFullName : function(){
        return this.fname + ' ' + this.surname
    }
}


const fun = ()=>{
    return 1+2
}

function calculator(n1,n2){
    return n1+n2
}
module.exports = { add,obj,fun,calculator };
