import json
from rest_framework import viewsets
from .models import Ticket, Payment
from .serializers import TicketSerializer, PaymentSerializer
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import logging
from pixqrcodegen import Payload

logger = logging.getLogger(__name__)

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

def home(request):
	return HttpResponse("Welcome to the FichaFacil API!")

@csrf_exempt
@require_http_methods(["POST"])
def generate_pix_payload(request):
    # Try to parse the JSON request body and validate required fields
    try:
        data = json.loads(request.body.decode('utf-8'))
        
        # Required fields
        amount = data['amount']
        recipient_key = data['recipient_key']
        transaction_id = data['transaction_id']
        merchant_name = data['merchant_name']
        city = data['city']
        
    except (ValueError, KeyError):
        # If parsing fails or a field is missing, return an error response
        return JsonResponse({'error': 'Invalid or missing data'}, status=400)

    # Initialize the payload generator with validated data
    payload_gen = Payload(merchant_name, recipient_key, amount, city, transaction_id)

    # Generate the PIX payload
    pix_payload = payload_gen.gerarPayload()
    print(pix_payload)

    if pix_payload is None:
        logger.warning('PIX payload generation failed for data: %s', data)

    # Return the payload as a JSON response
    return JsonResponse({'pix_payload': pix_payload})