# ລາ Lorem 🇱🇦 (Lao Lorem Ipsum Generator)

> Lorem Ipsum Generator ສຳລັບພາສາລາວ — ສ້າງຂໍ້ຄວາມ placeholder ລາວໄດ້ທັນທີ 
> A modern, lightweight, and customizable Lao placeholder text generator.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://huevangxp.github.io/lao-lorem/)

![Lao Lorem Generator Preview](./screenshot.png)

## ✨ Features (ຄຸນສົມບັດ)

- ⚡ **ສ້າງຂໍ້ຄວາມລາວ:** ສ້າງຍ່ອຍໜ້າ (Paragraphs), ປະໂຫຍກ (Sentences), ຫຼື ຄຳສັບ (Words) ພາສາລາວໄດ້ທັນທີ
- 🔢 **ກຳນົດຈຳນວນ:** ເລືອກຈຳນວນທີ່ຕ້ອງການສ້າງໄດ້ສູງສຸດເຖິງ 1,000 ຄຳ/ປະໂຫຍກ/ຍ່ອຍໜ້າ
- 📋 **ຄັດລອກງ່າຍ:** Copy ຂໍ້ຄວາມໄປໃຊ້ງານໄດ້ໃນຄລິກດຽວ
- 🏷️ **ຮອງຮັບ HTML:** ສາມາດເລືອກເປີດ/ປິດ HTML `<p>` tags ໄດ້
- 📦 **NPM Package:** ສາມາດຕິດຕັ້ງໄປໃຊ້ເປັນ Libary ໃນໂປຣເຈັກ JavaScript/TypeScript ໄດ້
- 🔌 **Local API:** ມາພ້ອມ API endpoint ໃນໂຕສຳລັບການທົດສອບ

---

## 🚀 Live Demo (ຕົວຢ່າງເວັບໄຊລາຍ)

ທົດລອງໃຊ້ງານເວັບໄຊໄດ້ທີ່: **[https://huevangxp.github.io/lao-lorem/](https://huevangxp.github.io/lao-lorem/)**

---

## 📦 ໃຊ້ເປັນ NPM Package

ຕິດຕັ້ງ Package ໃນໂປຣເຈັກຂອງທ່ານ:

```bash
npm install lao-lorem
# ຫຼື
yarn add lao-lorem
```

### 💻 ຕົວຢ່າງການໃຊ້ງານ (Usage Example):

```javascript
import { generate } from 'lao-lorem';

// 1. ສ້າງຍ່ອຍໜ້າ (Paragraphs) ຈຳນວນ 3 ຍ່ອຍໜ້າ
const paragraphs = generate({ type: 'paragraphs', count: 3 });
console.log(paragraphs);

// 2. ສ້າງປະໂຫຍກ (Sentences) ຈຳນວນ 5 ປະໂຫຍກ
const sentences = generate({ type: 'sentences', count: 5 });
console.log(sentences);

// 3. ສ້າງຄຳສັບ (Words) ຈຳນວນ 20 ຄຳ
const words = generate({ type: 'words', count: 20 });
console.log(words);
```

---

## 🔌 API Endpoint

ທ່ານສາມາດເອີ້ນໃຊ້ API ໄດ້ທັງແບບ Local ແລະ Online:

### 1. Online Production API (Vercel)
* **URL:** `GET https://lao-lorem.vercel.app/api/lorem`
* **ຕົວຢ່າງການເອີ້ນໃຊ້ (Example Request):**
  ```bash
  curl "https://lao-lorem.vercel.app/api/lorem?type=sentences&count=3"
  ```

### 2. Local Development API (Vite Dev Server)
* **URL:** `GET /api/lorem` ຫຼື `/lao-lorem/api/lorem` (ເມື່ອເປີດ Local server)
* **ຕົວຢ່າງການເອີ້ນໃຊ້ (Example Request):**
  ```bash
  curl "http://localhost:5173/api/lorem?type=sentences&count=3"
  ```

### ⚙️ Query Parameters:
* `type` (ຕົວເລືອກ: `paragraphs`, `sentences`, `words` - ຄ່າເລີ່ມຕົ້ນ: `paragraphs`)
* `count` (ຈຳນວນທີ່ຕ້ອງການສ້າງ - ຄ່າເລີ່ມຕົ້ນ: `3`)
* `sentencesPerParagraph` (ຈຳນວນປະໂຫຍກຕໍ່ຍ່ອຍໜ້າ - ຄ່າເລີ່ມຕົ້ນ: `4`)

---

## 🔨 Local Setup & Development (ການຕິດຕັ້ງ ແລະ ພັດທະນາ)

```bash
# 1. Clone ໂປຣເຈັກ
git clone https://github.com/huevangxp/lao-lorem.git
cd lao-lorem

# 2. ຕິດຕັ້ງ dependencies
yarn install
# ຫຼື
npm install

# 3. ເປີດ Dev Server
yarn dev
# ຫຼື
npm run dev
```

ເປີດ browser ເບິ່ງທີ່: `http://localhost:5173/lao-lorem/`

---

## 🚀 Deploy to GitHub Pages (ການເຜີຍແຜ່ເວັບໄຊ)

ໂປຣເຈັກນີ້ມີສະຄຣິບທຳການ deploy ໄປຍັງ GitHub Pages ແບບອັດຕະໂນມັດ:

```bash
yarn deploy
# ຫຼື
npm run deploy
```

---

## 📄 License (ລິຂະສິດ)

MIT License - Copyright (c) 2026 huevangxp <huevang770@gmail.com> (Tel: 78849378). ໃຊ້ຟຣີ, ດັດແປງໄດ້.  
ເບິ່ງລາຍລະອຽດເພີ່ມເຕີມໃນໄຟລ໌ [LICENSE](./LICENSE).
