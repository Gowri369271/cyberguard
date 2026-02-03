# 🚀 Deployment Guide for CyberGuard

This guide will help you deploy both the frontend and backend of your CyberGuard application to Vercel.

## 📋 Prerequisites

- GitHub account with CyberGuard repository
- Vercel account (free tier works perfectly)

## 🎯 Deployment Steps

### Step 1: Deploy Backend API

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Sign in with your GitHub account

2. **Import Backend Project**
   - Click "Add New..." → "Project"
   - Select your `CyberGuard` repository
   - Click "Import"

3. **Configure Backend Settings**
   - **Project Name:** `cyberguard-backend` (or any name you prefer)
   - **Framework Preset:** Other
   - **Root Directory:** Click "Edit" → Select `backend`
   - **Build Command:** Leave empty (not needed for Express)
   - **Output Directory:** Leave empty
   - **Install Command:** `npm install`

4. **Deploy Backend**
   - Click "Deploy"
   - Wait for deployment to complete (1-2 minutes)
   - Copy your backend URL (e.g., `https://cyberguard-backend.vercel.app`)

### Step 2: Configure Frontend Environment Variables

1. **Go to Your Frontend Project on Vercel**
   - If already deployed, go to your project dashboard
   - Click on "Settings" → "Environment Variables"

2. **Add API URL Variable**
   - **Name:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your backend URL (e.g., `https://cyberguard-backend.vercel.app`)
   - **Environment:** Production, Preview, Development (select all)
   - Click "Save"

### Step 3: Redeploy Frontend

1. **Trigger Redeployment**
   - Go to "Deployments" tab
   - Click the three dots (⋯) on the latest deployment
   - Click "Redeploy"
   - Select "Use existing Build Cache" (unchecked)
   - Click "Redeploy"

2. **Wait for Deployment**
   - Wait 1-2 minutes for redeployment
   - Your frontend will now connect to the backend API

## ✅ Verify Deployment

1. **Open Your Frontend URL**
   - Visit your Vercel frontend URL (e.g., `https://cyberguard.vercel.app`)

2. **Test System Fingerprint**
   - The "System Fingerprint" section should load with data
   - You should see OS, Server, Framework information

3. **Test Attack Simulations**
   - Click on any attack type (SQLi, DoS, Malware, Virus)
   - Verify the simulation runs and shows logs
   - Check that the vulnerability report appears

## 🔧 Troubleshooting

### Backend Not Responding

**Issue:** Frontend shows "Connection refused" or loading forever

**Solution:**
1. Check backend deployment status on Vercel
2. Visit backend URL directly: `https://your-backend.vercel.app/api/system-info`
3. Should return JSON data
4. If 404 error, check `vercel.json` configuration

### CORS Errors

**Issue:** Browser console shows CORS policy errors

**Solution:**
1. Backend already has CORS enabled
2. If issues persist, update `backend/server.js`:
   ```javascript
   app.use(cors({
     origin: 'https://your-frontend.vercel.app',
     credentials: true
   }));
   ```

### Environment Variable Not Working

**Issue:** Frontend still trying to connect to localhost

**Solution:**
1. Verify environment variable is set in Vercel dashboard
2. Variable name must be exactly: `NEXT_PUBLIC_API_URL`
3. Redeploy after adding environment variables
4. Clear browser cache

## 📝 Local Development

To run locally after these changes:

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

The frontend will automatically use `http://localhost:5000` for local development.

## 🌐 Your Deployed URLs

After deployment, you'll have:

- **Frontend:** `https://cyberguard-[your-name].vercel.app`
- **Backend API:** `https://cyberguard-backend-[your-name].vercel.app`

## 🔄 Future Updates

To update your deployed application:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push

# Vercel will automatically redeploy both frontend and backend
```

## 🎉 Success!

Your CyberGuard application is now accessible from anywhere in the world!

Share your frontend URL with anyone to demonstrate your cybersecurity simulation platform.
