# firstDataRobeAssignment
Simple Hello World Project


Prerequisites
Before proceeding, make sure you have the following installed on your machine:

Node.js 
Docker


## Getting started - Run the static application on your local machine.

To get started with running this application locally, follow the steps outlined below:

### Step 1 - Install Node.js

Before you can proceed, you will need to have Node.js installed on your computer. If you don't already have it installed, you can download the latest LTS version from the official Node.js website: [https://nodejs.org/en](https://nodejs.org/en).



1. Clone the repository to your local machine     :   
git clone https://github.com/ParamSurywashi/firstDataRobeAssignment.git

2. Navigate to the project directory:
cd firstDataRobeAssignment

Building and Running with Docker (Production Mode) :

Build the Docker image      :          
docker build -t first-data-robe-assignment .


Run the Docker container        :        
docker run -p 8800:80 first-data-robe-assignment


Accessing the Application       
Once the application is running, you can access it by opening http://localhost:8800 in your web browser.
