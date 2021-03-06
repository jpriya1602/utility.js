function max(list){
    var maximum = list[0];
    for(var i = 1;i<list.length;i++){
        if (maximum < list[i]){
            maximum = list[i];
        }
    }
    return maximum;
}

module.exports = max;