# Limsabu Admin Dashboard

This is a [Next.js](https://nextjs.org/) project with Supabase authentication and App Router.

## Features

- **Authentication**: Supabase-powered login/signup system
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Modern UI**: Built with Subframe UI components
- **Responsive Design**: Works on all device sizes
- **Dashboard**: Main dashboard with workflow management
- **Survey Dashboard**: Customer feedback analytics with charts
- **Navigation**: Sidebar navigation with route groups
- **Real-time Updates**: Dynamic data visualization

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
│   ├── (auth)/            # Route group for authentication pages
│   │   ├── login/         # Login page
│   │   └── signup/        # Signup page
│   ├── (dashboard)/       # Route group for dashboard pages
│   │   ├── dashboard/     # Main dashboard page
│   │   └── survey/        # Survey dashboard page
│   ├── inbox/             # Inbox page (placeholder)
│   ├── reports/           # Reports page (placeholder)
│   ├── layout.tsx         # Root layout with AuthProvider
│   └── page.tsx           # Home page (redirects to login)
├── components/            # Reusable components
│   ├── ProtectedRoute.tsx # Authentication guard
│   └── survey/            # Survey-specific components
│       ├── SurveyCard.tsx # Survey metric cards
│       ├── ChartContainer.tsx # Chart wrapper component
│       └── ResponsesTable.tsx # Survey responses table
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication state management
├── lib/                   # Utility libraries
│   ├── supabase.ts        # Supabase client configuration
│   └── survey.ts          # Survey data utilities
├── types/                 # TypeScript type definitions
│   └── survey.ts          # Survey-related types
└── ui/                    # UI components (Subframe)
    ├── components/        # UI component library
    └── layouts/           # Layout components
```

## Authentication Flow

1. **Login**: Users can sign in with email/password
2. **Signup**: New users can create accounts
3. **Protected Routes**: Dashboard requires authentication
4. **Auto-redirect**: Unauthenticated users are redirected to login
5. **Session Management**: Automatic session persistence

## Available Pages

- **Login** (`/login`): Authentication page with animated background
- **Signup** (`/signup`): User registration page
- **Dashboard** (`/dashboard`): Main dashboard with workflow management
- **Survey** (`/survey`): Customer feedback analytics dashboard
- **Inbox** (`/inbox`): Placeholder page for inbox functionality
- **Reports** (`/reports`): Placeholder page for reports functionality

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase features.
- [Subframe Documentation](https://docs.subframe.com) - learn about UI components.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deployment Configuration

This project includes a `vercel.json` configuration file for optimal deployment:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Environment Variables

Make sure to set the following environment variables in your Vercel project:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Backend-as-a-Service for authentication and database
- **Subframe UI**: Modern UI component library
- **Vercel**: Deployment platform

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Build Status

✅ **Build Status**: All builds passing  
✅ **Vercel Deployment**: Configured and working  
✅ **Authentication**: Supabase integration complete  
✅ **UI Components**: Subframe UI fully integrated
