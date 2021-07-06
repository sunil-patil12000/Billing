let con=document.getElementById("hcon");
function ninv(){
con.innerHTML=`<h3 class="fw-bold">New Invoice</h3>
<div class="container-fluid invf">
    <div class="row">
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Invoice No.</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Invoice No">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Invoice No">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label d-block">Pay Type</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                    value="Pay">
                <label class="form-check-label" for="inlineRadio1">Pay</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                    value="Due">
                <label class="form-check-label" for="inlineRadio2">Due</label>
            </div>
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Client Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Client Name">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Address</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address">
        </div>

    </div>
</div>
<div class="container-fluid mt-2 invf">
    <div class="row">
        <div class="col-lg-3">
            <label for="exampleFormControlInput1" class="form-label">Itme Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Itme Name">
        </div>
        <div class="col-lg-3">
            <label for="exampleFormControlInput1" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Quantity">
        </div>
        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price">
        </div>
        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">Disc.</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Discontent">
        </div>
        <div class="col-lg-2">
            <button class="btn btn-primary mt-4 fw-bolder">+</button>
        </div>
    </div>
    <div class="container m-2">
        <table class="table">
            <thead class="table-primary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Itme Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Disc.</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
<div class="container-fluid invf">
    <div class="row">
        <div class="col-lg-3">
            <label for="exampleFormControlInput1" class="form-label">Net Total</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="col-lg-3">
            <label for="exampleFormControlInput1" class="form-label">Bill Type</label>
            <select class="form-select" aria-label="Default select example">
                <option selected value="GST">GST</option>
                <option value="Non GST">Non GST</option>

            </select>
        </div>
        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">Total</label>
            <select class="form-select" aria-label="Default select example">
                <option value="5">5%</option>
                <option selected value="18">18%</option>
                <option value="25">25%</option>

            </select>
        </div>

        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">Total</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="col-lg-2">
            <button type="button" class="btn btn-primary">Save</button>
        </div>
    </div>

</div>`

}
function npur(){
    con.innerHTML=`<h3 class="fw-bold">New Purchase</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Invoice No.</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Invoice No">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Invoice No">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label d-block">Pay Type</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                        value="Pay">
                    <label class="form-check-label" for="inlineRadio1">Pay</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                        value="Due">
                    <label class="form-check-label" for="inlineRadio2">Due</label>
                </div>
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Dealer Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Dealer Name">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address">
            </div>
    
        </div>
    </div>
    <div class="container-fluid mt-2 invf">
        <div class="row">
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Itme Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Itme Name">
            </div>
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Quantity">
            </div>
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Price</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price">
            </div>
            
            <div class="col-lg-2">
                <button class="btn btn-primary mt-4 fw-bolder">+</button>
            </div>
        </div>
        <div class="container m-2">
            <table class="table">
                <thead class="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Itme Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </div>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Net Total</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Bill Type</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected value="GST">GST</option>
                    <option value="Non GST">Non GST</option>
    
                </select>
            </div>
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Total</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="5">5%</option>
                    <option selected value="18">18%</option>
                    <option value="25">25%</option>
    
                </select>
            </div>
    
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Total</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="col-lg-2">
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>
    
    </div>`
}

