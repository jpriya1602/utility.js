function tail(list){
    if(list.length == 0)
        return [];
    return list.slice(1);
    
}
module.exports = tail;