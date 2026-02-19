# Build Your AI-Native Website in an Afternoon
## A Complete Step-by-Step Guide by Ross Starkey

---

## Introduction

Hi! I'm Ross, and I'm a 787 pilot, not a programmer. But I just built a fast, modern website without writing a single line of code myself. Instead, I used AI to do all the coding for me.

This guide will show you exactly how I did it. If you can follow instructions and copy-paste things, you can do this too. I promise it's easier than it sounds.

**What you'll build:**
- A super-fast website that loads instantly
- A blog where you can write articles
- A video section to showcase your YouTube content
- Professional design that looks great on phones and computers
- Free hosting that updates automatically when you make changes

**Time needed:** About 2-4 hours (mostly waiting for things to install)

**Cost:** $0 (everything we use is free)

---

## What We're Building With

Before we start, here's what we're using and why:

- **VS Code** - A free code editor (this is where you'll work)
- **Claude Code** - An AI that writes code for you
- **Astro** - Makes websites super fast
- **Tailwind CSS** - Makes things look pretty
- **Vercel** - Hosts your website for free
- **GitHub** - Saves your work and talks to Vercel

Don't worry if these names mean nothing to you. You don't need to understand them. Just follow the steps.

---

## Part 1: Setting Up Your Computer

### For Mac Users

**Step 1: Install Homebrew**

Homebrew helps install the stuff we need. Open Terminal (press Command+Space, type "Terminal", press Enter).

Copy and paste this line into Terminal and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It will ask for your password. Type it (you won't see anything appear, that's normal) and press Enter.

Wait for it to finish. It might take 5-10 minutes.

**Step 2: Install Node.js**

Node.js lets your computer run the tools we need. In Terminal, type:

```bash
brew install node
```

Press Enter and wait for it to finish.

**Step 3: Install VS Code**

1. Go to https://code.visualstudio.com
2. Click "Download for Mac"
3. Open the downloaded file
4. Drag VS Code to your Applications folder

**Step 4: Install Claude Code**

In Terminal, type:

```bash
brew install anthropic/claude/claude
```

Press Enter and wait. When it's done, type:

```bash
claude auth login
```

This will open your browser. Sign in with your Anthropic account (or create one - it's free).

---

### For Windows Users

**Step 1: Install Node.js**

1. Go to https://nodejs.org
2. Click the big green button that says "LTS" (Long Term Support)
3. Open the downloaded file and follow the installer
4. Keep clicking "Next" and then "Install"
5. Restart your computer when it's done

**Step 2: Install VS Code**

1. Go to https://code.visualstudio.com
2. Click "Download for Windows"
3. Open the downloaded file
4. Follow the installer (keep clicking "Next")
5. Make sure to check "Add to PATH" if you see that option

**Step 3: Install Claude Code**

1. Open PowerShell (search for "PowerShell" in the Start menu)
2. Copy and paste this:

```powershell
winget install Anthropic.Claude
```

3. Press Enter and wait
4. When it's done, type:

```bash
claude auth login
```

5. This opens your browser. Sign in with your Anthropic account (or create one).

---

## Part 2: Creating Your Website

Now the fun part! We're going to let AI build the entire website for us.

**Step 1: Create a Project Folder**

Mac:
- Open Terminal
- Type: `cd Desktop` and press Enter
- Type: `mkdir my-website` and press Enter
- Type: `cd my-website` and press Enter

Windows:
- Open PowerShell
- Type: `cd Desktop` and press Enter
- Type: `mkdir my-website` and press Enter
- Type: `cd my-website` and press Enter

**Step 2: Open in VS Code**

Type this and press Enter:

```bash
code .
```

This opens VS Code in your project folder. (The dot means "this folder")

**Step 3: Start Claude Code**

In VS Code, press:
- Mac: Command+Shift+P
- Windows: Ctrl+Shift+P

Type "Claude" and select "Claude Code: Start Session"

**Step 4: Tell Claude What to Build**

A chat window will appear. Now you just talk to Claude like you're talking to a person. Here's what to say:

```
Create a new Astro website with Tailwind CSS. I want:
- A homepage with a hero section
- A blog section where I can write articles
- A videos section to showcase my YouTube content
- Dark theme with teal accents (#14b8a6)
- Make it look modern and professional
```

Press Enter and watch Claude build your website! It will:
- Install Astro
- Set up Tailwind CSS
- Create all the files
- Set up the folder structure

This takes about 2-3 minutes. Claude will tell you when it's done.

**Step 5: See Your Website**

When Claude is done, tell it:

```
Start the development server so I can see the website
```

Claude will run a command and give you a link like `http://localhost:4321`. Click it or copy it into your browser.

**Boom!** You now have a working website on your computer.

---

## Part 3: Customizing Your Website

Your website exists, but it has placeholder content. Let's make it yours.

**Talk to Claude like a person:**

"Change the homepage heading to say 'Welcome to [Your Name]'s Website'"

"Add my bio to the about section: [paste your bio]"

"Create a blog post titled 'My First Post' about [whatever you want]"

Claude will make these changes instantly. Refresh your browser to see them.

**Want to add more features? Just ask:**

- "Add a contact form"
- "Make the buttons bigger"
- "Change the accent color to blue"
- "Add my YouTube channel link to the navigation"

Claude will do it. You don't write any code. You just describe what you want.

---

## Part 4: Publishing Your Website (Making It Live)

Right now your website only exists on your computer. Let's put it on the internet so everyone can see it.

### Step 1: Create a GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Choose a username, enter your email, create a password
4. Verify your email

### Step 2: Install GitHub Desktop

Mac:
- Go to https://desktop.github.com
- Download and install
- Sign in with your GitHub account

Windows:
- Go to https://desktop.github.com
- Download and install
- Sign in with your GitHub account

### Step 3: Push Your Code to GitHub

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Browse to your website folder (probably on Desktop)
4. Click "Create Repository" if it asks
5. Write a commit message: "Initial website"
6. Click "Commit to main"
7. Click "Publish repository"
8. Make sure "Keep this code private" is UNCHECKED (unless you want it private)
9. Click "Publish Repository"

Your code is now on GitHub!

### Step 4: Deploy to Vercel (This Makes It Live)

1. Go to https://vercel.com
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub
5. Click "Import Project"
6. Find your website repository and click "Import"
7. Vercel will detect it's an Astro site automatically
8. Click "Deploy"

Wait 30-60 seconds. Vercel is building your website.

**When it's done, you'll see "Congratulations!"**

Click "Visit" and you'll see your website live on the internet!

Vercel gives you a free URL like `your-site.vercel.app`.

---

## Part 5: Using Your Own Domain Name (Optional)

If you want your own domain like `yourname.com`:

1. Buy a domain from Namecheap, GoDaddy, or Google Domains ($10-15/year)
2. In Vercel, go to your project settings
3. Click "Domains"
4. Add your domain
5. Follow Vercel's instructions to update your domain's DNS settings

This takes 24-48 hours to fully work, but then you'll have your own custom domain!

---

## Part 6: Making Changes to Your Live Website

Here's the best part. To update your live website:

1. Open VS Code
2. Start Claude Code
3. Tell Claude what you want to change: "Add a new blog post about X"
4. Claude makes the change
5. Open GitHub Desktop
6. Write what you changed: "Added new blog post"
7. Click "Commit to main"
8. Click "Push origin"

**That's it.** Within 30 seconds, your live website updates automatically. Vercel sees the change on GitHub and rebuilds your site.

No FTP. No manual uploads. No hassle.

---

## Common Problems and How to Fix Them

### "Command not found: claude"

**Fix for Mac:**
```bash
brew reinstall anthropic/claude/claude
```

**Fix for Windows:**
Close PowerShell, reopen it, and try again. Windows sometimes needs a restart after installing.

### "Port 4321 is already in use"

Another process is using that port.

**Fix:**
```bash
npx astro dev --port 3000
```

This uses port 3000 instead.

### Website looks broken in browser

Clear your browser cache:
- Chrome/Edge: Ctrl+Shift+Delete (Windows) or Command+Shift+Delete (Mac)
- Select "Cached images and files"
- Click "Clear data"

Then refresh the page (F5 or Command+R).

### Changes not showing up on live site

1. Check GitHub Desktop - did you push the changes?
2. Go to Vercel dashboard - is it building? (You'll see a spinning icon)
3. Wait 60 seconds - Vercel takes a moment to rebuild

### "npm ERR!" messages

Usually means Node.js had a hiccup.

**Fix:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

This deletes and reinstalls everything. Takes 2-3 minutes.

---

## What You Just Built

Congrats! You now have:

✅ A professional, fast website
✅ A blog where you can publish articles
✅ A video showcase section
✅ Free hosting that updates automatically
✅ The ability to make changes just by talking to AI

**And you didn't write a single line of code.**

---

## What's Next?

This is just the beginning. Now that you have this foundation, you can:

- **Add new features** - Just ask Claude: "Add a contact form", "Add a newsletter signup", "Make it bilingual"
- **Create content** - Write blog posts, add videos, share your knowledge
- **Connect AI agents** - Eventually, you'll be able to text an AI agent from anywhere (even at 38,000 feet!) and have it update your website for you

The website you just built isn't just a website. It's a platform you control, that's easy to update, costs nothing to run, and will grow with you.

---

## Resources

**Official Documentation:**
- Astro: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

**Get Help:**
- Claude Code docs: https://github.com/anthropics/claude-code
- Astro Discord: https://astro.build/chat
- If you get stuck, just ask Claude! Seriously. Ask it: "I'm getting this error: [paste error]. How do I fix it?"

---

## Final Thoughts

You just did something most people think requires years of coding knowledge. You proved them wrong.

This isn't about replacing developers. It's about giving non-technical people the power to build and control their own digital presence.

Your website is yours. No WordPress plugins breaking. No monthly fees for basic features. No being locked into a platform.

Just you, your content, and AI helping you build whatever you imagine.

Now go build something.

— Ross Starkey
rossstarkey.com

---

**Built your website with this guide? I'd love to see it. Email me: ross@rossstarkey.com**
