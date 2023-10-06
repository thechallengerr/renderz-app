<h1 align="center">Javascript ES6</h1>


# 1. let, var, const
- **var**: scope của các biến khai báo bởi `var` có thể là local cũng có thể là global.
  - Có thể khai báo lại biến
  - Hoisting : 
- **let**
    -  cũng giống như var nhưng scope của nó là block-scope
        ```javascript
            let x = 10;
            if (x == 10) {
                let x = 20;
                console.log(x); // 20:  reference x inside the block
            }
            console.log(x); // 10: reference at the begining of the script
        ```
    - Trong ES6, `let` sẽ khai báo 1 biến mới trong mỗi vòng lặp
        ```javascript
            for (let i = 0; i < 5; i++) {
                setTimeout(function () {
                    console.log(i);
                }, 1000);
            }
            /* Nếu thay let bằng var, kết quả nhận được sẽ là 
            5 
            5 
            5 
            5 
            5 
            */
        ```
    - Khai báo lại biến gây ra lỗi 
    - Hoisting : Javascript sẽ hoist các biến khai báo với `let` nhưng chưa khởi tạo nó ngay vì thế khi truy cập biến này ra sẽ nhận được Reference Error 
        ```javascript
            {
                console.log(counter); // 
                let counter = 10;    
            }
            //Uncaught ReferenceError: Cannot access 'counter' before initialization
        ```
- **const**
  - scope : tương tự let
  - hoisting : tương tự let
- So sánh var,let,const 
<table style="width:100%;">
    <tbody>
        <tr></tr>
        <tr>
            <td></td>
            <td>Scope</td>
            <td>Redeclare</td>
            <td>Reassign</td>
            <td>Hoisted</td>
            <td>Binds this</td>
        </tr>
        <tr>
            <td>var</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td>let</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
        </tr>
        <tr>
            <td>const</td>
            <td>Yes</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
            <td>No</td>
        </tr>
    </tbody>
</table>


# 2. Kiểu dữ liệu
- JavaScript có 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
- The object data type có thể chứa:

1. object
2. array
3. date

- Some fun example:
    ```javascript
    let x = 16 + "Volvo";
    // treated as the following:
    let x= "16" + "Volvo";
    // Note : When adding a number and a string, JavaScript will treat the number as a string.
    console.log(typeof undefined)
    //undefined
    console.log(typeof null)
    //Object
    console.log(typeof NaN)
    //Number

    //There are only six falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false of course.
    console.log(Boolean('')) // false
    ```

# 3. Các toán tử
# 4. Loop
# 5. Điều kiện if...else, switch...case 
# 6. Array Method
- `Array.reduce()`:
  - Thực thi callback function trên từng phần tử mảng từ trái sang phải
  - Không làm thay đổi mảng ban đầu
  - Callback function nhận 4 tham số 
    - total (the initial value / previously returned value)
    - value
    - index
    - array
- `Array.map()`
  - The `map()` method creates a new array by performing a function on each array element.

  - The `map()` method does not execute the function for array elements without values.

  - The `map()` method does not change the original array.
  - ```javascript
        const numbers1 = [45, 4, 9, 16, 25];
        const numbers2 = numbers1.map(myFunction);

        function myFunction(value, index, array) {
        return value * 2;
        }
    ```
- `Array.forReach()`:
  - The forEach() method calls a function (a callback function) once for each array element.
  - Làm thay đổi mảng ban đầu
- `Array.filter()`
- `Array.every()` : kiểm tra xem liệu tất cả phần tử nào của mảng thỏa mãn 1 yêu cầu nào đó. đúng sẽ trả về true và ngược lại
- `Array.some()` : kiểm tra xem liệu có phần tử nào của mảng thỏa mãn 1 yêu cầu nào đó. đúng sẽ trả về true và ngược lại
- `Array.indexOf()` : tim trong mảng phần từ có giá trị cho trước và trả lại vị trí của phần tử đó
- `Array.find()` : trả lại giá trị của phần từ mảng đầu tiên thỏa mãn điều kiện của hàm test

# 7. Đồng bộ, Bất đồng bộ, promise
# 8. API handle (Fetch, XMLHttpRequest)
# 9. let, var, const
# 10. let, var, const

