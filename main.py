import os

from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='./build', template_folder="./build")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        # TODO inject csrf token and cookies
        return render_template('index.html', test="Hello World from flask")


if __name__ == '__main__':
    app.run(debug=True)
