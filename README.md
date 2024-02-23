# Project Overview

The purpose of the application is to make it possible to read the list of nominees and winners
in the Worst Film category at the Golden Raspberry Awards

I chose NextJS as the framework because the most up-to-date ReactJS documentation suggests that we use a framework. I also took the opportunity to use the new NextJS architecture that includes React Server Components.

![Welcome screen](assets/screen1.png)

![Movies list screen](assets/screen2.png)

![Dashboard screen](assets/screen3.png)

# File Structure and Code Organization

According to the updated NextJS documentation, we have a layout in the /app folder that allows the top menu to be displayed and in this folder we have two pages, the list page and the dashboard.

We use react-hook-forms to control and delegate the state of the forms used in the project.

For lint and code standardization we use Eslint and Prettier.

To test components and interfaces, we use the Vitest and React Testing Library.

I used Shadcn/ui and Tailwind CSS to use components and custom CSS styles and rules.

To fetch data with the API we use Axios.

For porpouses of securtiy, i used Next Public environment variables, that i explain below how can you install and configure in your machine.

## Routing

The application routing uses the NextJS App Router, which is worth mentioning as it is an innovation in the React ecosystem using the new NextJS Server Components architecture.

## Installation and Configuration

First, clone the project in your computer and install the dependencies using:

```bash
npm install
```

Create a .env file in the root of your project and add a API_URL:

```bash
NEXT_PUBLIC_API_BASE_URL=https://tools.texoit.com/backend-java/api/movies
```

After, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit Testing and Interface Testing

To ensure that the application works with quality, we implemented tests that can be done using the following command:

```bash
npm run test
```

## Vercel Production Website

To deploy the application using Vercel, simply click or push to the Git repository.

Production Website [Vercel Website](test-golden-raspberry-awards.vercel.app)

## FAQ (Frequently Asked Questions)

If you have any questions, I will be happy to answer you via email at [mailto:rafaelcostapalma@protonmail.com](rafaelcostapalma@protonmail.com)

My [https://www.linkedin.com/in/rafaelpalma88](Linkedin profile).

## External docs

- [Next.js](https://nextjs.org/docs)
- [React Hook Form](https://nextjs.org/docs)
- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://nextjs.org/docs)
- [Axios](https://nextjs.org/docs)
- [Shadcn/UI](https://nextjs.org/docs)
- [Tailwind CSS](https://nextjs.org/docs)
- [Eslint](https://nextjs.org/docs)
- [Prettier](https://nextjs.org/docs)
