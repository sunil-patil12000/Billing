<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <title>My Billing</title>
</head>

<body>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="img/icons-bootstrap.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                Bootstrap
            </a>
        </div>
    </nav>
    <div class=" bg-dark sidebar">
        <hr class="bg-white">
        <div class="batn p-2">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-receipt-cutoff"></i>
                    Sale

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#" onclick="ninv()">New Invoice</a></li>
                    <li><a class="dropdown-item" href="#" onclick="ainv()">All Invoice</a></li>
                    <li><a class="dropdown-item" href="#" onclick="nqut()">New Quotation</a></li>
                    <li><a class="dropdown-item" href="#" onclick="aqut()">All Quotation</a></li>
                </ul>
            </div>
        </div>
        <hr class="bg-white">
        <div class="batn">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-bag-fill"></i>
                    Purchase

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#" onclick="npur()">New Purchase</a></li>
                    <li><a class="dropdown-item" href="#" onclick="apur()">All Purchase</a></li>

                </ul>
            </div>
        </div>
        <hr class="bg-white">
        <div class="batn">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-cash-stack"></i>
                    Expense

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#" onclick="nexp()">New Expense</a></li>
                    <li><a class="dropdown-item" href="#" onclick="aexp()">All Expense</a></li>

                </ul>
            </div>
        </div>
        <hr class="bg-white">
        <div class="batn">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-people-fill"></i>
                    Client

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#" onclick="nclin()">New Client</a></li>
                    <li><a class="dropdown-item" href="#" onclick="aclin()">All Client</a></li>

                </ul>
            </div>
        </div>
        <hr class="bg-white">
        <div class="batn">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-book"></i>
                    Report

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Cash Book</a></li>
                    <li><a class="dropdown-item" href="#">Payment Received</a></li>
                    <li><a class="dropdown-item" href="#">Daliy Summary</a></li>
                    <li><a class="dropdown-item" href="#">Profit & Loss</a></li>
                    <li><a class="dropdown-item" href="#">Stock Low Report</a></li>
                    <li><a class="dropdown-item" href="#">Stock Availability</a></li>
                    <li><a class="dropdown-item" href="#">Amount Due</a></li>
                    <li><a class="dropdown-item" href="#">Payment Histoty</a></li>
                    <li><a class="dropdown-item" href="#">Purchases Report</a></li>
                    <li><a class="dropdown-item" href="#">Expenses Report</a></li>

                </ul>
            </div>
        </div>
        <hr class="bg-white">
        <div class="batn">
            <div class="dropdown">
                <a class="text-decoration-none text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-pencil-square"></i>
                    Master

                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dwm"
                    aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">New Expense</a></li>
                    <li><a class="dropdown-item" href="#">All Expense</a></li>

                </ul>
            </div>
        </div>



    </div>


    <!------------------------- Sidebar ------------------------>
    <div class="container-fluid fw-bold con" id="hcon">
        
    <h3 class="fw-bold">New Invoice</h3>
<div class="container-fluid invf">
    <div class="row">
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Invoice No.</label>
            <input type="number" class="form-control" name="in_num" id="exampleFormControlInput1" placeholder="Invoice No">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Date</label>
            <input type="date" class="form-control" name="date" id="exampleFormControlInput1" placeholder="Invoice No">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label d-block">Pay Type</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="a_type" id="inlineRadio1"
                    value="Pay">
                <label class="form-check-label" for="inlineRadio1">Pay</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="a_type" id="inlineRadio2"
                    value="Due">
                <label class="form-check-label" for="inlineRadio2">Due</label>
            </div>
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
            <input type="text" class="form-control" name="phone" id="exampleFormControlInput1" placeholder="Phone">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Client Name</label>
            <input type="text" class="form-control" name="c_name" id="exampleFormControlInput1" placeholder="Client Name">
        </div>
        <div class="col-lg-4">
            <label for="exampleFormControlInput1" class="form-label">Address</label>
            <input type="text" class="form-control" name="addre" id="exampleFormControlInput1" placeholder="Address">
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
            <input type="text" class="form-control" name="n_total" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="col-lg-3">
            <label for="exampleFormControlInput1" class="form-label">Bill Type</label>
            <select class="form-select" name="type" aria-label="Default select example">
                <option selected value="GST">GST</option>
                <option value="Non GST">Non GST</option>

            </select>
        </div>
        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">GST TYPE</label>
            <select class="form-select" name="g_type" aria-label="Default select example">
                <option value="5">5%</option>
                <option selected value="18">18%</option>
                <option value="25">25%</option>

            </select>
        </div>

        <div class="col-lg-2">
            <label for="exampleFormControlInput1" class="form-label">Total</label>
            <input type="text" class="form-control" name="total" id="exampleFormControlInput1" placeholder="">
        </div>
        <div class="col-lg-2">
            <button type="button" class="btn btn-primary">Save</button>
        </div>
    </div>

</div>








    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="js/conte.js"></script>
</body>

</html>