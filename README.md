# tech-reviews
A tech website for reviewing technology

---

# How to run:
#### You are required to use specific environment variables to run the program:
|Name|When|Where|Purpose|Example|
|----|----|-----|-------|-------|
|JwtSettings:Key|On Run|Server Executable OR appsettings.json|The secret of the JWT tokens, HAS TO HAVE MORE THAN 256 BITS|(random string with more than 256 bits)|
|VITE_SERVER_IP|On Client Build|Inside the ./client folder (.env file)|Address of api server|https://localhost|
|VITE_SERVER_PORT|On Client Build|Inside the ./client folder (.env file)|Port for the api server's HTTP service|5000|
