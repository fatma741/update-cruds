var productname = document.getElementById("name");
var productprice = document.getElementById("price");
var productcat = document.getElementById("cat");
var productdes = document.getElementById("desc");
var add = document.getElementById("addBtn");

var list = [];
var globalindex;
var create=true;

add.addEventListener('click', function () {

    var obj =
    {
        name: productname.value,
        price: productprice.value,
        category: productcat.value,
        discription: productdes.value
    }
    if(create==true){
    list.push(obj);
    }
    else{
        list[globalindex]=obj;
        create=true;
        add.innerHTML="Add Product";
    }
    // console.log(obj);
    // console.log(list);
    clear();
    display();
})


function display() {
    var cartona=``;
    for (let i = 0; i < list.length; i++) {

        cartona+= 
        `<tr>
       <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
       <th scope="row"> <p id='nameProduct'> ${list[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
       <td> <p id='priceProduct'>${list[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
       <td> <p id='catProduct'> ${list[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
       <td> <p id='descProduct'> ${list[i].discription}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
       <td><button class="btn btn-outline-danger"  onclick ="delet(${i})">Delete</button></td> 
       <td><button class="btn btn-outline-warning" id='updatebttn' onclick="update(${i})">Update</button>
       <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>
      </tr>`
    }

    document.getElementById("info").innerHTML = cartona;


}


function clear() {
    productname.value = '';
    productprice.value = '';
    productcat.value = '';
    productdes.value = '';
}


function delet(x){

list.splice(x,1)
display();

}


function update(index)
{
 productname.value =list[index].name;
 productprice.value=list[index].price;
 productdes.value=list[index].discription;
 productcat.value=list[index].category;
 add.innerHTML="update";
 globalindex=index;
 create=false;
}








