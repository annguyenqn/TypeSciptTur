// expect: 2 tham số là type number và hàm sum return về 1 data type number;
function sum(a: number, b: number): number {
    return a + b
}
// console.log(sum(1, 2));

//Functions Which Return Promises:
// chỉ định hàm trả về 1 promise.
// Hàm trả về 1 promise với resolve là number type.

function getNum(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 1000)
    });
}
// getNum()
//     .then(res => {
//         console.log('resolve:', res);
//     })
// Anonymous Functions: funtion không tên thường được sử dụng như call back function.
// Object Types:
function getStudentPoint(obj: { name: string, point: number, Address?: string }): number {
    return obj.point;
}
let st1: { name: string, point: number, Address?: string } = {
    name: 'Nguyen A',
    point: 20,
    Address: 'Quy Nhon'
}
let st2: { name: string, point: number, Address?: 'string' } = {
    name: 'Van b',
    point: 50
}
// console.log(getStudentPoint(st2));
//-----------------UnionTypes-------------------
//Không thể sử dụng các phương thức cho chỉ 1 type( ví dụ không thể upercase hàm có union type là string| number )
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// printId(101);
// printId("202");

// Ta có thể sử dụng phương thức cho từng type bằng cách check type trc khi xử lý trong hàm
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
//--------------Aliases type---------
type User = {
    id: number;
    username: string;
    email: string;
};

type Post = {
    id: number;
    title: string;
    content: string;
    author: User;
};

// Sử dụng các Type Aliases để khai báo các biến
let currentUser: User;
let currentPost: Post;
//----------
type Dict<T> = { [key: string]: T };

let usersById: Dict<User> = {
    "1": { id: 1, username: "user1", email: "user1@example.com" },
    "2": { id: 2, username: "user2", email: "user2@example.com" },
    //...
};
//Trong ví dụ này, Dict<T> là một Type Alias cho một đối tượng có cấu trúc giống với một
// dictionary trong JavaScript, nhưng chỉ chấp nhận các giá trị có kiểu T. 
//Sử dụng Dict<User> làm cho mã trở nên ngắn gọn và dễ hiểu hơn so với việc sử dụng kiểu dữ liệu {[key: string]: User}.
//----------------------------Interface------------------
// Định nghĩa một Interface có tên là Person
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    Speak(): void;
}
// Khai báo một đối tượng sử dụng Interface Person
let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,

    Speak() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};
// Gọi phương thức greet() của đối tượng person
person.Speak();

//--------------------Type Assertions---------------
// Dùng để ép kiểu.
// có 2 cách viết
// sử dụng as
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;
// sử dụng <>
// let someValue2: any = "this is a string";
// let strLength2: number = (<string>someValue).length;
//----------------------Literal Types ------------
let direction: "left" | "right" | "up" | "down";
direction = "left"; // Hợp lệ
direction = "right"; // Hợp lệ
direction = "up"; // Hợp lệ
// direction = "diagonal"; // Lỗi: "diagonal" không phù hợp với kiểu dữ liệu literal đã chỉ định
//--------------Enums-----------
enum BookStatus {
    Available,
    Borrowed,
    Reserved
}
class Book {
    constructor(public title: string, public author: string, public status: BookStatus) { }
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", BookStatus.Available);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", BookStatus.Borrowed);
let book3 = new Book("1984", "George Orwell", BookStatus.Reserved);

function getStatusMessage(book: Book): string {
    switch (book.status) {
        case BookStatus.Available:
            return "This book is available.";
        case BookStatus.Borrowed:
            return "This book is currently borrowed.";
        case BookStatus.Reserved:
            return "This book is reserved for someone.";
        default:
            return "Unknown status";
    }
}

console.log(getStatusMessage(book1)); // Output: This book is available.
console.log(getStatusMessage(book2)); // Output: This book is currently borrowed.
console.log(getStatusMessage(book3)); // Output: This book is reserved for someone.
//---------------So sánh Enum với Literal Types ----------------

//---------------Null and undefined--------------
