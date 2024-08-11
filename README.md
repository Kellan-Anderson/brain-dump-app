# Brain dump app

A simple CRUD app for managing ideas

## The problem
Whenever I have an idea for an app, I usually take down some short notes about it either on my phone's notes app or on my laptop in a readme file much like this one. I have issues with picking up where I leave off, especially when I start an idea on my phone and want to continue it on my computer.

## The solution
I want to make a simple web app for jotting down ideas so I can shift between my phone and my laptop easily. All of my notes follow a similar template, and I want to be able to take the notes that I jot down and turn them into a readme file that I can then download so I can add it to the app if I ever make it.

## Ideas
- Home screen could be a simple page including a list of all the brain dump notes.
- Brain dumps could have a tagging feature for easier filtering
- Home page could have search, sort, and filter functionality for all the ideas
- Each brain dump could have its own page where it displays the title, the problem aiming to be solved, the purposed solution, and a list of ideas.
- Each brain dump page could have a list of options, including an edit button for each section that turns the section into a form to fill out, and a delete button if the user decides to discard the brain dump note
- There could be a way for a user to share brain dumps and to view brain dumps shared with them

## User stories
- When a user first opens the app they need to be given a short description of the app and the option to sign in/up.
- If a user opens the app and they are already signed in they are redirected to the home page.
- When a user loads the home page, they should see a list of all of their brain dumps. If there are none, the user should be told so.
- In addition to the list of brain dumps, the user should also see a search bar, a sort button, a tag filter, and a "add brain dump" button.
- When the user clicks the add brain dump button, they should be taken to /new-brain-dump
- When the user is presented with the new brain dump page, they should see a form asking them for all of the info for the idea. This info includes title, idea description, problem description, solution description, feature ideas, and user stories.
- When a user submits a form on the new brain dump page they should be redirected to the home page and the new brain dump should be added.
- When a user clicks on a brain dump, they should be taken to the page for that brain dump. The URL should follow the pattern of /brain-dump/[title-of-the-brain-dump]
- When the user is brought to the brain dump page, they should see the brain dump title, description, problem description, purposed solution, ideas and user stories related to that idea.
- Next to each of the non-list items (i.e. the problem and solution sections) there should be a pencil icon that when pressed by the user, the section turns into a form where the user can edit the section.
- At the top of the brain dump page, there could be a button that when clicked by a user, could drop down some menu options for the brain dump. These options will include a discard idea button and an export idea button.
- When a user clicks the discard idea button on the options dropdown, they will be presented with a modal asking them to confirm. Upon confirming, the idea will be deleted and the user will be redirected to the home page.
- When a user clicks the export idea button on the options dropdown, the idea will be converted to a readme.md file and be downloaded to the users device. The file will follow the same format as this one.
- On the brain dump page beneath the title of the brain dump, there needs to be a list of tags for that brain dump. There also need to be a button for a user to add a tag. When a user clicks this button, a modal will open with a simple text box and a submit button. Once submitted, the tag will be added to the idea.
- On each brain dump page, there needs to be a back button that will return the user to the home page.

## Task list
- [x] Update readme to include brain dump notes (this content).
- [x] Update database naming in the database schema and the drizzle config file.
- [x] Add shadcn-ui to the project.
- [x] Delete default app content, including the content on the home page, posts TRPC router, posts table in the db, and the posts components.
- [x] Push the app to github and deploy to vercel.
- [x] Make the home page for the app including sign in buttons that work with github and google as well as a description of the project.
- [x] Set up redirecting if the user is signed in. If there is the ?redirect=0 search param in the URL the root page should no redirect if a user is signed in.
- [ ] Make the /home page where the user sees all of their brain dumps
- [ ] Add a button that redirects the user to the new brain dump page.
- [ ] Add a new DB table to store a users brain dumps. There should be three main tables, one for the non-list brain dump sections, one for the features & ideas, and one for the user stories. Additionally, there should be one for brain dump tags.
- [ ] Add the form for the non-list items of the brain dump. Do not link to backend yet.
- [ ] Add redux for managing list items for features and user stories.
- [ ] Add support for feature and user story list items in the add brain dump form.
- [ ] Link form to backend.
- [ ] Add list for brain dumps on the home page. Each item should have the brain dump title and the description if one is present.
- [ ] Setup search bar for the home page. This should be a full text based search function on the title and the description. Click [here](https://orm.drizzle.team/learn/guides/postgresql-full-text-search) for more info on how to do this with drizzle & postgres 
- [ ] Set up sorting on the home page. The options for sorting are by date created and title.
- [ ] Add a tags filter to the home page.
- [ ] Create the brain dump page that displays all the information for all of the brain dumps.
- [ ] Add the functionality for when a user clicks on a pencil icon next to a section. When the user is on a desktop the pencil should only be seen on hover. When the user clicks on the pencil the section turns into a form. This does not apply to list items.
- [ ] Set up delete and edit options for list items. This could potentially be done using an options dropdown.
- [ ] Add options dropdown at top of brain dump page that displays options for exporting and discarding.
- [ ] Add the ability for a user to download the brain dump as a readme
- [ ] Add the functionality for deleting the brain dump, including a confirmation modal.
- [ ] Add the functionality for a user to edit the tags on a brain dump.
- [ ] Add a back button to the brain dump page.
- [ ] Add a sign out button to the home page.

## Future ideas
 - A share feature for people who want to share their idea with a team.