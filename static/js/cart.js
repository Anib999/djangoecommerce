let updateBtns = document.getElementsByClassName("update-cart");

for (let i = 0; i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click", function () {
    let prodId = this.dataset.product;
    let action = this.dataset.action;

    if(user === 'AnonymousUser') {
      addCookieItem(prodId, action)
    }else{
      updateUserOrder(prodId, action)
    }
  });
}

function updateUserOrder(productId, action){
  console.log('logged');

  const url = '/update_item/'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: JSON.stringify({'productId': productId, 'action': action})
  }).then(res => res.json())
  .then(data => {
    console.log(data);
  })
}

function addCookieItem(productId, action){
  console.log('not');

  if(action == 'add'){
    if(cart[productId] == undefined){
      cart[productId] = {'quantity': 1}
    }else{
      cart[productId]['quantity'] += 1
    }
  }

  if(action == 'remove'){
    cart[productId]['quantity'] -= 1

    if(cart[productId] <= 0){
      delete cart[productId]
    }
  }

  console.log(cart);
  document.cookie = `cookie=${JSON.stringify(cart)};domain=;path=/;`
  // location.reload()
}