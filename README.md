# fdiba-alumni
Communication space for Alumni from FDIBA, Technical University of Sofia

1. Home Page
	Header: Includes the application logo, navigation bar (Home, About, Register, Login, Contact).
	Main Section: A welcoming message or a brief introduction about the alumni network, highlighted with a large, engaging image or a slider of alumni events and success stories.
	Call to Action: Buttons for "Register Now" and "Login" prominently displayed.
	Footer: Contains contact information, social media links, and quick links to privacy policy and terms of use.

2. Registration Page
	Form Fields:
		Personal Information: Name, email address, graduation year, degree.
		Professional Information: Current job title, company, industry sector.
		Login Information: Desired username, password, and password confirmation.
		Security Features: Tips for creating a strong password, captcha or similar to prevent bot registrations.
		Submit Button: A clear, visible button to submit the registration.
		Privacy Policy: A checkbox for agreeing to the privacy policy and terms of use before submission.

3. Login Page
	Form Fields:
		Username and Password: Standard login fields.
		Remember Me: Checkbox option to save login credentials.
		Login Button: Clearly marked and accessible.
		Forgot Password: Link to reset the password.
		Support Links: Links for troubleshooting or contacting support if having trouble logging in.

4. Dashboard (Post-Login)
	Welcome Header: Personalized greeting, e.g., "Welcome [Name]!"
	Navigation Panel: Links to different sections like Profile, Projects, Events, Settings.
	Main Content Area:
	Recent Updates: Latest news, upcoming events, or recent alumni posts.
	Quick Stats: Quick overview of the user's profile visits, messages, or notifications.
	Sidebar: Contains quick links to frequently used tools or sections, such as updating profile, adding a new project, or searching for alumni.

5. Profile Editing Page
	Form Sections:
	Edit Personal Information: Allows for editing name, contact details, profile picture.
	Edit Professional Background: Update current job, skills, resume.
	Social Links: Add or edit links to professional social media accounts (LinkedIn, GitHub).
	Privacy Settings: Options to control who can see their profile or specific parts of it.
	Save Changes Button: Clearly marked and confirms the saving of any changes made.

6. Job Board
	Functionality: A dedicated page for job postings that are relevant to alumni, which can be either posted by the alumni themselves or by external recruiters.
	Features:
		Job search functionality with filters for type, location, and experience level.
		Ability for users to upload their resumes and apply directly through the platform.
		Notifications for job matches based on the alumni’s profile and preferences.

7. Alumni Directory
	Functionality: An interactive directory that allows users to search for and connect with other alumni.
	Features:
		Searchable database by name, graduation year, degree, or current employer.
		Privacy controls to manage what information is visible to others.
		Integration with LinkedIn profiles for professional networking.

Project Structure Overview

Backend (.NET Core & MySQL)
1. API Layer:
	Controllers to handle requests for different resources (e.g., Users, Events, Jobs).
	DTOs (Data Transfer Objects) for safe data transfer between client and server.
2. Service Layer:
	Services to encapsulate business logic and interact with the repository layer.
	Interface-based design for services to facilitate testing and maintenance.
3. Data Access Layer (Repository Pattern):
	Repositories for abstracting access to data stored in MySQL.
	Entity Framework Core for ORM.
4. Authentication/Authorization:
	Keycloak integration for secure user authentication and role-based authorization.
	Configuration for OAuth2 and OpenID Connect protocols.
5. Models:
	Entity models representing the tables in MySQL (e.g., User, Event, Job).
6. Migration Management:
	Entity Framework Core Migrations to manage database schema changes.
	
Security Integration (Keycloak)
	Setup clients and roles in Keycloak.
	Secure API endpoints using bearer token authentication.
	Configure CORS policies appropriately in .NET Core.
