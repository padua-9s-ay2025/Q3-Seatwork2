function updateDiscount() {
    let budget = document.getElementById("budget").value;
    let discount = budget * 0.2;

    document.getElementById("discount").innerHTML = `
    <div class="container-fluid text-center"><div class="row"><div class="col-md-3"><div class="mt-3"><h3>Popular Models</h3> 
    <button type="button" class="btn btn-outline-light">Asus</button>
    <button type="button" class="btn btn-outline-light">Razer</button>
    <button type="button" class="btn btn-outline-light">Acer</button>

    <p>Eligible Discount: <span id="discountValue"></span></p>
    <div id="discount"></div>
    <button type="button" class="btn btn-outline-light" onclick="updateDiscount()">Check Discount</button>
    <button type="button" class="btn btn-warning" onclick="window.location.reload()">Refresh</button>
    <span id="discountValue"></span>
    </div></div></div></div></div>`;
    document.getElementById("discountValue").innerHTML = discount;
}

function storeLocation() {
   document.getElementById("location").innerHTML = `
   <div class="container-fluid text-center">
        <div class="row">
            <div class="col-md-3">
                <div class="mt-3">
                    <h3>Location:</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iaDgZB2DTWtY_RLeAPBcE2OarYAZKWReCw&s" width="300">
                    <p>
                    - Metro Manila: SM North EDSA (4/F Annex), SM Mall of Asia, SM Megamall, Glorietta 3, One Ayala, SM Grand Central, SM Southmall, SM City Sucat, SM City San Lazaro, Market! Market!, SM Marikina.<br>
                    - Luzon: SM City Bataan, SM City Calamba, SM City Legazpi, SM City Tuguegarao, SM City Urdaneta Central, SM Clark, SM City Sta. Rosa.<br>
                    - Visayas/Mindanao: SM City Bacolod, SM City Iloilo, SM Seaside City Cebu, SM City Butuan, SM City Mindpro, KCC Gensan.
                   </p>
                </div>
            </div>
        </div>
    </div>`;
}
