# ລາ Lorem 🇱🇦

> Lorem Ipsum Generator ສຳລັບພາສາລາວ — ສ້າງຂໍ້ຄວາມ placeholder ລາວໄດ້ທັນທີ

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- ⚡ ສ້າງຍ່ອຫນ້າ, ປະໂຫຍກ, ຫຼື ຄຳສັບ ພາສາລາວ
- 📋 Copy ໄດ້ຄລິກດຽວ
- 🏷️ ຮອງຮັບ HTML `<p>` tags
- 📦 ໃຊ້ເປັນ npm package ໄດ້

## 🚀 Setup

```bash
# 1. Clone project
git clone https://github.com/huevangxp/lao-lorem.git
cd lao-lorem

# 2. ຕິດຕັ້ງ dependencies
npm install

# 3. ເລີ່ມ dev server
npm run dev
```

ເປີດ http://localhost:5173/lao-lorem/

## 🔨 Build & Deploy

```bash
# Build production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📦 ໃຊ້ເປັນ Package

```bash
npm install lao-lorem
```

```js
import { generate } from 'lao-lorem'

generate({ type: 'paragraphs', count: 3 })
generate({ type: 'sentences', count: 5 })
generate({ type: 'words', count: 20 })
```

## 🤝 Contributing

PR ແລະ Issue ຍິນດີຕ້ອນຮັບ!

1. Fork project
2. ສ້າງ branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/your-feature`
5. ເປີດ Pull Request

## 📄 License

MIT License - Copyright (c) 2026 huevangxp <huevang770@gmail.com> (Tel: 78849378). ໃຊ້ຟຣີ, ດັດແປງໄດ້.
ເບິ່ງລາຍລະອຽດເພີ່ມເຕີມໃນໄຟລ໌ [LICENSE](./LICENSE).

