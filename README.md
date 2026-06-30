# 🎓 Student Management System - Angular Frontend


## 📌 About The Project

This project is the frontend application of my **Student Management System** built using Angular.

I developed this project to understand how modern frontend applications work and how a frontend application communicates with a backend REST API.

The application allows users to manage student information with complete CRUD operations.


## 🚀 Features

✅ Dashboard with total student count

✅ View all students

✅ Add new student

✅ Edit existing student details

✅ Delete student records

✅ Search students

✅ Angular routing navigation

✅ Reactive forms validation

✅ REST API integration


# 🛠️ Technologies Used


## Frontend

- Angular
- TypeScript
- HTML5
- CSS3
- Angular Router
- Reactive Forms
- HttpClient


## Backend

- Java
- Spring Boot
- Spring Data JPA
- REST API


## Database

- MySQL



# 🏗️ Project Structure


```
student-management-ui

src

 ├── components

 │     ├── dashboard

 │     ├── student-list

 │     ├── add-student

 │     └── edit-student


 ├── services

 │     └── student.service.ts


 ├── models

 │     └── student.ts


 ├── app.routes.ts

 └── app.config.ts

```



# 🔗 Frontend and Backend Connection


The Angular frontend communicates with my Spring Boot backend using REST APIs.


Angular uses:

```
HttpClient
```

to send HTTP requests.


## API Communication:


### GET

Used to fetch student details.

Example:

```
GET http://localhost:8080/api/students
```



### POST

Used to add a new student.

Example:

```
POST http://localhost:8080/api/students
```



### PUT

Used to update student information.

Example:

```
PUT http://localhost:8080/api/students/{id}
```



### DELETE

Used to delete student information.

Example:

```
DELETE http://localhost:8080/api/students/{id}
```



The Spring Boot backend processes these requests and stores/retrieves data from MySQL database.



# 📸 Application Screenshots


## Dashboard

The dashboard displays the total number of students available in the system.


![Dashboard](screenshots/dashboard.png)



## Student List

Displays all student records fetched from the backend database.


![Student List](screenshots/student-list.png)



## Add Student

Form to add new student information.


![Add Student](screenshots/add-student.png)



## Edit Student

Allows updating existing student details.


![Edit Student](screenshots/edit-student.png)




# 📚 What I Learned From This Project


Through this project I learned:


- Angular component architecture

- Creating reusable services

- Angular routing

- Reactive Forms

- Connecting frontend with backend

- Working with REST APIs

- CRUD operations

- Handling database-driven applications



# ▶️ How To Run The Project


Clone repository:


```
git clone YOUR_GITHUB_REPOSITORY_LINK
```


Install dependencies:


```
npm install
```


Run Angular application:


```
ng serve
```


Application runs at:


```
http://localhost:4200
```



# 🔮 Future Improvements


- User authentication

- Better UI design

- Pagination

- Deployment

- Advanced dashboard analytics



# 👨‍💻 Developer


Adithya


GitHub:

YOUR_GITHUB_PROFILE_LINK


```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
