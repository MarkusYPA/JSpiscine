# cd ../public/js/tests && node test.mjs /Users/markus.amberla/Documents/piscine-js/ collections && cd /Users/markus.amberla/Documents/piscine-js/

#!/bin/bash

# Check if an argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <test_name>"
  exit 1
fi

test_name="$1"
test_dir="/Users/markus.amberla/Documents/public/js/tests" # Replace with the actual path to your test directory
working_dir=$(pwd)

# Change to the test directory
cd "$test_dir"

# Execute the test program
node test.mjs "$working_dir $test_name"
#node test.mjs "/Users/markus.amberla/Documents/piscine-js/ $test_name"

# Check the exit code of the test
#test_result=$?

# Change back to the original working directory
cd "$working_dir"

# exit with the test result. A non zero exit code means a failure.
#exit $test_result