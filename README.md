## 📝 EasyList

Organize your life. The easy way.

Try it here: https://easylist-app.vercel.app/

### ⚡ What is this?

EasyList is a lightweight, zero-dependency task manager built entirely in Vanilla JavaScript. It does DOM manipulation, state management, and local persistence without the overhead of a framework.

No React.

No Build Steps.

### 🛠️ The Stack

- Core: HTML5 & CSS3
- Logic: Vanilla JavaScript (ES6+)
- Icons: FontAwesome
- Fonts: Google Fonts

### ✨ Features

- 💾 Persistent Memory: Uses localStorage so your tasks survive a browser refresh.
- 🚨 Priority System: Tag tasks as Low, Medium, or High priority.
- 🔍 Smart Filtering: Search by keyword OR filter by priority level in real-time.
- ✏️ Quick Actions: Edit task details or change priorities on the fly.
- 🧠 How it Works

The app follows a "Single Source of Truth" architecture:

The State: A master taskList array holds all data objects.

The Render: The updateUI() function wipes and rebuilds the DOM based on the current state. This ensures the UI is always in sync with the data.

The Filter: Instead of modifying the array, we toggle a display: boolean property on each task to hide/show them based on search criteria.
