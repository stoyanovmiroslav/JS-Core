(function() {
    return {
        add: (arr1, arr2) => [arr1[0] + arr2[0], arr1[1] + arr2[1]],
        multiply: (arr, scalar) => [arr[0] * scalar, arr[1] * scalar],
        length: (arr) => Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2)),
        dot: (arr1, arr2) => (arr1[0] * arr2[0]) + (arr1[1] * arr2[1]),
        cross: (arr1, arr2) => arr1[0] * arr2[1] - arr1[1] * arr2[0]
    }
}());