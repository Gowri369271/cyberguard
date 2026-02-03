# 🚀 GitHub Setup Instructions for CyberGuard

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** CyberGuard
   - **Description:** Vulnerability Simulation Sandbox - Educational platform for cybersecurity demonstrations
   - **Visibility:** Public
   - **IMPORTANT:** Do NOT check any boxes (no README, no .gitignore, no license)
3. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

Open your terminal in the CyberGuard directory and run:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/Gowri369271/CyberGuard.git

# Verify remote was added
git remote -v

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify Upload

After pushing, refresh your GitHub repository page. You should see:
- ✅ All your project files
- ✅ README.md displayed on the main page
- ✅ Frontend and Backend folders

## 🎯 Your Repository URL

Once created, your repository will be available at:
**https://github.com/Gowri369271/CyberGuard**

## 📌 Next Steps (Optional)

### Deploy to Vercel (Free Hosting)
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your CyberGuard repository
5. Configure:
   - Framework: Next.js
   - Root Directory: `frontend`
6. Click "Deploy"

Your app will be live at: `https://cyberguard-yourname.vercel.app`

### Add Repository Topics
On GitHub, click the ⚙️ gear icon next to "About" and add topics:
- cybersecurity
- nextjs
- nodejs
- express
- vulnerability-scanner
- educational
- security-tools

## 🔐 If You Need to Update Later

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push
```

---

**Need Help?** If you encounter any issues, let me know!
