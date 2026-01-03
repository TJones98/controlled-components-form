import React from 'react';
import './App.css';

function App() {

    const [formState, setFormState] = React.useState({
        name: '',
        age: 0,
        review: '',
        newsletter: false
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value === 'checkbox' ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="user-name-field">
                        Naam:
                        <input
                            type="text"
                            name="name"
                            id="user-name-field"
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="user-age-field">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="user-age-field"
                            value={formState.age}
                            onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label className='review-field' htmlFor="review-field">
                        Opmerkingen:
                        <textarea
                            id="review-field"
                            name="review"
                            rows="5"
                            cols="30"
                            value={formState.review}
                            placeholder="Wat vond je van het recept?"
                            onChange={handleChange}
                        >
                        </textarea>
                    </label>
                    <label htmlFor="newsletter-checkbox">
                        <input
                            type="checkbox"
                            name="newsletter"
                            id="newsletter-checkbox"
                            value={formState.newsletter}
                            onChange={handleChange}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default App;
