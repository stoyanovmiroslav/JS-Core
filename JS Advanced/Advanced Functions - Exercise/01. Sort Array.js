function sortArray(arr, sort){
    let ascendingComparator = function (a, b) {
        return a - b;
    };

    let descendingComparator = function (a, b) {
        return b - a;
    };

    let sortStrategy = {
        'asc': ascendingComparator,
        'desc': descendingComparator,
    };

    return arr.sort(sortStrategy[sort]);
}

sortArray([14, 7, 17, 6, 8], 'asc');