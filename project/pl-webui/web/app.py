#/usr/bin/python
import MySQLdb
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    
    db = MySQLdb.connect(host="pl-mysql",    # your host, usually localhost
                     user="iwant",         # your username
                     passwd="moreLiverPlease",  # your password
                     db="livermore")        # name of the data base
    
    # you must create a Cursor object. It will let
    #  you execute all the queries you need
    cur = db.cursor()

    # Use all the SQL you like
    cur.execute("SELECT * FROM Patient")

    # print all the first cell of all the rows
    data = ""
    for row in cur.fetchall():
        data += (row[1] + " ")
    
    db.close()
    
    return render_template('index.html')
    #return data

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

