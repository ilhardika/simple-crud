# Simple CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built with React TypeScript frontend and Express.js backend.

## Features

- Create new items with name and description
- View list of all items
- Update existing items
- Delete items
- Responsive design
- TypeScript support for better type safety
- RESTful API endpoints

## Tech Stack

### Frontend
- React 18
- TypeScript
- CSS3
- React Hooks (useState, useEffect)

### Backend
- Node.js
- Express.js
- CORS for cross-origin requests
- Body-parser for request parsing

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simple-crud.git
cd simple-crud
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
node server.js
```
The backend server will run on http://localhost:5000

2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```
The frontend application will run on http://localhost:3000

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get a single item by ID
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an existing item
- `DELETE /api/items/:id` - Delete an item

## Project Structure

```
simple-crud/
├── frontend/               # React TypeScript frontend
│   ├── public/            # Static files
│   ├── src/              # Source files
│   │   ├── App.tsx      # Main application component
│   │   ├── index.tsx    # Application entry point
│   │   └── ...
│   ├── package.json     # Frontend dependencies
│   └── tsconfig.json    # TypeScript configuration
│
└── backend/              # Express.js backend
    ├── server.js        # Main server file
    └── package.json     # Backend dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Documentation
- Express.js Documentation
- TypeScript Documentation 