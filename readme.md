# Project Description

Projectr is a beautifully designed full-stack project manager app built for teams.
The project roadmap is set in stages where we begin as a simple to-do list and gradually expand functionalities.

## Roadmap

| status | version | functionality         | notes                                                                               |
| ------ | ------- | --------------------- | ----------------------------------------------------------------------------------- |
|        | v1      | simple to do list     | full CRUD with user auth                                                            |
|        | v2      | subtasks              | projects introduced. each project get their own view and projects can hold subtasks |
|        | v3      | status                | projects and tasks can show statuses, side quest: click+drag kanban interface       |
|        | v4      | sharing               | users can now share projects with other users                                       |
|        | v5      | priority & assignment | users can set priorities and assign tasks to other users                            |

## Data models

| Project Model  |
| -------------- |
| "project":     |
| "username":    |
| "status":      |
| "guests":      |
| "created_on":  |
| "finished_on": |
| "\_id":        |

| Task Model     |
| -------------- |
| "project":     |
| "username":    |
| "task":        |
| "status":      |
| "category":    |
| "guests":      |
| "priority":    |
| "assigned_to": |
| "department":  |
| "created_on":  |
| "finished_on": |
| "\_id":        |

| User Model    |
| ------------- |
| "username":   |
| "password":   |
| "created_on": |
| "\_id":       |

## endpoints

/user/signin
/user/signup

/projects
Shows all projects

/projects/:id/
Dedicated page for the selected project, showing more details
