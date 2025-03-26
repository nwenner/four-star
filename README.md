# Four-Star

This project was originally built as a technical evaluation for a frontend engineering role in 2021, 
and ultimately led to a job offer. The goal was to demonstrate modern React development practices in 
a short timeframe, with a focus on component structure, routing, and user interaction. I went above 
and beyond and built a fully functional MVP.

## Tech Stack

- **React** (via Create React App)
- **React Router** for client-side navigation
- **Styled Components** for scoped styling
- **AWS Amplify CLI** to provision backend infrastructure
    - **Lambda + API Gateway** for CRUD API endpoints
    - **Amazon Cognito** for user authentication (User Pools)
    - **Amazon DynamoDB** for storing movie records and user ratings/comments
    - **S3 + CloudFront** for static web hosting

> Note: The hosted version and backend infrastructure have been decommissioned to reduce AWS costs, but the original architecture included full authentication and API integration.

## Functionality

At the time of delivery, the application supported:

- **User Account Management**
    - Sign-up, sign-in, and sign-out workflows
    - Forgotten password / password reset flow via Cognito
- **Movie Catalog**
    - CRUD operations on movie records (title, description, thumbnail)
    - Storage backed by DynamoDB
- **Commenting System**
    - Authenticated users could leave comments on individual movie records
- **Rating System**
    - Users could rate movies on a 1–5 star scale
    - Simple average rating aggregation displayed per movie
- ** Rudimentary Security **
    - Authenticated users could only edit/delete their own comments
    - Authenticated users could only rate a movie once

## Purpose

This project is archived and no longer maintained, but remains public as a representative sample of my frontend engineering work — particularly under time constraints and technical evaluation scenarios.


### Running Locally

```
// Runs the app in the development mode (http://localhost:3000).
yarn start 

// Launches the test runner in the interactive watch mode.
yarn test  
 
// Compiles/bundles the app for production to the `build` folder. 
// We use 'aws s3 sync build/ s3://<bucket-name> --delete --profile <profile>' to deploy the app to AWS S3. 
yarn build
```

## License

This project is licensed under the [MIT License](LICENSE).




