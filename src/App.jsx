import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [reviewValue, setReviewValue] = React.useState('');
    const [newsletterCheckbox, toggleNewsletterCheckbox] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Name: ${nameValue}
            Age: ${ageValue}
            Review: ${reviewValue}
            Newsletter: ${newsletterCheckbox}
            `)
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
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="user-age-field">
                        Leeftijd:
                        <input
                            type="number"
                            name="age"
                            id="user-age-field"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
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
                            value={reviewValue}
                            placeholder="Wat vond je van het recept?"
                            onChange={(e)=> setReviewValue(e.target.value)}
                        >
                        </textarea>
                    </label>
                    <label htmlFor="newsletter-checkbox">
                        <input
                            type="checkbox"
                            name="newsletter"
                            id="newsletter-checkbox"
                            value={newsletterCheckbox}
                            onChange={(e) => toggleNewsletterCheckbox(e.target.checked)}
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
