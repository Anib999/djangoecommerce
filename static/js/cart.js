let updateBtns = document.getElementsByClassName("update-cart");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    let prodId = this.dataset.product;
    let action = this.dataset.action;
    console.log(prodId, action);

    if(user === 'AnonymousUser') {
        console.log('Not authenticated');
    }else{
        console.log('Logged In');
    }
  });
}