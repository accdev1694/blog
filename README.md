# Accdev Blog 📝

> A modern blogging platform built with React, Firebase, and MDEditor. Create, read, and manage blog posts with rich text formatting and image support.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [🚀 Deployment](#-deployment)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)
- [📸 Screenshots](#-screenshots)

## 🚀 Features

- 🔐 **Authentication**: Secure Google sign-in
- 📝 **Rich Text Editing**: Full Markdown support with live preview
- 📱 **Responsive Design**: Mobile-first approach using Tailwind CSS
- ⚡ **Real-time Updates**: Powered by Firebase Firestore
- 🖼️ **Image Support**: Upload and display images in posts
- 🔒 **Secure**: Protected environment variables and Firebase rules

## 🛠️ Technologies

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) + Vite
- ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/accdev1694/blog
cd blog
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```properties
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

4. Start development server:

```bash
npm run dev
```

## 💻 Usage

1. Sign in using your Google account
2. Create a new post using the "Write" button
3. Use Markdown syntax for formatting:
   - `**bold**` for **bold text**
   - `*italic*` for _italic text_
   - `!alt` for images
   - `# Heading` for headers

## 🚀 Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

## 🔒 Security

- ✅ Environment variables properly configured
- ✅ Firebase security rules for authenticated access
- ✅ API key restrictions implemented
- ✅ Input sanitization for Markdown content

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



## 🙏 Acknowledgments

- React Documentation
- Firebase Team
- Tailwind CSS Community
- MDEditor Contributors
