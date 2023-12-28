// >>Bài tập 1:
// Viết chương trình nhập vào một chuỗi nếu độ dài của chuỗi ít nhất là 3 - thêm "ing" vào chuỗi đó,
// trường hợp chuỗi kết thúc bằng "ing" - thêm "ly".
// *input: play => output: playing
// *input: go => output: go
// *input: running => output: runningly
// *gợi ý: sử dụng substr()

function myString(inputString) {
        if (inputString.length >= 3) {
        if (inputString.substr(-3) === "ing") {
            inputString += "ly";
        } else {
            inputString += "ing";
        }
    }
    return inputString;
}

console.log(myString("play"));   
console.log(myString("go"));      
console.log(myString("running"));  




// >>Bài tập 2:
// Viết một hàm nhận một chuỗi làm đầu vào và trả về một chuỗi mới 
// với tất cả các chữ cái viết hoa được viết thường và tất cả các chữ cái viết thường được viết hoa.
// *input: "TRung Nghai" => output: "trUNG nGHAI"
// *gợi ý: 
// replace(): Thay thế tất cả các ký tự khớp với một biểu thức chính quy bằng một chuỗi khác.
// toUpperCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ hoa.
// toLowerCase(): Chuyển đổi tất cả các chữ cái trong một chuỗi thành chữ thường.



function swapCase(inputString) {
    return inputString.replace(/[a-zA-Z]/g, function (match) {
        return match === match.toLowerCase() ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(swapCase("TRung Nghai"));  




// >>Bài tập 3:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử "không phải số" được xóa bỏ.
// *input:[1, "a", 2, "b", 3] output: [1, 2, 3]
// *gợi ý:
// filter(): Lọc một mảng bằng cách chỉ giữ lại các phần tử thỏa mãn một điều kiện nhất định.
// isNaN(): Kiểm tra xem một giá trị có phải là số ko.



function myArray(arr) {
    return arr.filter(function (element) {
        return !isNaN(element) && typeof element !== 'string';
    });
}
 
console.log(myArray([1, "a", 2, "b", 3]));  


// >>Bài tập 4:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với các phần tử được sắp xếp theo thứ tự giảm dần.
// *input:[1, 5, 3, 2] output: [5, 3, 2, 1] 
// *gợi ý:sort(): Sắp xếp một mảng theo thứ tự tăng dần.





function myArray(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    });
}
 
console.log(myArray([1, 5, 3, 2]));   





// >>Bài tập 5:
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử được nhân với 2.
// *input: [1, 2, 3] output: [2, 4, 6]
// *gợi ý: sử dụng map()


function myArray(arr) {
    return arr.map(function (element) {
        return element * 2;
    });
}

console.log(myArray([1, 2, 3]));  




// >>Bài tập 6
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới chỉ có số lẻ.
// *Input: [1, 2, 3, 4, 5, 6, 7] => Output: [1, 3, 5, 7]
// *Gợi ý phương thức: push()




function myArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }

    return result;
}
 
console.log(myArray([1, 2, 3, 4, 5, 6, 7]));   




// >>Bài tập 7
// Viết một hàm nhận một mảng làm đầu vào và trả về một mảng mới với tất cả các phần tử lặp lại được loại bỏ.
// *input:[1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2] => output: [1, 2, 3, 4, 5]
// *gợi ý: sử dụng indexOf(), push()



function myArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
}
 
console.log(myArray([1, 2, 3, 1, 2, 3, 4, 5, 3, 1, 2]));  
