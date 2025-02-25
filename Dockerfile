FROM node:16

# Set the working directory inside the container
WORKDIR /app
# Copy all files into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the application on port 80 (for Nginx)
EXPOSE 80

# Start the application
CMD ["npm", "start"]