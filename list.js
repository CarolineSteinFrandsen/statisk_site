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
                <a class="product-list_side" href="produkt.html">
                    <img class="img_product" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="t-shirt">
                </a>
                <p class="nike">${product.brandname}</p>
                <p> <b>${product.productdisplayname}</b></p>
                <div>
                    <p class="pris">Pris: ${product.price} kr.</p>
                </div>
            </div>
  `
    )
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
