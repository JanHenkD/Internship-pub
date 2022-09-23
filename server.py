from flask import Flask, render_template, jsonify

value = 1
def updatevalue():
  global value
  value +=1

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html', x=value)
@app.route('/update_data', methods=['POST'])
def updatedata():
   value = updatevalue()
   return jsonify('',render_template('random_data_model.html', x=value))


@app.route('/my-link/')
def my_link():
  print ('I got clicked!')

  return 'Click.'

if __name__ == '__main__':
  app.config['TEMPLATES_AUTO_RELOAD'] = True
  app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
  app.run(debug=True)