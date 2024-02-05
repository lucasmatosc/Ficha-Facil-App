from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Ticket, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'  # You can list your model fields here

class PaymentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    ticket = TicketSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = ['id', 'user', 'ticket', 'amount', 'status', 'created_at']
        read_only_fields = ['id', 'created_at']  # Fields that should not be editable

