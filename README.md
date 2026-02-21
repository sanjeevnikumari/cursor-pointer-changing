# ✨ Mouse Trail Effect in React

A simple and interactive React project that creates a colorful fading dot trail following the mouse cursor.

---

## 🚀 Features

- Tracks real-time mouse movement
- Generates dynamic colors using HSL
- Smooth fade-out animation
- Keeps only the last 20 dots (performance optimized)
- Built using React Hooks (`useState`)

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6)
- CSS3

---

## 📂 How It Works

1. An empty array is initialized using `useState([])`.
2. On every mouse move, a new dot object is created:
   ```js
   {
     x: e.clientX,
     y: e.clientY,
     id: Date.now()
   }
   ```
3. The state updates like this:
   ```js
   setDots(prevDots => [...prevDots.slice(-20), newDot]);
   ```
   - Keeps only last 20 dots
   - Adds new dot at the end
4. `map()` renders each dot with dynamic position and color.
