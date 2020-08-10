import os

from flask import Flask, render_template, send_from_directory
from flask_wtf import CSRFProtect

app = Flask(__name__, static_folder='./build', template_folder="./build")
app.secret_key = "bdTT0Y9zOEdZYNX4MycnL4nN8BFaY7P9"
csrf = CSRFProtect(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
