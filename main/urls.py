from django.urls import path
from . import views

urlpatterns = [
        path('',views.home,name='home'),
        path('exp/',views.exp,name='exp'),
        path('soc/',views.soc,name='soc'),
        path('tl/',views.tl,name='tl')
]
