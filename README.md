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

### Step 2 - Enable Corepack

Open your computer's command prompt (run as administrator) or terminal and run the command `corepack enable`. This is so we can use the **"Yarn Package Manager"** rather than the "Node Package Manager (NPM). This is to manage packages more efficiently.

_Learn more, go to the [yarn website](https://yarnpkg.com/getting-started/install)_

### Step 3 - Clone This Repository
git clone https://github.com/ParamSurywashi/firstDataRobeAssignment.git

Next, you will need to clone this repository onto your local machine. You can do this using either the command line or a desktop application like [GitHub Desktop](https://desktop.github.com/).


### Step 4 - Install Dependencies

Once you have cloned the repository, open your code editor and navigate to the project folder. From there, run the `yarn install` command in your terminal to install all necessary dependencies.

_Learn more about using the [vs code terminal](https://code.visualstudio.com/docs/terminal/basics)_

### How to Edit and Preview the Application?

After all necessary packages have installed, you can edit and create new HTML files in the **'src'** folder.

To make any CSS changes, you can use the .scss files in the `src/scss` folder.

To run the application, use the following commands:

- `yarn start` - This command opens the application in your browser and watches for any changes. The browser will automatically reload when changes are made to files in the 'src' folder.

- `yarn build` - This command builds a production-ready folder called 'dist'. It includes minified CSS and purges all unused CSS classes.

- `yarn preview` - This command previews the build. It can only be used after the build command has been initiated and the 'dist' folder exists.

### Deploying a static site using Vite

Vite offers many options for deployment of static sites. To find out more on using Vite to deploy a static site via GitLab, please go here - [vite documentation on static deployment](https://vitejs.dev/guide/static-deploy.html#gitlab-pages-and-gitlab-ci)


### Using Docker

### Step 1 - Clone This RepositoryClone the repository to your local machine     :   
git clone https://github.com/ParamSurywashi/firstDataRobeAssignment.git

### Step 2. Navigate to the project directory:
cd firstDataRobeAssignment

### Building and Running with Docker (Production Mode) :

### Build the Docker image      :          
docker build -t first-data-robe-assignment .


### Run the Docker container        :        
docker run -p 8800:80 first-data-robe-assignment


### Accessing the Application       
Once the application is running, you can access it by opening http://localhost:8800 in your web browser.
