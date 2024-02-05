import django
django.setup()

from django.contrib.auth.models import User
from fichafacilapp.models import Ticket, Payment
from datetime import date

# Ensure you're running this in an environment where Django is fully set up.
# For Django's shell, use `python manage.py shell` before running this script.

def create_sample_data():
    # Create a user
    user, created = User.objects.get_or_create(username='testuser', defaults={'password': 'testpass123'})
    if created:
        print("User created successfully.")
    else:
        print("User already exists.")

    # Create a ticket
    ticket, created = Ticket.objects.get_or_create(
        name='Lunch Ticket',
        defaults={
            'description': 'Valid for one lunch at the college restaurant',
            'price': 8.00,
            'quantity_available': 100,
            'expiration_date': date.today()
        }
    )
    if created:
        print("Ticket created successfully.")
    else:
        print("Ticket already exists.")

    # Create a payment
    payment, created = Payment.objects.get_or_create(
        user=user,
        ticket=ticket,
        defaults={
            'amount': ticket.price,
            'status': 'COMPLETED'
        }
    )
    if created:
        print("Payment created successfully.")
    else:
        print("Payment already exists.")

# Run the function to create sample data
create_sample_data()

