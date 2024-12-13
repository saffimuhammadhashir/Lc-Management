#!/bin/bash

# Check if the file exists
if [ ! -f "airports.csv" ]; then
    echo "Error: File airports.csv not found."
    exit 1
fi

# Process each line in the csv file
while IFS= read -r line; do
    # Process the line with awk to retain only the text up to the fifth semicolon
    processed_line=$(echo "$line" | awk -F';' '{print $1";"$2";"$3";"$4";"$5}')

    # Output the processed line
    echo "$processed_line"
done < "airports.csv"
