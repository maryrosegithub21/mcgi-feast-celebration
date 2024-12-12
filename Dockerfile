# # Use the official Node.js image as a parent image
# FROM node:14

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Copy the .env file
# COPY .env .env

# # Expose the port the app runs on
# EXPOSE 3000

# # Run the application
# CMD ["npm", "start"]


# Use a more recent LTS Node.js version (e.g., 18 or 20) for better performance and security
FROM node:20

# Set the working directory
WORKDIR /app

# Copy only necessary files for dependency installation to leverage Docker's caching
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev  

# Copy the rest of the application code
COPY . .

# Copy the .env file (consider using secrets instead for better security)
COPY .env .env 

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]