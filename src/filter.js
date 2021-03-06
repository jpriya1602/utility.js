function filter(list,Function,result){
    if(list.length == 0)
        return result;
    if(Function(list[0])){
        result.push(list[0]);
    }
    return filter(list.slice(1),Function,result);

}
module.exports = filter