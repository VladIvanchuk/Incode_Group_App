# README

This is a React Native application that displays a list of characters from the Star Wars universe and allows users to view details about each character, add them to their favorites, and view statistics on the number of female, male, and other fans.

## Installation

To install dependencies, run:

```sh
yarn
# or
npm install
```

## Usage

To start the project, run:

```sh
yarn start
# or
npm start
```

## Components

- Navigator: Handles navigation between the Home and Details screens using @react-navigation/native and @react-navigation/stack.
- Home: Displays a table of people and their details, and a FavoriteData component.
- Details: Displays more information about a selected person.
- FavoriteData: Displays how many people are in the favorites list by gender.
- PeopleTable: Displays a table of people and allows users to add or remove people from the favorites list.

## Redux

This app uses Redux for state management. The following files are included in the redux directory:

- store.ts: Configures the Redux store.
- favoriteSlice.ts: Defines the favorites slice of the store, which includes actions for adding and removing people from the favorites list and a selector to retrieve the favorites list.
- api/peopleApiSlice.ts: Defines the getPeople query to retrieve people data from the Star Wars API using @reduxjs/toolkit/query.

## Styles

This app uses a styles directory to store style sheets for each component.

## Dependencies

This project uses the following dependencies:

- react-native
- react-native-paper
- react-native-gesture-handler
- react-navigation/native
- @react-navigation/stack
- redux
- react-redux
- reduxjs/toolkit
- @reduxjs/toolkit/query
