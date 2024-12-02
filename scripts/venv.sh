#!/bin/bash

# Verify the installation and check the Python version
python3sc --version

# Create a virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi

# Activate the virtual environment
source venv/bin/activate

# Install the required Python packages
pip install -r requirements.txt