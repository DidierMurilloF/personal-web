# didiermurillo.com

Personal site of Didier Murillo: about me, blog posts and projects. Built with
Next.js and Tailwind, deployed on Vercel.

## How the domain is organized

| What | Where | Hosted on |
| --- | --- | --- |
| Personal site (home, about, projects) | `didiermurillo.com` | Vercel (this repo) |
| Blog posts | `didiermurillo.com/blog/<slug>` | Vercel (this repo, `content/blog/`) |
| Live apps (Shiny, APIs) | `<app>.didiermurillo.com` | Own server (e.g. `nd-ag.didiermurillo.com`) |

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Writing a blog post

Each post is a folder in `content/blog/`. The folder name is the URL:
`content/blog/pheno-gams/` → `didiermurillo.com/blog/pheno-gams`.

1. Copy `content/blog/_template/` to `content/blog/<your-slug>/`.
2. Edit `index.qmd` (R code, plots, math) and render it with Quarto:
   ```bash
   quarto render content/blog/<your-slug>/index.qmd
   ```
   This writes `index.md` plus the plot images next to it. The site reads
   `index.md`; keep the `.qmd` in the folder as the source.
   No R code? Skip Quarto and write `index.md` directly with the same front matter.
3. Run `npm run dev` and check the post at `/blog/<your-slug>`.
4. Commit and push. Vercel rebuilds and the post shows up on the blog, the home
   page, the RSS feed and the sitemap.

Front matter fields: `title`, `date` (YYYY-MM-DD), `summary`, `tags`, and the
optional `cover`, `coverAlt`, `code` and `draft`. Images are referenced relative
to the post folder (`figures/plot.png`); they are copied to `public/blog/<slug>/`
automatically before `dev` and `build`. Folders starting with `_` are ignored.

## Editing the rest of the site

- `src/content/site.js`: name, links (add your email or CV here), "Right now",
  topics, skills and the about-page timeline. Empty sections are hidden.
- `src/content/projects.js`: project cards. Live apps link to their subdomain;
  write-ups link to `/blog/<slug>`.
- `public/didier-profile.jpeg`: profile photo.

## Deploying to didiermurillo.com

1. In Vercel, open this project → Settings → Domains → add `didiermurillo.com`
   (and `www.didiermurillo.com`, redirecting to the apex).
2. At your DNS provider, add the records Vercel shows (an `A` record for the apex
   and a `CNAME` for `www`). Leave the `nd-ag` record as it is.
3. Set `NEXT_PUBLIC_SITE_URL=https://didiermurillo.com` in the Vercel project
   environment variables (it is also the default).
