#/usr/bin/python
import MySQLdb

db = MySQLdb.connect(host="pl-mysql",    # your host, usually localhost
                     user="iwant",         # your username
                     passwd="moreLiverPlease",  # your password
                     db="livermore")        # name of the data base

# you must create a Cursor object. It will let
#  you execute all the queries you need
cur = db.cursor()

# Use all the SQL you like
cur.execute("SELECT * FROM livermore")

# print all the first cell of all the rows
for row in cur.fetchall():
    print row[0]

db.close()
