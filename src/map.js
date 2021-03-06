function map(list,Function,result){
    if (list.length == 0)
        return result;
    result.push(Function(list[0]));
    return map(list.slice(1),Function,result);
}

module.exports = map;