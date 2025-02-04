const myproduct = new URLSearchParams(window.location.search).get("id");

let product_container = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${myproduct}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  product_container.innerHTML = `
             <div class= "billede_productsite">
                <img class="img_productsite" src="https://kea-alt-del.dk/t7/images/webp/640/${myproduct}.webp" alt="t-shirt">
                  <div class="udsalgs_boks2 ${!data.discount && "hide"}">${data.discount}%</div>
                   <div class="soldout_boks2 ${!data.soldout && "hide"}">Udsolgt</div>
            </div>
            
       
            <div>
             
                <div>
                    <h2 class="h2_product">${data.brandname}</h2>
                    <p class="product_text"> <b>${data.productdisplayname}</b></p>
                     <p class="pris_product ${!data.discount && "hide"}"> Nypris: ${Math.round(data.price * (1 - data.discount / 100))} kr.</p>
                    <p class="pris_product_før">Pris: ${data.price} kr.</p>
                   

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
}
