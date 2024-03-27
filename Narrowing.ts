function exampleFunction(x: string | number) {
    if (typeof x === "string") {
        // Ở đây, x được narrowing thành kiểu 'string'
        console.log(x.toUpperCase());
    } else {
        // Ở đây, x được narrowing thành kiểu 'number'
        console.log(x.toFixed(2));
    }
}
