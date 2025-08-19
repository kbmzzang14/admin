# Limsabu Admin Dashboard

This is a [Next.js](https://nextjs.org/) project with Supabase authentication and App Router.

## Features

- **Authentication**: Supabase-powered login/signup system
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Modern UI**: Built with Subframe UI components
- **Responsive Design**: Works on all device sizes
- **Real-time Dashboard**: Workflow management interface

## Getting Started

### 1. Environment Setup

Create a `.env.local` file in the project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your URL and anon key
3. Update your `.env.local` file with the actual values
4. Enable Email authentication in Authentication > Settings

### 3. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Protected dashboard page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   ├── layout.tsx        # Root layout with AuthProvider
│   └── page.tsx          # Home page (redirects to login)
├── components/           # Reusable components
│   └── ProtectedRoute.tsx # Authentication guard
├── contexts/             # React contexts
│   └── AuthContext.tsx   # Authentication state management
├── lib/                  # Utility libraries
│   └── supabase.ts       # Supabase client configuration
├── pages/                # Page components
│   ├── Login.tsx         # Login form
│   ├── SignUp.tsx        # Signup form
│   └── Main.tsx          # Dashboard component
└── ui/                   # UI components (Subframe)
```

## Authentication Flow

1. **Login**: Users can sign in with email/password
2. **Signup**: New users can create accounts
3. **Protected Routes**: Dashboard requires authentication
4. **Auto-redirect**: Unauthenticated users are redirected to login
5. **Session Management**: Automatic session persistence

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase features.
- [Subframe Documentation](https://docs.subframe.com) - learn about UI components.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
