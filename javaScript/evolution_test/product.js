//golobal variable declaration
var _baseURL = 'https://fakestoreapi.com/products';
var _tableBody;
var _updateFlag = 0;

function editUser(Item) {

    _updateFlag = 1;
    document.getElementById('ProductTitle').value = Item.title;
    document.getElementById('ProductFile').src = Item.image;
    document.getElementById('ProductCategory').value = Item.category;
    document.getElementById('ProductPrice').value = Item.price;
    document.getElementById('ProductButton').value = 'update product';
}

function deleteUser(Id) {
    fetch(_baseURL + '/' + `${Id}`, {
        method: 'DELETE'
    }).then((result) => {
        console.log(result);
        if (result.status == 200 || result.status == 202) {
            alert('deleted sucsessfully');
        } else {
            alert('enter valid details')
        }

    }).catch((err) => {
        throw Error(`not valid request`);
    })

}

function addData() {
    var id1 = document.getElementById('id').value;
    var useremail1 = document.getElementById('email').value;
    var userfn1 = document.getElementById('FirstName').value;
    var userln1 = document.getElementById('LastName').value;

    var obj = JSON.stringify({
        id: id1,
        email: useremail1,
        first_name: userfn1,
        last_name: userln1
    });

    //check wheather it's update or add request
    //_updateflag will be 1 if it's a update request
    if (_updateFlag == 1) {
        fetch(_baseURL + `posts/` + `${id1}`, {
            method: 'PUT',
            body: obj,
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then((respose) => {
            if (respose.status == 200 || respose.status == 204) {
                alert('data updated sucsessfully');

                //updating form look
                _updateFlag = 0;
                document.getElementById('formData').reset();
                document.getElementById('addUpdateButton').value = 'add user';

            } else {

                //update form look
                _updateFlag = 0;
                document.getElementById('formData').reset();
                document.getElementById('addUpdateButton').value = 'add user';

                throw Error(`not valid request`);
            }
        }).catch((err) => {
            alert(err);

            //update form look
            _updateFlag = 0;
            document.getElementById('formData').reset();
            document.getElementById('addUpdateButton').value = 'update user';
        });
    }

    //if it's request for add data 
    else {
        fetch(_baseURL + `${id1}`, {
                method: "POST",
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: obj

            }).then((respose) => {
                if (respose.status == 201) {
                    alert('data inserted sucsessfully');
                    document.getElementById('formData').reset();


                } else {
                    alert('not valid request');
                    document.getElementById('formData').reset();
                }
            })
            .catch((err) => {
                alert(err);
                document.getElementById('formData').reset();
            });

    }
}



/*function getCategory() {
    fetch('https://fakestoreapi.com/products/categories')
        .then((response) => {
            let res = response.body;
            JSON.parse(res);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
getCategory(); */

//get product data and show into table
const _getProductDetails = new Promise((resolve, reject) => {
    fetch(_baseURL).then((res) => {
        // check if response object is not null/undefined
        if (res && res.status) {
            let resStatus = res.status; // get response status here

            // handle different response code status scenirio
            switch (resStatus) {
                case 200:
                    resolve(res);
                    break;
                case 401:
                    throw Error(`Unauthorized Request`);
                default:
                    throw Error(`Invalid Request`);
            }
        } else {
            // throw an error or display the error message on toaster.
            throw Error('Invalid Request');
        }
    });
});


_getProductDetails
    .then((apiResponse) => apiResponse.json())
    .then((result) => {
        console.log(result);
        intializeTable(); // clear table content before binding to avoid data overwritten issue
        result.forEach(prepareProductTableView); // bind table data
    });

function intializeTable() {
    _tableBody = document.getElementById('ProductTable');
    _tableBody.innerHTML = '';
}

function prepareProductTableView(item) {
    let tr = document.createElement('tr');

    let imageRow = document.createElement('td');
    imageRow.appendChild(document.createTextNode(item.image));
    tr.appendChild(imageRow);

    let titleRow = document.createElement('td');
    titleRow.appendChild(document.createTextNode(item.title));
    tr.appendChild(titleRow);

    let catRow = document.createElement('td');
    catRow.appendChild(document.createTextNode(item.category));
    tr.appendChild(catRow);

    let priceRow = document.createElement('td');
    priceRow.appendChild(document.createTextNode(item.price));
    tr.appendChild(priceRow);

    let actionRow = document.createElement('td');
    actionRow.appendChild(
        createButtonElement(`edit`, editUser, item)
    );
    actionRow.appendChild(
        createButtonElement(`delete`, deleteUser, item.id)
    );
    tr.appendChild(actionRow);

    _tableBody.appendChild(tr);
}


function createButtonElement(
    buttonText,
    buttonClickFuction,
    funcArgument
) {
    let buttonElement = document.createElement('button');
    buttonElement.innerHTML = buttonText;
    buttonElement.addEventListener('click', () => {
        buttonClickFuction(funcArgument);
    });
    return buttonElement;
}