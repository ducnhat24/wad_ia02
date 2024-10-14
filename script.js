document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("firstNumber").addEventListener("blur", validateNumber);
document.getElementById("secondNumber").addEventListener("blur", validateNumber);

function validateNumber() {
    const value = this.value;
    const notification = document.getElementById("notification");

    if (isNaN(value) || value.trim() === "") {
        notification.textContent = `Giá trị nhập    ở ô ${this.id === "firstNumber" ? "Số thứ nhất" : "Số thứ hai"} không phải là số hợp lệ.`;
        this.classList.add("is-invalid");
    } else {
        notification.textContent = "";
        this.classList.remove("is-invalid");
    }
}

function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultField = document.getElementById("result");
    const notification = document.getElementById("notification");

    resultField.value = "";
    notification.textContent = "";

    if (isNaN(firstNumber)) {
        notification.textContent = "Giá trị nhập ở ô Số thứ nhất không phải là số hợp lệ.";
        return;
    }

    if (isNaN(secondNumber)) {
        notification.textContent = "Giá trị nhập ở ô Số thứ hai không phải là số hợp lệ.";
        return;
    }

    if (!operation) {
        notification.textContent = "Vui lòng chọn một phép toán.";
        return;
    }

    let result;
    switch (operation.value) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            if (secondNumber === 0) {
                notification.textContent = "Không thể chia cho 0.";
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            notification.textContent = "Phép toán không hợp lệ.";
            return;
    }

    resultField.value = result;
}
