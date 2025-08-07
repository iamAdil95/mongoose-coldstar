# 🎬 Mongoose Coldstar

Hey there\! Welcome to my **Mongoose Coldstar** project. 🚀 I built this as a hands-on exercise to teach myself the basics of **Node.js**, **Express**, and **Mongoose**.

My main goal wasn't to create a perfect, full-scale application, but rather to document my learning process and create a simple example of how to connect a Node.js app to a MongoDB database. I'm sharing this in case it helps other beginners too\!

-----

## 🌱 What I Learned

Through this project, I focused on understanding the fundamentals:

  * **Connecting to MongoDB**: How to get Mongoose set up and talking to my database.
  * **Creating a Schema**: How to define the structure for my data (in this case, for a collection of movies).
  * **Basic Database Operations**:
      * Creating new data and saving it to the database.
      * Reading that data back from the database.
  * **Setting up a Simple Express Server**: Getting a feel for how a basic server works.


-----

## 🛠️ Technologies I Used

  * **Node.js**: The JavaScript runtime I used to build the server-side logic.
  * **Express**: The web framework I used to set up a simple server.
  * **MongoDB**: The database where I stored all the movie data.
  * **Mongoose**: The library that made working with MongoDB from Node.js much more straightforward.

-----

## 📋 Prerequisites

If you want to run this project yourself, you'll need the same tools I used:

  * [Node.js](https://nodejs.org/en/) (which includes npm)
  * [MongoDB Community Edition](https://www.mongodb.com/try/download/community)

-----

## 🚀 How to Get it Running

Here are the steps I took to get the project running on my machine.

### 1\. Download the Code

First, I downloaded the project files or cloned the repository to a local folder.

### 2\. Open in a Code Editor

Then, I navigated into the project directory from my terminal:

```bash
cd mongoose-coldstar
```

### 3\. Install Dependencies

This command installs all the necessary libraries listed in `package.json`.

```bash
npm install
```

### 4\. Start the MongoDB Database

Before running the app, the MongoDB service needs to be active. I opened a **new terminal window** and ran this command, leaving it running in the background.

```bash
mongosh
```

### 5\. Run the Application\!

Finally, I started the app with this command:

```bash
node movies.js
```

When the script runs, it connects to the database, adds a few new movies, and then prints out a list of all the movies it finds in the terminal.

-----

## 📂 How I Structured the Code

I kept the code structure as simple as possible, putting everything in `movies.js`. This file handles:

  * The connection to my MongoDB database.
  * The `movieSchema` definition (the blueprint for my movie data).
  * The Mongoose model.
  * The logic for creating and saving new movies.
