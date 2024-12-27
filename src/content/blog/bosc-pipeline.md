---
title: "Develop, Host, Deploy: Complete BOSC pipeline"
pubDate: 2024-11-30
author: "Achyut Koirala"
# layout: ../../layouts/BlogLayout.astro
authImage: "/team/tenure-2025/achyut-president.jpeg"
coverImage: "/blogs_assets/bosc-pipeline/cover.png"
slug: bosc-pipeline
summary: "Learn how BOSC has managed to streamline the development, hosting, and deployment process with a single pipeline, everything for free. $0 cost."
type: "Article"
---

# Introduction

The pipeline will include development, hosting, and deployment. The best part is that you can do all of this for free just like how BOSC does it. We will be using the following tools and services:

### Frontend Development

- **Development**: GitHub [Astro](https://astro.build/)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

### API Development

- **Development**: GitHub [Hono](https://hono.dev/docs/getting-started/basic)
- **CI/CD**: GitHub Actions
- **Hosting**: Cloudflare Workers
- **Deployment**: Wrangler
- **Database**: Cloudflare D1
- **Authentication**: OAuthv2

<br>

## Freely Available Static Site Hosting Options

| SN  | Name         | Description                                                                                            |
| --- | ------------ | ------------------------------------------------------------------------------------------------------ |
| 1   | GitHub Pages | In GitHub pages you can use CNAME to point to your own custom domain. The repository has to be public. |
| 2   | Cloudflare   | Really good option, can take some time for newcomers to setup but it's easy.                           |
| 3   | Vercel       | You can connect your repository and deploy. Very easy to follow and can be done quickly.               |
| 4   | Netlify      | Similar process as in Vercel.                                                                          |
| 5   | Amazon S3    | A bit of hassle as you have to go through infra setup like setting up s3 bucket, setting up Route53.   |
