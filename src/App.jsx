import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </form>
        </div>
    );
}

export default App;
