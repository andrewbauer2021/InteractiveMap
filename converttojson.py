# Importing dependencies 
import pandas
import json

# Reading xlsx into pandas dataframe
df = pandas.read_excel('population.xlsx')

# Encoding/decoding a Dataframe using 'columns' formatted JSON
jsonfile = df.to_json(orient='columns')

# Print out the result
print('Excel Sheet to JSON:\n', jsonfile)

# Make the string into a list to be able to input in to a JSON-file
json_dict = json.loads(jsonfile)

# write from and file to write to
with open('population-converted.json', 'w') as json_file:
    json.dump(json_dict, json_file)


