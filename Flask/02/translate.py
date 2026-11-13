import json
import re
from flask import Flask, request, render_template, Response
app = Flask(__name__)

# data = {
    
#     "hello": ["hei", "moi", "terve"],
#     "hi": ["hei", "moi", "terve"],
#     "computer": "tietokone",
#     "school": "koulu",
    
# }

# with open('translations.json', 'w') as f:
#     fileData = json.dump(data, f)

@app.route('/index/translate/', methods=['POST', 'GET'])
def translate():

    result = ""

    print(request.method)

    if request.method == "POST":

        with open("translations.json", "r", encoding='utf-8') as f:
            fileData = json.load(f)
        

        word = str(request.form.get("word")).strip().lower()

        for entry in fileData:

            print(word == entry)
            
            if word == entry:

                if isinstance(fileData[entry], list):

                    result = ", ".join(w.title() for w in fileData[word])
                    break

                else:

                    result = str(fileData[word]).title()
                    break

            else:
                    
                result = "The input value was not found in the dictionary."

        return render_template(

            "index.html",
            result = result

        )

    return render_template('index.html')

@app.route('/index/add/', methods=['POST', 'GET'])
def addWord():

    if request.method == "POST":

        userIn = request.form.get("dictItem", "").strip().lower()

        dictItem = re.split(r'[:=]', userIn, maxsplit=1)

        if len(dictItem) != 2 or not dictItem[0].strip() or not dictItem[1].strip():

            return render_template(

                "index.html",
                added="Invalid format. Please enter as 'english: finnish'."

            )

        key = dictItem[0].strip()
        for v in dictItem[1].split(","):

            if v.strip():

                raw_values = v.strip()

        if len(raw_values) > 1:

            value = raw_values
        
        else:
            
            value = raw_values[0]

        with open("translations.json", "r", encoding='utf-8') as f:
            current_data = json.load(f)

        current_data[key] = value

        with open("translations.json", "w", encoding='utf-8') as f:
            json.dump(current_data, f)

        return render_template(
            
            "index.html", 
            added="Item added successfully"
            
        )

    return render_template("index.html")

@app.route('/index/delete/', methods=['POST', 'GET'])
def deleteWord():

    if request.method == "POST":

        userIn = request.form.get("dictDelete", "").strip().lower()

        with open("translations.json", "r", encoding='utf-8') as f:
            data = json.load(f)

        for x, y in data.items():
            if userIn == x:
                print(x)
                del data[userIn]
                break

        with open("translations.json", "w", encoding='utf-8') as f:
            json.dump(data, f)

        return render_template(
        
            "index.html", 
            added="Item deleted successfully!"
        
        )

    return render_template(
    
        "index.html"
    
    )

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