
# Video Game Filtering Website

A **React** and **Vite** based web application to explore and filter video games and the platforms they run on. This website allows users to view a list of video games, filter them based on platform, and view additional information such as critic scores and supported platforms.

## Features

- View a list of popular video games.
- Filter games by platform (PC, PlayStation, Xbox, etc.).
- Display important game information, including platform icons and critic scores.
- Responsive UI using **Tailwind CSS**.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development build tool for modern web projects.
- **Chakra UI**: A utility-first CSS framework for rapid UI development.
- **REST API**: The website fetches video game data from an external API.

## Demo

![Screenshot of the app](./src/assets/logo.png) <!-- Add a screenshot image here -->

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following tools installed on your machine:

- **Node.js** (>=14.0.0)
- **npm** (comes with Node.js)
- **Vite** (for fast development builds)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NeerajNightCoder/game-reviewer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd game-reviewer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running Locally

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Vite development server at `http://localhost:5173/`.

2. Open your browser and navigate to `http://localhost:5173`. You should see the app running.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will bundle the app for production in the `dist` folder, ready to be deployed.
