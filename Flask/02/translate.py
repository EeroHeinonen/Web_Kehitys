import json
import re
import os
from flask import Flask, request, render_template, Response
app = Flask(__name__)

baseDir = os.path.dirname(os.path.abspath(__file__))
fileLocation = os.path.join(baseDir, "translations.json")

@app.route('/index/translate/', methods=['POST', 'GET'])
def translate():

    result = ""

    print(request.method)

    if request.method == "POST":

        with open(fileLocation, "r", encoding='utf-8') as f:
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
                    
                if word == "":

                    result = "Please enter a non empty value!"

                else:

                    result = f"{word.title()} was not found in dictionary!"


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

            if userIn == "":

                added = "Please enter a non empty value!"

            else:

                added='Invalid format. Please enter value as "Word:Translation".'

            return render_template(

                "index.html",
                added=added

            )

        key = dictItem[0].strip()
        for v in dictItem[1].split(","):

            if v.strip():

                rawValues = v.strip()

        if len(rawValues) > 1:

            value = rawValues
        
        else:
            
            value = rawValues[0]

        with open(fileLocation, "r", encoding='utf-8') as f:
            current_data = json.load(f)

        current_data[key] = value

        with open(fileLocation, "w", encoding='utf-8') as f:
            json.dump(current_data, f)

        return render_template(
            
            "index.html", 
            added=f"{key.title()} added successfully"
            
        )

    return render_template("index.html")

@app.route('/index/delete/', methods=['POST', 'GET'])
def deleteWord():

    if request.method == "POST":

        userIn = request.form.get("dictDelete", "").strip().lower()

        with open(fileLocation, "r", encoding='utf-8') as f:
            data = json.load(f)

        for x, y in data.items():
            if userIn == x:
                deleted = f"{userIn.title()} deleted successfully!"
                del data[userIn]
                break
            else:
                if userIn == "":

                    deleted = "Please enter a non empty value!"

                else:

                    deleted = f"{userIn.title()} was not found in dictionary!"


        with open(fileLocation, "w", encoding='utf-8') as f:
            json.dump(data, f)

        return render_template(
        
            "index.html", 
            deleted = deleted
        
        )

    return render_template(
    
        "index.html"
    
    )

@app.route('/index/display/', methods=['POST', 'GET'])
def displayJSON():

    if request.method == "POST":

        with open(fileLocation, "r", encoding='utf-8') as f:
                    data = json.load(f)

        return render_template(
                
            "index.html", 
            jsonList= data
        
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