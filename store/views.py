from django.shortcuts import render

# Create your views here.

def store(request):
    context = {}
    return render(request, 'store/Store.html', context)

def cart(request):
    context = {}
    return render(request, 'store/Cart.html', context)

def checkout(request):
    context = {}
    return render(request, 'store/Checkout.html', context)