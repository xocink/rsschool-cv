function divCon(x) {

    let int_from_array = x.filter(elem => {
        if (typeof elem == "string") return false
        else return true
    });
    let str_from_array = x.filter(elem => typeof elem == "string");
    if (int_from_array.length !== 0 && str_from_array.length !== 0) {
        let int_sum = int_from_array.reduce(function (prev, cur) {
            return +prev + +cur;
        })

        let sum_str = str_from_array.reduce(function (prev, cur) {
            return +prev + +cur
        })
        return Number(int_sum - sum_str);
    } else if (int_from_array.length === 0){
        let sum_str_1 =  str_from_array.reduce(function (prev, cur) {
            return Number(0 -(+prev + +cur));
        });
        return 0-sum_str_1
    } else if (str_from_array.length === 0) {
        return int_from_array.reduce(function (prev, cur) {
            return Number(+prev + +cur);
        });
    }

}

console.log(divCon([ '8']))