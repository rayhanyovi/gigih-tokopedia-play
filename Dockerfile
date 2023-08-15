# Gunakan image node sebagai base image
FROM node:14

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json untuk instalasi dependensi
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh kode sumber
COPY . .

# Expose port yang digunakan oleh aplikasi
EXPOSE 3004

# Command untuk menjalankan aplikasi
CMD [ "node", "index.js" ]
