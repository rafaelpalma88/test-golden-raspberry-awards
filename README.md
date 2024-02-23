# Project Overview

The purpose of the application is to make it possible to read the list of nominees and winners
in the Worst Film category at the Golden Raspberry Awards

I chose NextJS as the framework because the most up-to-date ReactJS documentation suggests that we use a framework. I also took the opportunity to use the new NextJS architecture that includes React Server Components.

# File Structure and Code Organization

According to the updated NextJS documentation, we have a layout in the /app folder that allows the top menu to be displayed and in this folder we have two pages, the list page and the dashboard.

We use react-hook-forms to control and delegate the state of the forms used in the project.

For lint and code standardization we use Eslint and Prettier.

To test components and interfaces, we use the Jest and React Testing Library.

To fetch data with the API we use Axios. There is an increment that I later want to make using environment variables.

## Routing

The application routing uses the NextJS App Router, which is worth mentioning as it is an innovation in the React ecosystem using the new NextJS Server Components architecture.

## Installation and Configuration

First, clone the project in your computer and install dependencies using:

```bash
npm install
```

After, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Production Website

Vercel Website [Vercel Website](test-golden-raspberry-awards.vercel.app)

## External docs

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
