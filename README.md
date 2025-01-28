# SkyfordCCI

SkyfordCCI is an innovative web platform that offers a comprehensive set of educational resources, tutoring services, and courses to support learners in mastering subjects like Life Sciences, Mathematics, Physical Science, Web Development, Data Science, UI/UX Design, and more. Designed with modern technologies and responsive design, SkyfordCCI ensures an engaging and seamless user experience for students and educators alike.

---

## Key Features

1. **Home Page:**
   - A visually appealing landing page introducing the platform’s mission and core offerings.

2. **Subjects & Tutoring:**
   - Covers diverse subjects such as Life Sciences, Physical Science, and Mathematics.
   - A "Find a Tutor" feature connects students with qualified tutors for personalized learning.

3. **Courses:**
   - In-depth courses on Web Development, Data Science, and UI/UX Design.
   - Intuitive navigation for browsing and accessing course materials.

4. **User Management:**
   - Login and registration functionality for personalized dashboards.
   - User pages with options to sign in or sign out securely.

5. **Interactive Features:**
   - Quote of the Day to inspire users.
   - Integrated Calendar for scheduling and planning.

6. **Modern UI/UX Design:**
   - Built with React.js, React Router, and Bootstrap for dynamic and responsive layouts.
   - Enhanced with icons from `react-icons` for better navigation and user interaction.

---

## Tech Stack

- **Frontend:** React.js, React Router, Bootstrap, TailwindCSS
- **State Management:** React Context
- **Notifications:** react-hot-toast
- **Routing:** React Router DOM
- **Icons:** react-icons
- **Deployment:** Hosted on Vercel

---

## Deployment

SkyfordCCI is hosted on [Vercel](https://skyfordcci.vercel.app/), ensuring fast load times and high availability. The application uses client-side routing with a fallback configuration to handle nested routes seamlessly.

---

## Installation

Follow these steps to run SkyfordCCI locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/skyfordcci.git
   ```

2. Navigate to the project directory:
   ```bash
   cd skyfordcci
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Project Structure

- **/pages**
  Contains all the main pages such as LandingPage, About, Services, and Subjects.

- **/pages/courses**
  Houses course-specific pages like WebDev, DataScience, and UxUi.

- **/pages/loginform**
  Includes Login, Logout, and User components for authentication.

- **/components**
  Reusable components such as Navigation, TimeoutPopup, and Greet.

- **index.css & App.css**
  Global and component-specific styling.

---

## Known Issues & Troubleshooting

1. **Routing Issue:**
   - Ensure the `vercel.json` file has the correct rewrite rules to handle nested routes.

   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/" }
     ]
   }
   ```

2. **Refreshing Nested Routes:**
   - Use the above rewrite configuration to avoid 404 errors when refreshing pages like `/courses/ui-ux`.

3. **Responsive Design:**
   - Regularly test the site on multiple devices to ensure consistent user experience.

---

## Contributing

We welcome contributions! Please fork the repository and create a pull request with a clear description of your changes.

---

## License

SkyfordCCI is open-source and available under the MIT License.

---

## Contact

For inquiries or support, reach out to:
- **Email:** info.learniq@gmail.com
- **LinkedIn:** [Kgomotso Nkosi](https://www.linkedin.com/in/kgomotsonkosi-l/)

