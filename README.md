# portfolio_website

## Full project push process (Windows / Git CLI)

### 1) Go to project folder
```sh
cd "d:/portfolio gk"
```

### 2) Initialize git (if not already a git repo)
```sh
git init
```

### 3) Add GitHub remote
```sh
git remote add origin https://github.com/Ganeshkoli01/portfolio_website.git
```

### 4) Use `main` as default branch
```sh
git branch -M main
```

### 5) Stage ALL files
```sh
git add -A
```

### 6) Commit
```sh
git commit -m "Initial portfolio commit"
```

### 7) If push is rejected (remote already has commits), pull first
```sh
git pull --rebase origin main
```

### 8) Push
```sh
git push -u origin main
```

### 9) Verify
```sh
git status
```

---

## Current state (from last push)
- Repository pushed to: `https://github.com/Ganeshkoli01/portfolio_website.git`
- Branch: `main`
- Working tree: clean (nothing pending)

