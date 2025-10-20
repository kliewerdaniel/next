# Deployment Guide

## Vercel (Recommended)

This Next.js boilerplate is optimized for Vercel deployment with automatic scaling, global CDN, and seamless integration with the Next.js ecosystem.

### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Repository must be hosted on GitHub
3. **Environment Variables**: Configure production secrets

### Deploy Steps

#### 1. Import Repository
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will automatically detect Next.js project

#### 2. Configure Build Settings

Vercel automatically detects the configuration from `vercel.json`, but you can verify:

- **Framework**: Next.js
- **Root Directory**: `src/` (not needed - Vercel handles App Router)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

#### 3. Environment Variables

Configure the following environment variables in Vercel:

##### Authentication (NextAuth.js)
- `NEXTAUTH_URL` - Your production domain (e.g., `https://your-app.vercel.app`)
- `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`

##### Database
- `DATABASE_URL` - Production PostgreSQL connection string
- Format: `postgresql://username:password@host:port/database`

##### API Keys
- `API_SECRET_KEY` - Production API secret key
- `NEXT_PUBLIC_API_BASE_URL` - Will be auto-set by Vercel

##### OAuth Providers (Optional)
- `GOOGLE_CLIENT_ID` - Google OAuth app ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth secret
- `GITHUB_CLIENT_ID` - GitHub OAuth app ID
- `GITHUB_CLIENT_SECRET` - GitHub OAuth secret

##### Analytics (Optional)
- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics service ID

##### Feature Flags
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - `true` for production
- `NEXT_PUBLIC_ENABLE_DEBUG` - `false` for production

### Environment Variable Checklist

✅ **Required Variables:**
- [ ] `NEXTAUTH_URL` (auto-set by Vercel)
- [ ] `NEXTAUTH_SECRET`
- [ ] `DATABASE_URL`
- [ ] `API_SECRET_KEY`

🔧 **Optional Variables:**
- [ ] `GOOGLE_CLIENT_ID`
- [ ] `GOOGLE_CLIENT_SECRET`
- [ ] `GITHUB_CLIENT_ID`
- [ ] `GITHUB_CLIENT_SECRET`
- [ ] `NEXT_PUBLIC_ANALYTICS_ID`

### Post-Deployment Steps

1. **Domain Configuration**: Vercel provides `.vercel.app` domain initially
2. **Custom Domain**: Add your domain in Vercel dashboard
3. **Database Connection**: Ensure production database is accessible
4. **Environment Validation**: Test all API routes in production

### Troubleshooting

#### Build Fails
- Check Vercel build logs
- Verify environment variables are set
- Ensure database connectivity

#### Runtime Errors
- Check Vercel function logs
- Verify API secret keys
- Test database connections

#### Authentication Issues
- Check NextAuth configuration
- Verify OAuth provider setup
- Confirm domain settings

### Production Optimizations

Vercel automatically provides:
- Global CDN for static assets
- Automatic HTTPS/SSL certificates
- Image optimization via Next.js
- API route optimization
- Function cold start minimization

### Environment Comparison

| Feature | Development | Production (Vercel) |
|---------|------------|-------------------|
| Domain | localhost:3000 | your-app.vercel.app |
| HTTPS | ❌ | ✅ |
| CDN | ❌ | ✅ Global |
| API Timeout | N/A | 10 seconds (configured) |
| Rate Limiting | N/A | 100 req/min (configured) |

### Redeployment

- **Automatic**: Push to `main` branch triggers deployment
- **Manual**: Trigger from Vercel dashboard
- **Rollback**: Instant rollback to previous deployment

---

## Alternative Deployment Options

### Netlify
```bash
npm run build
npm run export  # If using static export
```
- Similar setup to Vercel
- Good for static sites

### Railway/Vercel Alternative
- Full database + app hosting
- Similar environment variable setup

### AWS (Advanced)
- EC2 + CloudFront + S3
- More control but more complex setup

---

## Monitoring & Analytics

Consider adding in production:
- **Error Tracking**: Sentry or similar
- **Performance**: Vercel Analytics or Google Analytics
- **Uptime Monitoring**: UptimeRobot or similar
