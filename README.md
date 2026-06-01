<<<<<<< HEAD
# Pravexa Technologies MERN Website

A complete premium software agency website built with Create React App, plain CSS, Node.js, Express, MongoDB, Mongoose, Multer, CORS, and dotenv.

## Folder Structure

```text
pravexa-technologies-mern/
  client/                 React Create React App frontend
  server/                 Express backend
    server.js             Backend entry file
    models/               MongoDB schemas
    routes/               API routes
    middleware/           Auth and upload middleware
    uploads/              Uploaded resumes/project files
```

## Setup

1. Install dependencies:

```bash
npm run install-all
```

2. Create `server/.env` from `server/.env.example`.

3. Start backend:

```bash
npm run server
```

4. Start frontend:

```bash
npm start
```

The frontend runs on `http://localhost:3000` and proxies API calls to `http://localhost:5000`.

## API Routes

- `POST /api/contact`
- `POST /api/internship`
- `POST /api/project-request`
- `POST /api/admin/login`
- `GET /api/admin/contacts`
- `GET /api/admin/internships`
- `GET /api/admin/project-requests`

## Admin

Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `JWT_SECRET` in `server/.env`. The admin dashboard is available at `/admin`.
=======
# Pravexa Technologies

Pravex Technologies is a software development company dedicated to creating innovative digital solutions for startups, businesses, and students. We specialize in web development, application development, custom software solutions, internship programs, and real-world project execution.

## Our Services
- Web Development
- Mobile Application Development
- Custom Software Solutions
- UI/UX Design
- College Project Development
- Internship & Training Programs
- Technical Consulting

## Mission
To transform ideas into scalable digital products while fostering the next generation of technology professionals through hands-on learning and industry-focused development.
>>>>>>> 40c815548e3ddad772dd496e5bfc07cd07c58f9e
