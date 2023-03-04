function subSum(arr,start,end) {
    
    if(!Array.isArray(arr)) { 
        return NaN;
    }

    start = Math.max(0, start);
    end = Math.min(arr.length - 1, end + 1);
    
    return arr.slice(start, end)
        .reduce((acc, num) => acc += Number(num), 0);
}