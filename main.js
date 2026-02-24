function updateDiscount() {
    let budget = document.getElementById("budget").value;
    let discount = budget * 0.2;

    document.getElementById("discount").innerHTML = "Your discount is " + discount; 
    document.getElementById("discountValue").innerHTML = discount;
}