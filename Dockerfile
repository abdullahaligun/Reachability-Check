# Docker implementation

# Use nginx stable alpine for a lightweight image
FROM nginx:stable-alpine

# Copy all project files to the nginx default public directory
# We copy index.html and assets/ folder
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# The default cmd of nginx starts it in the foreground
CMD ["nginx", "-g", "daemon off;"]
