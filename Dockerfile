# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the application code
COPY voting-app-backend .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["node", "server.js"]
