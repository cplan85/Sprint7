# Sprint 7 - Budget App

The Sprint 7 - Budget App is an Angular application that allows users to develop simple web services budgets and then dynamically display that information through charts and figures. The user is then able to save the Budgets through local storage, and upon reloading all the saved budgets remain available to the user. As a final functionality, a user is able to filter through their saved budgets based by the budget's name.

## **Preview**

## ![preview gif](Sprint7-preview.gif)

---

## :wrench: **Tech used in this project**

In this project I used Angular with Angular Materials Libraries components to develop a web app that allows users to save their budgets. A budget service is shared by various components to update the total amount. Different page links are handled through Angular's router module. The user begins in the welcome page, and then is taken to the main budget page, which has several check boxes and inputs fields to allow customizing the numbers in the budget. Angular's Reactive forms handles the inputs that modify the budget total. Modals from Angular Materials provides helpful feedback when needed. If the user would like to save the budget, a save budget feature is provided where the user can save the budget with a name and customer fields. The saved budgets are then displayed in the saved budgets component on the right through local storage.

<p>
The user can filter the saved budgets through the use of a budget list service. To help faciliate the search process, I created a custom search filter pipe that highlights the search term as the user types in the letters.<p>

<p>
Finally, each change in the budget modifies the website url through the use of Angular's Router Params. A user can copy and paste the exact url link, and the budgets will appear with exactly those matching budget parameters.</p>

---

## :mortar_board: **What did I learn from this project**

In this project I learned how to use, and how to implement filtering processes through string search and toggling tags. These filtering processes were developed in separate components with data shared through Angular services.
Also due to the breadth of the Pokemon APIs with a large hierarchy of nested objects, I learned how to break down the accessing of information, and to logically create intermittent API calls once an earlier API call finished.

---

## :memo: **What do I still need to do**

1. Load additional Pokemon card through bottom "Load More Pokemons" button or implementing infinite scrolling.

2. Global search function that allows user to search all possible Pokemons rather than just the loaded Pokemons.

3. Implement unit tests to ensure filtering function works exactly as intended.

4. Additional styling to cards.

5. Refactor the code.

---

## :seedling: **Getting Started with this project**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation

Clone or fork the Repo, and ensure that you have the [Angular CLI](https://github.com/angular/angular-cli) installed.

In the project directory.

```bash
npm install
```

In the project directory.

```bash
ng serve --open
```

## :bookmark_tabs: **Usage Instructions**

Upon starting live server, 24 Pokemon cards will load. type in the name of the Pokemon you want to find in the search field, and the page will change accordingly to find your match. Click on any of the tags below to filter the pokemon by its type.
Click on any of the cards to view that Pokemon's stats.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
