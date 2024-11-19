import mysql.connector
from mysql.connector import Error

try:
    # Establish connection to the database
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="coffee_shop"
    )

    if connection.is_connected():
        cursor = connection.cursor()
    
except Error as e:
    print(f"Error: {e}")

# Insert data into the 'data' table
def signUp(name,username,phone,password):
    cursor.execute("""
            INSERT INTO data VALUES (%s, %s, %s, %s)
        """, (name, username, phone, password))

    # Commit the transaction to save changes
    connection.commit()

def loginn(username, password):
    cursor.execute("""
                SELECT * FROM data 
                WHERE username = %s AND password = %s
            """, (username, password))
    row = cursor.fetchone()

    if row:
        return row[0] # row[0] is the 'name' column
    else:
        print("Invalid username or password.")
        return None