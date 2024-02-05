from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'tickets', views.TicketViewSet)
router.register(r'payments', views.PaymentViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('generate-pix/', views.generate_pix_payload, name='generate_pix'),
]

