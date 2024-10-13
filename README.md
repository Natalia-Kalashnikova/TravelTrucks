# TravelTrucks APP (Frontend)

## Project Overview

TravelTrucks is a web application for renting campers in Ukraine. It offers
users a seamless experience to explore a variety of camper listings, read
reviews, and make bookings.

### Key Features

- **Home Page**: Showcases the main services with a prominent call to action.
  ![Home page](src\assets\Home-page.png)
- **Camper Catalog**: Displays all available campers with filtering options
  (location, body type, amenities). ![Catalog page](src\assets\Catalog.png)
- **Individual Camper Page**: Provides detailed information about a selected
  camper, including a gallery of images, user reviews, and a booking form.
  ![Trucks page](src\assets\Trucks-page.png)

### Main API Endpoints

To implement the functionality for working with camper listings in your frontend
application, use the ready-made backend API available at the following link:

```bash
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

The application interacts with a backend API for camper listings, accessible at:

- `GET /campers` – Fetch all camper listings (filtering handled on the backend).
- `GET /campers/:id` – Fetch detailed information for a specific camper by its
  ID.

## Technology Stack

- **React**: For building the user interface.
- **Vite**: As the project bundler and local server.
- **Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests.
- **React Router**: For navigation between different pages.
- **React Hot Toast**: For displaying notifications.
- **React Loader Spinner**: For loading indicators.
- **React Date Range**: For selecting dates in the booking form.

## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js**
- **npm**

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/Natalia-Kalashnikova/TravelTrucks
   ```
2. **Install dependencies**
   ```bash
   cd traveltrucks
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Build the project for production**
   ```bash
   npm run build
   ```
5. **Preview the production build**
   ```bash
   npm run preview
   ```
6. **Run code linting**
   ```bash
   npm run lint
   ```

## Conclusion

TravelTrucks is a comprehensive solution for users looking to rent campers. With
its user-friendly interface and robust features, it simplifies the camper rental
process, making it enjoyable and efficient.
