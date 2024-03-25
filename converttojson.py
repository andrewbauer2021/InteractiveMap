# Importing dependencies 
import pandas
import json

# Reading xlsx into pandas dataframe
df = pandas.read_excel('population-clean.xlsx')

# Encoding/decoding a Dataframe using 'columns' formatted JSON
jsonfile = df.to_json(orient='columns')

# Print out the result
print('Excel Sheet to JSON:\n', jsonfile)

# Make the string into a list to be able to input in to a JSON-file
json_dict = json.loads(jsonfile)

# write from and file to write to
with open('population-converted-clean.json', 'w') as json_file:
    json.dump(json_dict, json_file)


# import pandas as pd
# import json

# df = pd.read_excel('population.xlsx')
# df.to_json('population-format-result.json', orient='records') # excel to json
# # read json and then append details to it
# with open('population-format-result.json', 'r') as json_file: 
#     a = {}
#     data = json.load(json_file)
#     a['details'] = data
# # write new json with details in it
# with open("population-format-result.json", "w") as jsonFile:
#     json.dump(a, jsonFile)

# import pandas
# import json

# # Read excel document
# excel_data_df = pandas.read_excel('cbsa-met-est2023-pop.xlsx', sheet_name='Sheet1')

# # Convert excel to string 
# # (define orientation of document in this case from up to down)
# thisisjson = excel_data_df.to_json(orient='records')

# # Print out the result
# print('Excel Sheet to JSON:\n', thisisjson)

# # Make the string into a list to be able to input in to a JSON-file
# thisisjson_dict = json.loads(thisisjson)

# # Define file to write to and 'w' for write option -> json.dump() 
# # defining the list to write from and file to write to
# with open('cbsa-met-est2023-pop.json', 'w') as json_file:
#     json.dump(thisisjson_dict, json_file)