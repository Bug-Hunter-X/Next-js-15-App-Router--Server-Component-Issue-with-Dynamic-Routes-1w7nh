# Next.js 15 App Router: Server Component Issue with Dynamic Routes

This repository demonstrates a bug encountered in Next.js 15's App Router when using server components with dynamic routes. The server component fails to render correctly, resulting in a blank page or incorrect data being displayed.

## Description
The issue occurs when accessing a dynamic route that is handled by a server component. The component appears to not render or fetch data correctly. This behavior is inconsistent and may be related to the new architecture of the App Router.

## Steps to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a dynamic route, such as `/product/1`.
5. Observe that the server component does not render or displays unexpected results.

## Expected Behavior
The server component should correctly render the data associated with the dynamic route.

## Actual Behavior
The server component does not render, or renders with incorrect data, resulting in a blank page or unexpected output.

## Solution
The solution is to correctly define the dynamic route within the `app` directory structure. Make sure that you have the appropriate structure to correctly handle dynamic routes in the app directory and make sure the data fetching is performed correctly within the server component.

## Additional Information
- Next.js Version: 15.0.0
- Node.js Version: 16.14.0