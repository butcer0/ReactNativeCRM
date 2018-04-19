import people from './people.json';

// Erik - 4/19/2018 Redux needs some initial state
const initialState = {
    // Erik - 4/19/2018 Same as typing people: people
    people,
};

// Erik - 4/19/2018 This takes in the initialState if none is passed in which contains the people.json
    // When this is called, by default it will simply return the people
export default (state = initialState, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}