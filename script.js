

data = document.getElementById('container');
const getData = async function() {
  data.innerHTML = "";

  let result = await fetch("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2");
  let obj = await result.json();
  console.log(obj.data.phones);

 let data2 = obj.data.phones
  
 data2.forEach(object => {
  displayData(object)
 });
}
getData()

const displayData = async function (e){
    data.innerHTML+=`
    <div class="card " style="width: 18rem;">
    <h5 class="card-title"><b> ${e.phone_name}</b></h5>
    <hr>
    <img src='${e.image}' class="card-img-top" alt="${e.phone_name}">
    <div class="card-body">
    <h4>Brand:${e.brand}</h4>
    <p> Slug:${e.slug}</p>
    <a href="${e.detail}" class="btn btn-primary">Detail Info</a>
      
    </div>
  </div>
    
    
    `
    
  
  }


