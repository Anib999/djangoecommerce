from django.shortcuts import render
from .models import *
# Create your views here.

def store(request):
    products = Product.objects.all()
    context = {'products': products}
    print(context)
    return render(request, 'store/Store.html', context)

def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, customer = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
    context = {'items': items}
    return render(request, 'store/Cart.html', context)

def checkout(request):
    context = {}
    return render(request, 'store/Checkout.html', context)