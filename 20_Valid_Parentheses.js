var isValid = function(s) {
    const stack = [];
    for(let i=0;i<s.length;i++){
        const c = s.charAt(i);
        if(c==='('||c==='{'||c==='['){
            stack.push(c);
        }else{
            const peek = stack.pop();
            if(
                (peek==='('&&c===')')||
                (peek==='{'&&c==='}')||
                (peek==='['&&c===']')
                ){
            }else{
                return false;
            }
        }
    }
    return stack.length===0;
};