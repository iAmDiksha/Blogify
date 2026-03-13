# Blogify

Blogify is a responsive personal blogging web app built with React, Redux, Tailwind CSS, and Markdown support. It lets users create, view, edit, and delete blog posts in a clean writing-focused interface, with post data stored locally in the browser.

## Features

- Create blog posts with title, category, tags, markdown content, and an optional image
- View all saved posts in a responsive blog library
- Open a full blog details page for reading
- Edit existing posts through a modal editor
- Delete posts instantly
- Filter posts by tags
- Persist blog data with `localStorage`
- Responsive UI for desktop, tablet, and mobile
- Fullscreen markdown editing support

## Tech Stack

- React
- Redux
- React Router
- Tailwind CSS
- `@uiw/react-md-editor`
- React Toastify
- React Icons

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the project

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

## Project Structure

```text
src/
  components/
    Modal.js
    Navbar.js
  pages/
    About.js
    BlogPost.js
    Blogs.js
    Home.js
    List.js
  state/
    action-creators/
    reducers/
    store.js
  App.js
  App.css
  index.css
  index.js
```

## How It Works

- Blog posts are managed with Redux.
- The Redux state is saved to `localStorage`, so posts remain available after a page refresh.
- The write page uses a markdown editor for content creation.
- The post library page supports viewing, editing, deleting, and filtering posts.

## Available Pages

- `/` - Home page
- `/add-blogs` - Create a new blog post
- `/list` - View all blog posts
- `/blogs/:index` - View a single blog post
- `/about` - About page

## Future Improvements

- Search functionality
- Richer category management
- Better validation for forms
- Backend/database integration
- Authentication and user accounts
- Blog publishing and sharing features

## License

This project is for learning and personal project use.

## SS 💀
<img width="1920" height="2256" alt="image" src="https://github.com/user-attachments/assets/642ae534-986b-4cac-840d-8ff39184daf4" />

## Live Link
https://diksha-blogify.netlify.app/


