const urlParam = new URLSearchParams(window.location.search);
const productsId = parseInt(urlParam.get('id'));
const product = products.find(product => product.productId === productsId);
const productDetailsContainer = document.querySelector('detail');

if(!product){
    window.location.href = "/";
}

let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = product.productImage;
    detail.querySelector('.name').innerText = product.productName;
    detail.querySelector('.price').innerText = '$' + product.productPrice;
    detail.querySelector('.details-description').innerText = '' + product.productDescription;
    detail.querySelector('.addCart').dataset.id = product.productId;
    detail.querySelector('.ratings').innerHTML = `<i class="fas fa-star"></i>`;

var currentPage = 1;
var productPerPage = 8;



// load products on shop page
var productList = document.getElementById('product-list');

function displayProduct(page) {
    productList.innerHTML = '';
    const start = (page -1) * productPerPage;
    const end = start + productPerPage;
    const paginationProducts = products.slice(start, end);


    paginationProducts.forEach(product => {
        const productDiv = document.createElement('div')

        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <div class="top">
                <i class="fa fa-heart"></i>
                <a href="/ProductDetailsPage/productDetails.html?id=${product.productId}">
                <img src="${product.productImage}">
                </a>
                <i class="fa fa-share-alt"></i>
            </div>
            <div class="middle">
                <h3 class="name">${product.productName}</h3>
                <p class="price">$${product.productPrice}</p>
                <p class="details-description">${product.productDescription}</p>
            </div>
            <div class="bottom">
                <button class="addCart" data-id='${product.productId}'>
                Add To Cart
                </button> 
                <button class="buyBtn" data-id="${product.productId}"> buy now
                </button>
            </div>
        `;
        productList.appendChild(productDiv);
    })
    displayPagination();
}


// function to displayPagination controls
function displayPagination() {
    const paginationContainer = document.getElementById('pagination-container');

    paginationContainer.innerHTML = '';


    // create preBtn
    const prevBtn = document.createElement('button');
    prevBtn.innerText = '< Prev';
    prevBtn.disabled = currentPage === 1;


    prevBtn.onclick = () => {
        if (currentPage > 1){
            currentPage--;
            displayProduct(currentPage);
        }
    };
    paginationContainer.appendChild(prevBtn);


    // create nextBtn
    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next >';
    nextBtn.disabled = currentPage === Math.ceil(products.length / productPerPage);

    nextBtn.onclick = () => {
        if (currentPage < Math.ceil(products.length / productPerPage)) {
            currentPage++;
            displayProduct(currentPage);
        }
    };
    paginationContainer.appendChild(nextBtn);
}
displayProduct(currentPage);