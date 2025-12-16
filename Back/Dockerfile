# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port
EXPOSE 3000

# Run backend in development mode (hot reload)
CMD ["npm", "run", "dev"]
