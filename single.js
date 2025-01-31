let productId = 1163;
let product_container = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    product_container.innerHTML = `
   <div>
                <img class="img_productsite" src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="t-shirt">
            </div>

            <div>
                <div>
                    <h2 class="h2_product">NIKE</h2>
                    <p class="product_text"> <b>${data.productdisplayname}</b></p>
                    <p class="pris_product">Pris: ${data.price} kr.</p>
                </div>

                 <div>
                    <p class="type_kategori"> Type: ${data.usagetype} </p>
                    <p class="type_kategori"> Kategori: ${data.category}</p>
                </div>

                <div>
                    <p class="product_farve"> Color: Blå</p>
                </div>
                <div class="product-options">
                    <select class="size-selector">
                        <option selected disabled>Vælg størrelse</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>

                    <div class="buttons">
                        <button class="add-to-cart">Læg i indkøbskurv</button>
                        <button class="wishlist">
                            ❤️
                        </button>
                    </div>
                </div>
            </div>`;
  });
