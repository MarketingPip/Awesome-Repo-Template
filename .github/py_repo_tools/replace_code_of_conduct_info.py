
import json
  
# Opening JSON file
f = open('.github/py_repo_tools/repo_config.json')
  
# returns JSON object as 
# a dictionary
config = json.load(f)
  

# Define the filename here you want to replace content in
FileName = "CODE_OF_CONDUCT.md"

# Replace with string
Text_To_Replace = "example@hello.com"

# Replace with JSON value
Text_To_Replace_With = config['CODE_OF_CONDUCT_EMAIL']

# Closing file
f.close()


# Open the File
with open(FileName, 'r') as f:
    # Read the file contents
    contents = f.read()
    # Replace the file contents
    contents = contents.replace(Text_To_Replace, Text_To_Replace_With)

# Write the file out    
with open(FileName, 'w') as f:
    # Write the updated contents
    f.write(contents)  
