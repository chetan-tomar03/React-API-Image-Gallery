# React API Image Gallery

A simple React project built to understand and practice **API fetching in React**.

The project fetches images from the **Picsum Photos API** and displays them dynamically. It also includes pagination to load images from different API pages.

## Features

* Fetch images using an API
* Display API data dynamically in React
* Pagination with Previous and Next buttons
* Loading state while fetching data
* React `useState` for managing data and page number
* React `useEffect` for triggering API calls when the page changes
* Axios for making API requests

## Technologies Used

* React.js
* Axios
* Tailwind CSS
* Picsum Photos API

## API Used

Picsum Photos:

`https://picsum.photos/v2/list`

The project fetches 21 images per page.

Example:

`https://picsum.photos/v2/list?page=1&limit=21`

## How It Works

1. The user opens the application.
2. React calls the Picsum Photos API using Axios.
3. The received image data is stored using `useState`.
4. The images are displayed on the page.
5. Clicking **Next** changes the page number.
6. `useEffect` detects the page change and fetches new images.
7. Clicking **Prev** loads the previous page.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project folder:

```bash
cd react-api-image-gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Learning Objective

The main purpose of this project was to understand how **API fetching works in React**, how API data is stored in state, and how `useEffect` can be used to fetch new data when the page changes.

