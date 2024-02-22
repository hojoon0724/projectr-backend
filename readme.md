# Project Description

Projectr is a beautifully designed full-stack project manager app built for teams. <br>
The project roadmap is set in stages where we begin as a simple to-do list and gradually expand functionalities.<br>

## Roadmap

| status | version | functionality         | notes                                                                               |
| ------ | ------- | --------------------- | ----------------------------------------------------------------------------------- |
|        | v1      | simple to do list     | full CRUD with user auth                                                            |
|        | v2      | subtasks              | projects introduced. each project get their own view and projects can hold subtasks |
|        | v3      | status                | projects and tasks can show statuses, side quest: click+drag kanban interface       |
|        | v4      | sharing               | users can now share projects with other users                                       |
|        | v5      | priority & assignment | users can set priorities and assign tasks to other users                            |

## Data models

| Project Model  | Task Model     | User Model    |
| -------------- | -------------- | ------------- |
| "project":     | "project":     |               |
| "username":    | "username":    | "username":   |
|                |                | "password":   |
|                |                | "created_on": |
|                |                | "\_id":       |
|                | "task":        |               |
|                | "status":      |               |
|                | "category":    |               |
|                | "guests":      |               |
|                | "priority":    |               |
|                | "assigned_to": |               |
|                | "department":  |               |
|                | "created_on":  |               |
|                | "finished_on": |               |
|                | "deadline":    |               |
|                | "\_id":        |               |
| "status":      |                |               |
| "guests":      |                |               |
| "created_on":  |                |               |
| "finished_on": |                |               |
| "deadline":    |                |               |
| "\_id":        |                |               |

## endpoints

/user/signin<br>
/user/signup<br>
<br>
/projects<br>
Shows all projects<br>
<br>
/projects/:id/<br>
Dedicated page for the selected project, showing more details<br>
