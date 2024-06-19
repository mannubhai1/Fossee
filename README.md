# Converting Static Website to Astro Framework: Documentation

This project aims to convert a static website into the Astro framework, leveraging Astro's modern static site generation capabilities for improved performance, maintainability, and responsiveness.

## Introduction

The provided static website has been converted into the Astro framework, utilizing HTML, CSS (Bootstrap/Tailwind), and Vanilla JavaScript. The conversion process involved refactoring the codebase into reusable Astro components, implementing responsive design principles, and optimizing performance using Astro's features.

## 🚀 Project Structure

Inside of project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── lib/
│   └── pages/
└── .gitignore
└── astro.config.mjs
└── package.json
└── README.md
```

The project directory includes the following folders for managing content:

- **FAQ**: Located in `src/content/faq`.

  - Add new FAQs by creating Markdown files with `Number`, `question`, and `answer`.

- **Footer**: Contains `about` and `resources` subfolders.

  - **About**: Located in `src/content/footer/about`.
    - Add new about links using Markdown files with `Number`, `name`, and `link`.
  - **Resources**: Located in `src/content/footer/resources`.
    - Add new resource links using Markdown files with `Number`, `name`, and `link`.

- **Homepage**: Contains `coreTeam`, `partner`, `purpose`, and `significance` subfolders.

  - **Core Team**: Located in `src/content/homepage/coreTeam`.
    - Add new team members using Markdown files with `Number`, `name`, `position`, and `institute`.
  - **Partner**: Located in `src/content/homepage/partner`.
    - Add new partners using Markdown files with `Number` and `description`.
      -Remember that position is an `array` as the person can have multiple positions in the company, so you have to enclose the whole position content in square brackets `[]`, text in double quotes `""`, and separate each text with a comma `,`.
  - **Purpose**: Located in `src/content/homepage/purpose`.
    - Add new purposes using Markdown files with `Number` and `description`.
  - **Significance**: Located in `src/content/homepage/significance`.
    - Add new significance content using Markdown files with `Number`, `intro`, `point` (array), and `end`.
    - Remember that point is an `array` so you have to enclose the whole point content in square brackets `[]`, text in double quotes `""`, and separate each text with a comma `,`.

- **Navbar Routes**: Located in `src/content/navbarRoutes`.

  - Add new routes using Markdown files with `Number`, `path`, and `name`.
  - For same page links, use `#` followed by the section id and for external links, use the full URL.

- **Partners Carousel Logos**: Located in `src/content/partnersCarouselLogos`.

  - Add new partner logos to the carousel using Markdown files with `Number`, `img`, `alt`, and `link`.
  - link is optional, keep it blank `""` if not available.

- **Resources Page**: Located in `src/content/resourcesPage`.

  - Add new resources using Markdown files with `Number`, `heading`, and `points` (list).
  - Add hyphen and for `text` and `link`, keep the `title` encloded in square brackets `[]` and then the `link` in round brackets `()`.

- **Schedule Events**: Located in `src/content/scheduleEvents`.

  - Add new schedule events using Markdown files with `Number`, `heading`, and `events` (list).
  - Add hyphen and then the event name.

- **Top Bar Logo**: Located in `src/content/topBarLogo`.
  - Add new top bar logos using Markdown files with `Number`, `link`, `img`, `alt`, `classname`, and `id`.
  - Just keep the `classname` as `img-fluid logos` and `id` blank `""`.

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
npm run start
```

### Open your browser and navigate to http://localhost:4321 to view the converted website.

## Deployment

The converted website has been deployed using Netlify and is accessible via the following URL:

## Package Use

- **Tailwind CSS**: Employed for comprehensive styling and design consistency.
- **Astro**: Utilized for efficient static site generation and improved performance.
- **Lucia**: Integrated for streamlined authentication and user management functionalities.
- **Better SQLite 3**: Implemented for robust and scalable database operations.

## License

This project is licensed under the MIT License.

## Challenges Faced

Adapting the navbar, accordion, and carousel components for mobile responsiveness proved challenging, as reliance on pre-made templates from Bootstrap and Tailwind was not viable within the Astro framework. Designing these components from scratch required extensive time and effort, especially as I lacked prior experience in creating responsive designs independently.
