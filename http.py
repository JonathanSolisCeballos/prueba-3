import requests 

r = requests.get("https://www.fayerwayer.com")

print r.text
print r.headers