# SupaSocial

A social media mobile app built with Expo and Supabase.

## Features

- **User authentication** with email/password via Supabase Auth
- **Create posts** with a rich text editor (react-native-pell-rich-editor)
- **Image and media attachments** from device camera or gallery (expo-image-picker)
- **Social feed** with post cards showing author, content, and interactions
- **Like and comment** on posts
- **Real-time notifications** for social activity
- **User profiles** with avatar upload
- **Edit profile** to update name, bio, avatar, and more
- **Welcome/onboarding flow** for new users

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Expo 52 (React Native 0.76) |
| Routing | Expo Router 4 (file-based, typed routes) |
| Backend | Supabase (Auth, Database, Storage) |
| State | React Context (AuthContext) |
| UI | React Native Elements (@rneui/themed), custom components |
| Animations | React Native Reanimated 3 |
| Media | expo-image-picker, expo-image, expo-av (video) |
| Rich Text | react-native-pell-rich-editor + react-native-render-html |
| Dates | moment.js |
| Language | TypeScript (strict mode) |

## Architecture

SupaSocial uses Expo Router's file-based routing with typed routes. Navigation is auth-gated: unauthenticated users see the welcome, login, and signup screens, while authenticated users enter the `(main)` tab group with full access to the social feed and profile screens.

Supabase handles three core concerns: authentication, Postgres database queries, and file storage for avatars and post images. The data access layer follows a service pattern, with separate service files for users, posts, notifications, and images. This keeps Supabase logic out of components and makes it straightforward to swap or extend.

The app includes 11 reusable UI components (Avatar, Button, Input, PostCard, RichTextEditor, and others) that keep screens focused on layout and business logic. Global auth state lives in a React Context provider that wraps the entire app.

## Getting Started

**Prerequisites:** Node.js 18+, Expo CLI, and a Supabase project.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/supa-social-app.git
   cd supa-social-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Supabase:

   Open `lib/supabase.js` and add your Supabase project URL and anon key:

   ```js
   const supabaseUrl = 'https://your-project.supabase.co'
   const supabaseAnonKey = 'your-anon-key'
   ```

4. Start the dev server:

   ```bash
   npx expo start
   ```

5. Scan the QR code with Expo Go (iOS/Android) or run on an emulator.

## Project Structure

```
supa-social-app/
├── app/
│   ├── _layout.jsx        # Root layout, auth redirect logic
│   ├── index.jsx           # Loading screen
│   ├── welcome.jsx         # Onboarding screen
│   ├── login.jsx           # Login screen
│   ├── signUp.jsx          # Signup screen
│   └── (main)/             # Authenticated screens
│       ├── home.jsx        # Social feed
│       ├── newPost.jsx     # Create post
│       ├── postDetails.jsx # Post with comments
│       ├── profile.jsx     # User profile
│       ├── editProfile.jsx # Edit profile
│       └── notifications.jsx
├── components/             # 11 reusable UI components
├── contexts/               # Auth context provider
├── services/               # Supabase data access layer
├── lib/                    # Supabase client initialization
├── helpers/                # Utility functions
├── assets/                 # Icons and images
└── patches/                # patch-package fixes
```

## License

MIT
