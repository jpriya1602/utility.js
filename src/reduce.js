function reduce(list,Function,acc)
{
    if(list.length == 0)
        return acc;
    
    else if (acc == undefined && list.length != 0){
        if(typeof(list[0]) === 'string')
            acc = "";
        else if(typeof(list[0]) === 'number') 
            acc = 0;
    }
    acc = Function(acc,list[0]);
    return reduce(list.slice(1),Function,acc);
}

module.exports = reduce;