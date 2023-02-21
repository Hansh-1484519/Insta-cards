## User_grid

Description of the method to solve the problem

-> First of all I created a react App using create-react-app
-> According to the given problem statement, Firstly decided the User interface layout.
-> Then divided whole web app in smaller components like - Navbar, Card, Loader etc.
-> Now I have created a Navbar that showcase the brand name and a button to click and fetching the data dynamically.
-> Then implemented the card component and given the styling in the separate card.css file.
-> Now the challenge was to get the data from the API, so for that I have passed get_data method as the prop to navbar component and implemented it in APP component.
-> Now added onClick method to the Navbar button element, so on clicking the button the get_data function get executed.
-> In get_data function used the fetch method to get the data from the API and then changed the user state of the app component.
-> App component has 3 states - first is isLoading... This is initially set false but changed to true while get_data was fetching the data. This is used for rendering the Loader while data was fetching.
-> user state was initially null so no cards will be shown at initial startup of the app. onClick of the button the user state has data as object. Now this state change of app component re-render the app with the cards components dynamically using the map function.
-> This is how IT has all the required functionalities implemented.



## Time Taken to complete the Assignment - 2 days.