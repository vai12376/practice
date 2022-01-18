import json
 
# Opening JSON file

# Iterating through the json
# list
f = open('test_data.json')
data = json.load(f)
list = []
def searchpath(element):
   
    for sel in data:
        if(sel["entity_id"]==element):
            list.append(sel["entity_id"])
            if(element=="1"):
                f.close()
                break
            else:
                searchpath(sel["parent_id"])
    

searchpath("63")
list.reverse()
print(list)