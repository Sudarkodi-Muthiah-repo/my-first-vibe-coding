# Deployment Guide for Learning Land

## Quick Start Deployment to Vercel

### Option 1: Using GitHub (Recommended)

1. **Push your repository to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com/signup)
   - Click "Continue with GitHub"
   - Authorize Vercel to access your GitHub account
   - Click "New Project"
   - Select your `learning-land` repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

3. **Your site is live!**
   - Default URL: `https://your-project-name.vercel.app`
   - Custom domain: Add in Project Settings → Domains

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from project directory**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Select your team/scope
   - Link to existing project (if re-deploying)
   - Confirm build settings
   - Wait for deployment

### Option 3: Environment-Specific Deployments

**Production Deployment**
```bash
vercel --prod
```

**Preview/Staging Deployment**
```bash
vercel --env production
```

## Environment Variables

Set environment variables in Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add the following variables:

```
VITE_API_URL = https://api.example.com
VITE_APP_NAME = Learning Land
```

3. Redeploy to apply changes
   ```bash
   vercel --prod
   ```

## Custom Domain

1. Go to Project Settings → Domains
2. Click "Add" and enter your domain (e.g., `learningland.com`)
3. Follow DNS configuration instructions
4. Add DNS records at your domain registrar
5. Wait for DNS propagation (up to 48 hours)

## Building Locally

Before deploying, test production build:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview

## Troubleshooting

### Build Fails
- Check `vercel.json` configuration
- Ensure all dependencies are in `package.json`
- Check for build errors in Vercel logs

### Environment Variables Not Showing
- Redeploy after adding variables
- Use `console.log(import.meta.env)` to debug

### Slow Performance
- Check Network tab in DevTools
- Enable image optimization in `vite.config.js`
- Use Vercel Analytics to identify bottlenecks

## Advanced Configuration

### Redirect Rules

Create `vercel.json` with redirects:

```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

### Header Configuration

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

### Rewrite Rules

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.example.com/:path*"
    }
  ]
}
```

## Monitoring & Analytics

1. **Vercel Analytics**
   - View Web Vitals in Vercel Dashboard
   - Monitor performance metrics
   - Get insights on page performance

2. **Error Tracking**
   - Check deployment logs
   - Review function logs (if using serverless)
   - Monitor error rate over time

## CI/CD Integration

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Rollback

To rollback to a previous deployment:

1. Visit Vercel Dashboard
2. Go to Deployments
3. Find the deployment you want
4. Click the three dots → "Promote to Production"

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

