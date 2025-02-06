const mycategory = new URLSearchParams(window.location.search).get("category");
const product_list_container = document.querySelector(".product_list_container");

const overskrift = document.querySelector("h2");
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        ` <div class="product">
                <a class="product-list_side" href="produkt.html?id=${product.id}">
                    <img class="img_product" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="t-shirt">
                </a>
                <p class="nike">${product.brandname}</p>
                <p> <b>${product.productdisplayname}</b></p>
                <div>
                    <p class="pris_product2 ${!product.discount && "hide"}"> Nypris: ${Math.round(product.price * (1 - product.discount / 100))} kr.</p>
                    <p class="pris_product_før2">Pris: ${product.price} kr.</p>
                </div>
                
                 <div class="udsalgs_boks ${!product.discount && "hide"}">${product.discount}%</div>
                 <div class="soldout_boks ${!product.soldout && "hide"}">Udsolgt</div>
            </div>
  `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
