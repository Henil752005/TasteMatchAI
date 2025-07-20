# TasteMatch.AI 🎯

TasteMatch.AI is a web app that matches two users based on their **cultural preferences** (Music, Movies, Books), using OpenAI's GPT model to generate a fun icebreaker message! 🎉

---

## 🚀 Features

- Enter your favorite Music, Movies, and Books.
- AI calculates compatibility percentage and shared tastes.
- Generates a personalized icebreaker using OpenAI.
- Stylish and clean React UI.
- Flask-based backend with OpenAI API.

---

## 🛠️ Setup Instructions

### 1. Clone or Download

Unzip or clone the repository:

```bash
git clone https://github.com/your-username/TasteMatchAI.git
cd TasteMatchAI
```

---

### 2. Backend Setup (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install flask flask-cors openai
```

Edit `app.py` and replace:

```python
openai.api_key = "YOUR_OPENAI_KEY"
```

Then start the backend server:

```bash
python app.py
```

It will run at: `http://localhost:5000`

---

### 3. Frontend Setup (React)

Open a new terminal and run:

```bash
cd frontend
npm install
npm install axios react-icons
npm run dev
```

It will run at: `http://localhost:5173`

---

### ✅ Output

- You get compatibility percentage.
- Shared tastes listed.
- AI-generated icebreaker shown.

---

## 🌐 Deployment

- Frontend: Deploy on [Vercel](https://vercel.com)
- Backend: Deploy Flask app on [Render](https://render.com)

---

## 📸 Preview

> Coming soon: Screenshot or GIF

---

## 📄 License

MIT – Free to use and modify.
