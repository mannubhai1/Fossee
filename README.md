# Converting Static Website to Astro Framework: Documentation

This project aims to convert a static website into the Astro framework, leveraging Astro's modern static site generation capabilities for improved performance, maintainability, and responsiveness.

## Introduction

The provided static website has been converted into the Astro framework, utilizing HTML, CSS (Bootstrap/Tailwind), and Vanilla JavaScript. The conversion process involved refactoring the codebase into reusable Astro components, implementing responsive design principles, and optimizing performance using Astro's features.

## 🚀 Project Structure

Inside of project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Accordion.astro
│   │   └── Carousel.astro
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── HomeBody.astro
│   │   └── IconBar.astro
│   │   └── Navbar.astro
│   │   └── ResourcesBody.astro
│   │   └── ScheduleBody.astro
│   │   └── TopBar.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
│       └── resources.astro
│       └── schedule.astro
└── .gitignore
└── astro.config.mjs
└── package.json
└── README.md
```

## Setup Instructions

To run the project locally, follow these steps:

1. Clone the repository using the following command:

```bash
git clone https://github.com/mannubhai1/Fossee.git
```

## Navigate to the project directory:

```bash
cd FOSSEE
```

## Install dependencies:

```bash
npm install
```

## Start the development server:

```bash
npm run dev
```

### Open your browser and navigate to http://localhost:4321 to view the converted website.

## Deployment

The converted website has been deployed using Netlify and is accessible via the following URL:

## License

This project is licensed under the MIT License.

## Challenges Faced

Adapting the navbar, accordion, and carousel components for mobile responsiveness proved challenging, as reliance on pre-made templates from Bootstrap and Tailwind was not viable within the Astro framework. Designing these components from scratch required extensive time and effort, especially as I lacked prior experience in creating responsive designs independently.
