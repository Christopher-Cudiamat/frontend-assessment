# Frontend assessment project

![mobile-view](https://github.com/Christopher-Cudiamat/frontend-assessment/assets/52795465/e448e085-57d1-427d-8fbf-f1f396712663)

![desktop-view](https://github.com/Christopher-Cudiamat/frontend-assessment/assets/52795465/723a166b-1f67-4af8-8623-1f9b521e0d8f)

#Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.
    Answer: The trick is in the + + 'a', specifically, the + 'a'.There’s no number between the two plus signs. The browser attempts to add nothing to 'a', which returns NaN or Not a Number. The final part of the trick is the lowerCase() method, which turns the capital N’s from NaN into lowercase that is why the result of the operation will be "banana".
    
# Next.js Starter Project

This is a starter project for React that uses Next.js.

- React-Bootstrap library integration to create a more seamless front-end development experience and to have more control over the appearance and function of the components in this project.
- Uses TypeScript that extends JavaScript to enable type safety in the project.
- Uses BEM methodology for easy to read class names.

## About

A Frontend assesment project.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/Christopher-Cudiamat/frontend-assessment.git
    npm install
    npm run dev

## `npm run lint`

This command runs the code linter in a "fix" mode.

## `npm run format:fix`

This formats the code using the Prettier code formatter.
