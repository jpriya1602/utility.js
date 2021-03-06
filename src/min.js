function min(list){
    var minimum = list[0];
    for(var i = 1;i<list.length;i++){
        if (minimum > list[i]){
            minimum = list[i];
        }
    }
    return minimum;
}

module.exports = min;