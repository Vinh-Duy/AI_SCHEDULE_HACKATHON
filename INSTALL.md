# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
  - Download: https://nodejs.org/
  - Verify: `node --version`

- **npm** (usually comes with Node.js)
  - Verify: `npm --version`

- **Git** (optional, for version control)
  - Download: https://git-scm.com/

## Step-by-Step Installation

### 1. Clone or Download the Project

**Option A: Using Git**
```bash
git clone <repository-url>
cd AI_Schedule_Hackathon
```

**Option B: Download ZIP**
- Download the repository as ZIP
- Extract to your desired location
- Open terminal in the extracted folder

### 2. Install Dependencies

```bash
npm install
```

This will install:
- express (web framework)
- cors (cross-origin requests)
- dotenv (environment variables)
- @google/generative-ai (Gemini API)

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
echo "GEMINI_API_KEY=your_api_key_here" > .env
```

**To get your API Key:**

1. Visit: https://ai.google.dev
2. Click "Get API Key"
3. Create a new API key
4. Copy and paste into `.env` file

### 4. Start the Server

```bash
node server.js
```

You should see:
```
Backend dang chay ngon lanh tai port 3000
```

### 5. Access the Application

Open your browser and go to:
```
http://localhost:3000
```

You should see the AI School Scheduler interface.

## Verification Checklist

- [ ] Node.js installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Dependencies installed (`npm install` ran successfully)
- [ ] `.env` file created with valid API key
- [ ] Server starts without errors (`node server.js`)
- [ ] Browser loads `http://localhost:3000`
- [ ] Can see the UI interface

## Troubleshooting

### Issue: `npm install` fails
**Solution:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder
- Try `npm install` again

### Issue: "Module not found" error
**Solution:**
- Ensure all dependencies installed: `npm install`
- Check node_modules folder exists

### Issue: Server won't start
**Solution:**
- Ensure port 3000 is not in use
- Check `.env` file exists
- Verify Node.js installation

### Issue: "API Key is invalid"
**Solution:**
- Verify API key in `.env` file
- Ensure no extra spaces or quotes
- Create new API key at https://ai.google.dev
- Try again

### Issue: Requests timing out
**Solution:**
- Check internet connection
- Verify API key is valid
- Check Gemini API service status
- Try simplifying your input

## Configuration Options

### Change Port
Edit `server.js` and change:
```javascript
const PORT = process.env.PORT || 3000;
```

Example: `const PORT = process.env.PORT || 8080;`

### Change Model
Edit `server.js` and modify:
```javascript
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
```

Available models:
- `gemini-2.5-flash` (recommended - faster)
- `gemini-1.5-pro` (more capable - slower)

## Development Setup

### Hot Reload (Optional)
For automatic server restart on file changes:

```bash
npm install --save-dev nodemon
```

Add to `package.json` scripts:
```json
"dev": "nodemon server.js"
```

Run with:
```bash
npm run dev
```

### Code Editor Setup
Recommended: **Visual Studio Code**
- Download: https://code.visualstudio.com/
- Useful extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - Thunder Client (API testing)

## Next Steps

1. ✅ Installation complete
2. 📖 Read [README.md](README.md) for usage
3. 🎓 Check [demo/demo-guide.md](demo/demo-guide.md)
4. 🧪 Try example inputs
5. 🚀 Deploy or customize

## Uninstallation

To completely remove the project:

```bash
# Remove node_modules
rm -rf node_modules

# Remove .env file (contains API key)
rm .env

# Remove project folder
rm -rf AI_Schedule_Hackathon/
```

## Support

- Documentation: [README.md](README.md)
- API Docs: [API.md](API.md)
- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- Demo Guide: [demo/demo-guide.md](demo/demo-guide.md)

## Version Information

- Node.js: v14+
- npm: v6+
- Express: v5.2.1
- Google Generative AI SDK: v0.24.1+

Enjoy using AI School Scheduler! 🎓
