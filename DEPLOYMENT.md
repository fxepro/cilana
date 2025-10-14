# GitHub Pages Deployment Guide

## Prerequisites
1. A GitHub repository for your Cilana project
2. GitHub Pages enabled in your repository settings

## Setup Steps

### 1. Repository Configuration
1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Enable GitHub Actions
The workflow file `.github/workflows/deploy.yml` is already configured and will:
- Build your Next.js application
- Deploy to GitHub Pages automatically on every push to `main` branch

### 3. First Deployment
1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. Go to the **Actions** tab in your GitHub repository
3. Watch the deployment workflow run
4. Once complete, your site will be available at: `https://yourusername.github.io/your-repository-name`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
cd studio
npm run build
```

The static files will be generated in the `out` folder. You can then manually upload these to GitHub Pages or any static hosting service.

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `studio/public` folder with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Environment Variables

If you need environment variables for production:
1. Go to repository **Settings** > **Secrets and variables** > **Actions**
2. Add your secrets there
3. Reference them in the workflow file as `${{ secrets.YOUR_SECRET_NAME }}`

## Troubleshooting

- **Build fails**: Check the Actions tab for error details
- **Site not updating**: Ensure you're pushing to the `main` branch
- **404 errors**: Make sure `trailingSlash: true` is set in `next.config.ts`

## Local Testing

Test the static export locally:
```bash
cd studio
npm run build
npx serve out
```

This will serve your static site locally for testing before deployment.
