import os
import json

directory = r"C:\Users\murth\Documents\GitHub\imo_next\src\data\input"

exclude = ["AK5ER2SR",
"NW5WK9YC",
"SA5RN5FA",
"ZM3WP8UX",
"DD8JW3FF",
"MV6CQ7UE",
"YB6AX4PY",
"SY3ET3YQ",
"XS4EC8QM",
"ZT5EN3EQ"]

categories = ['Outdoor', 'Workstation', 'Private Office', 'Private Space', 'Support Space', 'Semi-Private Space', 'Meeting Spaces', 'Workplace']

output = {}
for category in categories:
    output[category] = []

for filename in os.scandir(directory):
    if filename.is_file() and filename.path[:8] not in exclude:
        fp = open(filename.path, 'r')
        json_data = json.load(fp)
        fp.close() 
        mdict = {}
        mdict['id'] = json_data["application_id"]
        mdict['notes'] = ""
        mdict['url'] = json_data["planning_ideas_url"]
        mdict['image'] = json_data["thumbnail"]
        output[json_data['primary_category']].append(mdict)


with open('output.txt', 'w') as f:
    
    f.write(json.dumps(output, sort_keys=True, indent=4, separators=(',', ': ')))


# print(output)

# with open("output_data.json", "a") as output:
#     for filename in os.scandir(directory):
#         if filename.is_file():
#             print(filename.path)
#             with open(filename.path, 'r') as j:
#                 data = json.loads(j.read())
#                 print(data)
            # data = json.loads(filename.path)
            # output.write(data)