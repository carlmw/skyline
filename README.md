# Skyline

A demonstration of a simple sortable table component.

[Approach](#approach)<br>
[Known limitations](#known-limitations)<br>
[Installation](#installation)<br>
[Available Scripts](#available-scripts)

<img width="400" alt="Screenshot of the project in action" src="https://user-images.githubusercontent.com/122096/46789490-73d2fa00-cd34-11e8-9d7d-9d86660897cd.png">

## Approach

I split the task into two sessions, the aim of each to have a functional and deliverable app.

1. A static table displaying the raw tabular data from our data source
2. Add some interaction to enable sorting with routing

In the end I spent around 1 hour 15 minutes (including documentation)

The commit log should give you a good idea of how the project evolved from a bootstrapped React app.

## Known limitations

### Column sorting is only in one direction (ascending)
It should be possible to reverse the direction and toggle off the sorting entirely. There is currently no indiciation of which column we're sorting by in the UI.

### Routing is tightly coupled to `<Table />`
The next iteration might introduce a render prop to `<Table />` for header cells to enable re-use of the component.

```jsx
<Table renderColumn={column => <Link to={`/orderBy/${column}`}>{column}</Link>} />
```

### Pagination

Our data source is pretty small at the moment but I could see our dataset growing in the future to require pagination (either on the client or server).

### 3rd party libraries
At this point now that we have a better idea of how our table is going to behave it would be worthwhile looking at 3rd party libraries.<br>
<https://react-table.js.org> seems on the surface to be a good drop in replacement for our own `<Table />` and `<TableSorter />` components.

### CSS

At the moment there is no styling whatsoever (although the raw table styling looks pretty good).

### Redux

It would naturally follow that as the app becomes more complicated we might introduce Redux.<br>

By isolating our table state in `<TableDataSource />` it will be much easier to move to Redux actions without changing any lower level components.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You'll need a recent version of Node (>=6) and NPM or Yarn to install this project.

After checking out the repo run `npm install` then you'll have access to the scripts in the next section.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