function ainv() {
    con.innerHTML=`<h3>All Invoice</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-12">
                <label for="exampleFormControlInput1" class="form-label">Search</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter client Name" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                  </div>
            </div>
        </div>

    </div>
    <div class="container-fluid invf mt-2">
        <table class="table">
            <thead class="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Invoice No</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <a href="#"><th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td></a>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

    </div>`
}
function apur(){
    con.innerHTML=`<h3>All Purchase</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-12">
                <label for="exampleFormControlInput1" class="form-label">Search</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter client Name" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                  </div>
            </div>
        </div>

    </div>
    <div class="container-fluid invf mt-2">
        <table class="table">
            <thead class="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Invoice No</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <a href="#"><th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td></a>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

    </div>`
}
function nqut() {
    con.innerHTML=`<h3 class="fw-bold">New Quotation</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Quotation No.</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Quotation No">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>

            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Client Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Client Name">
            </div>
            <div class="col-lg-4">
                <label for="exampleFormControlInput1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address">
            </div>

        </div>
    </div>
    <div class="container-fluid mt-2 invf">
        <div class="row">
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Itme Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Itme Name">
            </div>
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Quantity">
            </div>
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Price</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Price">
            </div>
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Disc.</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Discontent">
            </div>
            <div class="col-lg-2">
                <button class="btn btn-primary mt-4 fw-bolder">+</button>
            </div>
        </div>
        <div class="container m-2">
            <table class="table">
                <thead class="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Itme Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Disc.</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Net Total</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="col-lg-3">
                <label for="exampleFormControlInput1" class="form-label">Bill Type</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected value="GST">GST</option>
                    <option value="Non GST">Non GST</option>

                </select>
            </div>
            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Total</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="5">5%</option>
                    <option selected value="18">18%</option>
                    <option value="25">25%</option>

                </select>
            </div>

            <div class="col-lg-2">
                <label for="exampleFormControlInput1" class="form-label">Total</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
            </div>
            <div class="col-lg-2">
                <button type="button" class="btn btn-primary">Save</button>
            </div>
        </div>

    </div>`
}
function aqut() {
    con.innerHTML=`<h3>All Quotation</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-12">
                <label for="exampleFormControlInput1" class="form-label">Search</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter client Name" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                  </div>
            </div>
        </div>

    </div>
    <div class="container-fluid invf mt-2">
        <table class="table">
            <thead class="table-primary">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Quotation No</th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <a href="#"><th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td></a>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

    </div>`
}
function nexp() {
    con.innerHTML=`<h3>New Expense</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                    <span class="input-group-text text-white bg-primary">Expense Type</span>
                    <input type="text" aria-label="Expense Type" class="form-control">
                </div>
                <div class="input-group flex-nowrap mt-3">
                    <span class="input-group-text bg-primary text-white" id="addon-wrapping">₹</span>
                    <input type="text" class="form-control" placeholder="" aria-label="Username"
                        aria-describedby="addon-wrapping">
                </div>
                <div class="input-group mt-3">
                    <span class="input-group-text bg-primary text-white">Date</span>
                    <input type="date" aria-label="Expense Type" class="form-control">

                </div>
                <div class="mt-3 row d-flex">
                    <label for="" class="d-block">Pay Mode:</label>
                    <select class="form-select form-select-sm w-50 ms-2 d-flex" aria-label=".form-select-sm example">
                        <option selected value="cash">Cash/option>
                        <option value="Banking">Banking</option>
                        <option value="Online">Online</option>

                    </select>
                </div>
                <div class="input-group mt-3">
                    <span class="input-group-text text-white bg-primary ">Paid To:</span>
                    <input type="text" aria-label="Expense Type" class="form-control">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input-group">
                    <span class="input-group-text text-white bg-primary">Paid By:</span>
                    <input type="text" aria-label="Expense Type" class="form-control">
                </div>
                <div class="input-group mt-3">
                    <span class="input-group-text text-white bg-primary">Payment Ref No.</span>
                    <input type="text" aria-label="Expense Type" class="form-control">
                </div>
                <div class="input-group mt-3">
                    <span class="input-group-text text-white bg-primary">Note</span>
                    <input type="textare" aria-label="Expense Type" class="form-control">
                </div>
                <button type="button" class="btn btn-primary mt-5 mx-auto">Save</button>
            </div>
        </div>


    </div>`
}
function aexp(){
    con.innerHTML=`<h3>All Expenses</h3>
    <div class="container-fluid invf">
        <div class="row">
            <div class="col-lg-12">
                <label for="exampleFormControlInput1" class="form-label">Search</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Enter client Name"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>

    </div>
    <div class="container-fluid invf mt-2">
        <table class="table">
            <thead class="table-primary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Paid To</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Pay Mode</th>
                    <th scope="col">Payment No</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <a href="#">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </a>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

    </div>`
}