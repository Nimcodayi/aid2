from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)


import paypalrestsdk
paypalrestsdk.configure({
    "mode": "live",
    "client_id": "YOUR_REAL_CLIENT_ID",
    "client_secret": "YOUR_REAL_SECRET"
})

@app.route('/create-payment', methods=['POST'])
def create_payment():
    payment = paypalrestsdk.Payment({
        "intent": "sale",
        "payer": {"payment_method": "paypal"},
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "amount": {
                "total": request.json['amount'],
                "currency": request.json.get('currency', 'USD')
            },
            "description": "NGO Donation"
        }]
    })
    if payment.create():
        return jsonify({"approval_url": payment.links[1].href})
    else:
        return jsonify({"error": payment.error})

# DB connection
def get_db_connection(): 
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",     # adjust if needed
        database="aiddev"
    )

# ----------------------------
# Save Message API
# ----------------------------
@app.route('/api/message', methods=['POST'])
def save_message():
    data = request.get_json()
    name = data.get('name')
    message = data.get('message')

    if not name or not message:
        return jsonify({"error": "Missing data"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO messages (name, message) VALUES (%s, %s)", (name, message))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Message saved successfully!"}), 201


# ----------------------------
# Save Donation API
# ----------------------------
@app.route('/api/donation', methods=['POST'])
def save_donation():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    amount = data.get('amount')
    method = data.get('method')

    if not name or not email or not amount or not method:
        return jsonify({"error": "Missing donation data"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO donations (name, email, amount, method) VALUES (%s, %s, %s, %s)",
        (name, email, amount, method)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Donation saved successfully!"}), 201

    


# ----------------------------
# Default Home
# ----------------------------
@app.route('/', methods=['GET'])
def home():
    return "<h2>Welcome to AIDDEV Flask API</h2><p>Use POST /api/message or POST /api/donation to send data.</p>"


if __name__ == '__main__':
    app.run(debug=True)
