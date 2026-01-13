# Use Node 20 to satisfy Vite requirements
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from the src folder
COPY src/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client source code
COPY src/ ./

# Expose the port Vite will use
EXPOSE 5173

# Run Vite dev server and allow external connections
CMD ["npm", "run", "dev"]
