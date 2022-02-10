var _getAllCategories = new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products/categories')
        .then((res) => {
            if (res && res.status) {
                switch (res.status) {
                    case 200:
                        resolve(res);
                        break;
                    case 401:
                        reject(`Unauthorized Request`);
                    default:
                        reject(`Invalid Request`);
                }
            } else {
                reject('Invalid Request');
            }
        })
});

_getAllCategories.then((apiResponse) => apiResponse.json())
    .then((data) => {
        //intializeTable("category_table");
        // clear table content before binding to avoid data overwritten issue
        _prepareCatTable(data);
    });
/*
function _getCategoryData() {
    fetch('https://fakestoreapi.com/products/categories')
        .then((res) => {
           return res

        })
        .catch((err) => {
            console.log(err);
        });
}
_getCategoryData();

*/
function _prepareCatTable(item) {
    for (i in item) {

        let tbody = document.getElementById('catData');
        let tr = document.createElement('tr');

        let cnRow = document.createElement('td');
        cnRow.appendChild(document.createTextNode(item[i]));
        tr.appendChild(cnRow);

        let viewRow = document.createElement('td');
        let bt = document.createElement('button');
        console.log(item[i]);
        bt.setAttribute("onclick", `view_product(${item[i]})`);
        bt.innerText = 'view';
        viewRow.appendChild(bt);
        tr.appendChild(viewRow);
        tbody.appendChild(tr);

    }


}

function view_product(cat) {
    fetch('https://fakestoreapi.com/products/category/' + `${cat}`)
        .then((res) => {
            res.json();
        }).then((data) => {

            data.foreach(_prepareProductTable);
        })
}

function _prepareProductTable(item) {
    console.log(item);
    let tbody = document.getElementById('productData');
    let tr = document.createElement('tr');

    let imageRow = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', `${item.image}`)
    imageRow.appendChild(img);
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

    tbody.appendChild(tr);

}