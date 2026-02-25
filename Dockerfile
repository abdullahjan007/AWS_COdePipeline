# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining app files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
