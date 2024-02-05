from django.test import TestCase
from django.urls import reverse

class PIXPayloadGenerationTest(TestCase):
    def test_generate_pix_payload_post(self):
        # Define the URL endpoint name
        url = reverse('generate_pix')
        
        # Define the data to send in the POST request
        post_data = {
            'amount': '2.40',
            'recipient_key': '61480353329',
            'transaction_id': 'unique_transaction_id',
            'merchant_name': 'Universidade Federal do Piaui',
            'city': 'Teresina',
        }
        
        # Make a POST request to the endpoint
        response = self.client.post(url, post_data, content_type='application/json')
        print(response.content)

        # Check if the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)       
        # Further checks can be added here to validate the response content
        # For example, checking if the response contains a valid PIX payload
        # This depends on the specific format of your response data


