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

rec = {}

# for cat in categories:
#     rec[cat] = 9

# print(json.dumps(rec, sort_keys=True, indent=4, separators=(',', ': ')))

views = {}

with open("planning idea views.csv", "r") as f:
    for line in f:
        try:
            if line.strip().split(",")[0] not in exclude:
                views[line.strip().split(",")[0]] = int(line.strip().split(",")[1])
        except:
            pass

# views = dict(sorted(views.items(), key = lambda kv: kv[1]))
output = []
for category in categories:

    output[category] = []
    
    

# # print(output)
for filename in os.scandir(directory):
    # print(filename.name[:8])
    if filename.is_file() and filename.name[:8] not in exclude:
        fp = open(filename.path, 'r')
        json_data = json.load(fp)
        fp.close() 
        try:
            mdict = {}
            mdict['id'] = json_data["application_id"]
            mdict['notes'] = ""
            mdict['url'] = json_data["planning_ideas_url"]
            mdict['image'] = json_data["thumbnail"]
            mdict['category'] = json_data["primary_category"]
            mdict['views'] = views[json_data['application_id']]
            output.append(mdict)
        except:
            pass

output = sorted(output, key=lambda x: x['views'], reverse=True)
# print(output)


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