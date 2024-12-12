# # Use the official Node.js image as the base image
# FROM node:16-alpine

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

# # Set environment variable to ignore ESLint errors
# ENV ESLINT_NO_DEV_ERRORS=true

# # Build the React application
# RUN npm run build

# # Install a simple HTTP server to serve the static files
# RUN npm install -g serve

# # Expose the port the app runs on
# EXPOSE 3000

# # Serve the build directory
# CMD ["serve", "-s", "build"]

# Use a smaller base image (nginx) for serving static files
FROM nginx:alpine

# Create a directory for the app
WORKDIR /app

# Copy the build output to the nginx webroot
COPY build /usr/share/nginx/html

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]