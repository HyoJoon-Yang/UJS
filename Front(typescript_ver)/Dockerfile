FROM node:16.20.0
WORKDIR /UJS/frontend(typescript_ver)

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
EXPOSE 3000