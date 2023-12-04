






🌐 Live Site: https://survo-cd76d.web.app/

Admin: admin@123.com

password: S@mirs123

Surveyor: samirsadek@3.com

password: S@mirs123

## Features and Functionalities

* **Role-Based Access Control:** User roles (user, surveyor, admin, pro-user) with distinct permissions.Admin control over user roles, including elevating roles to admin/surveyor.

* **Survey Management:** Creation and update of surveys with various question types from the Surveyor Dashboard.Surveys with titles, descriptions, options, like/dislike counters, and categories.

* **User Engagement:** Participation in surveys limited to logged-in users.Like/dislike functionality for surveys.Report functionality for inappropriate survey content

* **Feedback Handling:** Surveyors can view feedback for individual surveys given by users 

* **Security and Authentication::** User authentication via email/password and social media.JWT token generation and storage for secure authentication.



##  Challenges you have faced for the backend

One of the initial challenges was managing environment variables for sensitive information like database credentials and API keys. Using the dotenv package helped keep these variables secure, but ensuring their proper configuration across different environments  was a key consideration.Connecting and handling operations with MongoDB via the mongodb package posed a few challenges. Understanding the asynchronous nature of database operations and ensuring proper error handling were crucial to prevent unexpected issues.Implementing JSON Web Token (JWT) authentication required careful consideration of security measures. Managing token creation, expiration, and verification using the jsonwebtoken package while integrating it with various endpoints was challenging but essential for secure user authentication.Enabling Cross-Origin Resource Sharing (CORS) using the cors middleware was necessary to allow frontend clients from different origins to access the backend. Configuring CORS appropriately to prevent security vulnerabilities was a significant consideration.Integrating Stripe for payment processing involved understanding the Stripe API and handling payment intents. Ensuring the secure handling of payment information and integrating it seamlessly with the backend was a challenge.Defining and managing routes for CRUD (Create, Read, Update, Delete) operations for users, surveys, payments, and feedback required careful planning and organization to ensure proper functionality and data consistency.Implementing robust error handling, input validation, and data sanitization across various endpoints was crucial to prevent security vulnerabilities, ensure data integrity, and provide meaningful error messages.While this codebase functions locally, deploying and scaling this backend to production environments would require additional considerations such as managing server resources, optimizing database queries, and ensuring proper logging and monitoring.
## License

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to explore, modify, and use this project as a basis for your brand-based website in the "Technology and Electronics" category.