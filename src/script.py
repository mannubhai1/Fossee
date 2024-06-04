import json
import os

#change
input_dir = '../public/jsonData/home.json'
output_dir = './content/home/core'
output_fileName = 'core'


with open(input_dir, 'r', encoding='utf-8') as file:
    data = json.load(file)


os.makedirs(output_dir, exist_ok=True)

#change
for count, entry in enumerate(data["coreteam"], start=1):


    #change
    Number = count
    name = entry['name']
    positions = entry['position']
    institute = entry['institute']


    # positions_content = '\n'.join([f'  - "{position}"' for position in positions])

    # Create the content for the Markdown file
    content = f"""---
Number: {Number}
name: "{name}"
position: {positions}
institute: "{institute}"
---
"""

    filename = os.path.join(output_dir, f"{output_fileName}{count}.md")
    count+=1
    

    with open(filename, 'w', encoding='utf-8') as md_file:
        md_file.write(content)

print("Markdown files created successfully.")
