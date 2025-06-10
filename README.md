Next.js Fullstack Template
This template sets up a Next.js app with a PostgreSQL database, using Prisma to manage data. It uses Docker for easy setup, Jest for testing, Cypress for end-to-end tests, and Tailwind CSS for styling.

Get Started
You'll need Node.js (v18+), npm, and Docker.

1. Set Up Environment
Create a .env file in the main folder with your database connection.

DATABASE_URL="postgresql://simon:S1m0n@postgres:5432/basicdb"
2. Prepare Database
Start PostgreSQL and set up your database.

Bash

# Start the database
docker compose up -d postgres

# Generate Prisma client and apply changes
npm run prisma:generate
npx prisma migrate dev --name init

# (Optional) Add starting data
npm run seed
3. Run the App
Start the Next.js app.

Bash

# Using Docker Compose
docker compose up nextjs

# Or directly (if not using Docker for the app)
npm run dev
Visit http://localhost:3000 in your browser.

Key Commands
npm run dev: Start development server.
npm run build: Build for production.
npm run start: Start production server.
npm test: Run unit/integration tests.
npm run test:e2e: Run end-to-end tests.
npm run prisma:generate: Update Prisma client.
npm run seed: Run database seed script.
More Info
Next.js Docs
Prisma Docs
Docker Docs
Deployment
This project is set up for easy deployment to Vercel.