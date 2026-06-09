# CI/CD Pipeline with GitHub Actions + Docker Hub

## 🚀 Project Overview

This project demonstrates a complete CI/CD pipeline using:

* GitHub (source code management)
* GitHub Actions (CI/CD automation)
* Docker (containerization)
* Docker Hub (image registry)

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

1. Builds a Docker image
2. Logs into Docker Hub
3. Pushes the image to Docker Hub

---

## 🧱 Tech Stack

* Node.js (simple HTTP server)
* Docker
* GitHub Actions
* Docker Hub

---

## 📁 Project Structure

```

cicd-demo/
│
├── app.js
├── package.json
├── Dockerfile
└── .github/workflows/docker.yml

```

---

## 📦 Application Code (app.js)

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from CI/CD Pipeline");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

## 🐳 Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

---

## ▶️ Run Project Locally (Without Docker)

### Step 1: Install dependencies (if needed)

```bash
npm install
```

### Step 2: Run app

```bash
node app.js
```

### Step 3: Test in browser or terminal

```bash
curl localhost:3000
```

Expected output:

```
Hello from CI/CD Pipeline
```

---

## 🐳 Run Project with Docker

### Step 1: Build Docker image

```bash
docker build -t cicd-demo .
```

---

### Step 2: Run container

```bash
docker run -d --name cicd-app -p 3000:3000 cicd-demo
```

---

### Step 3: Test container

```bash
curl localhost:3000
```

OR open browser:

```
http://localhost:3000
```

---

### Step 4: Stop container

```bash
docker stop cicd-app
```

---

### Step 5: Remove container (optional)

```bash
docker rm cicd-app
```

---

## 🔁 CI/CD Pipeline (GitHub Actions)

Workflow file:

```
.github/workflows/docker.yml
```

### What happens automatically:

When you run:

```bash
git push origin main
```

GitHub Actions will:

1. Checkout code
2. Login to Docker Hub
3. Build Docker image
4. Push image to Docker Hub

---

## ⚙️ GitHub Secrets Required

Set in:

```
GitHub Repository → Settings → Secrets and Variables → Actions
```

### Required secrets:

```
DOCKER_USERNAME
DOCKER_PASSWORD
```

---

## 🚀 How to Test CI/CD Flow

### Step 1: Make a change

Edit `app.js`:

```javascript
res.end("Version 2");
```

---

### Step 2: Commit changes

```bash
git add .
git commit -m "Update app version"
git push origin main
```

---

### Step 3: Watch pipeline

Go to:

```
GitHub → Actions tab
```

You will see:

* Build running
* Docker image building
* Image pushed to Docker Hub

---

### Step 4: Verify on Docker Hub

Check your repository:

```
your-username/cicd-demo
```

Latest image will be updated automatically.

---

## 🧠 Key Learning

* GitHub Actions = automation engine
* Docker = packaging application
* Docker Hub = image storage
* CI = build + test automation
* CD = delivery automation

---

## 🎯 Outcome

After this project you understand:

* CI/CD pipeline workflow
* Docker containerization
* GitHub Actions automation
* Real-world DevOps workflow

---

## 🔥 Next Level Improvements

* Add testing step (Jest)
* Add staging server deployment (Ubuntu VPS)
* Use Docker Compose
* Add version tagging instead of `latest`

---

## 👨‍💻 Author

DevOps Practice Project
