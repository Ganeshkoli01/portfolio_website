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

## Project info (GK Prime Walk)

I built **GK Prime Walk**, a mini e-commerce shoe website designed for an easy shopping experience.

✅ Category pages: **Men / Women / Kids / Sport**

✅ Product listing with **Add to Cart**

✅ Cart page with dynamic rendering + remove items

✅ Subtotal, Shipping, and Total calculation

✅ Cart data stored using **localStorage** (no backend required)

✅ Modern UI with gradient background, product cards, and smooth interactions

This project helped strengthen my frontend skills in **DOM manipulation**, **event handling**, and **state management** using **JavaScript**. 👟

