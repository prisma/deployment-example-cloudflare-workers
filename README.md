# Cloudflare Workers Deployment Example

## Getting started

Clone the example:
```bash
git clone git@github.com:prisma/deployment-example-cloudflare-workers
```

Install the dependencies:
```bash
cd deployment-example-cloudflare-workers
npm install
```

Create a `.env` file:
```bash
cp .env.sample .env
```

Update the `DIRECT_DATABASE_URL` environment variable to point ot your database:

```bash
DIRECT_DATABASE_URL="postgresql://johndoe:super-strong-password@host.db.ondigitalocean.com:5432/deployment-example-cloudflare-workers"
```

Configure your database connection string and an [Accelerate connection string](https://prisma.io/accelerate?q=TODO):

```bash
# .env
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=API_KEY"
```

Update your `wrangler.toml` file with your Accelerate connection string
```toml
# wrangler.toml
[vars]
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=API_KEY"
```

Start up the application
```
npm run dev
```

Open up [http://127.0.0.0:8787](http://127.0.0.0:8787) in your browser to make sure it's working


Deploy the application:
```
npm run deploy
```


