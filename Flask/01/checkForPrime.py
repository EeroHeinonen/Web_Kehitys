import json
from flask import Flask, request, render_template, Response
app = Flask(__name__)

@app.route('/index/', methods=['POST', 'GET'])
def checkForPrime():

    if request.method == "POST":

        try:

            num = int(request.form.get("num"))

            if num <= 1:

                result = "The number is not a prime."

            else:

                prime = True

                for i in range(2, int(num**0.5) + 1):

                    if num % i == 0:

                        prime = False
                        result = "The number is not a prime."
                        break

                if prime == True:

                    result = "The number is a prime."

        except (ValueError, TypeError):

            result = "The value provided is not a number."

        return render_template(

            "index.html",
            result = result

        )

    return render_template('index.html')

@app.errorhandler(404)
def pageNotFound(error_code):

    resp = {

        "message": "Invalid endpoint!",
        "status": 404

    }

    jsonResp = json.dumps(resp)
    httpResp = Response(response=jsonResp, status=404, mimetype="application/json")
    
    return httpResp


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)