import React from 'react'

function Notice() {
    return(
        <div className = 'Notice'>
            <header>
                <h1 className = 'quar'>QUARANTINE DASHBOARD</h1>
                <h2 className = 'Mess'>MAIN MESSAGE</h2>
            <form className = 'Not'>
                <h3>MESSAGE</h3>
                <p>Important Information about Quarantine 1</p>
                <a href = './Pages/Notice 1'>Click here>></a>
                <h3>MESSAGE</h3>
                <p>Important Information about Quarantine 2</p>
                <a href = './Pages/Notice 2'>Click here>></a>
                <h3>MESSAGE</h3>
                <p>Important Information about Quarantine 3</p>
                <a href = './Pages/Notice 3'>Click here>></a>
                <h3>MESSAGE</h3>
                <p>Important Information about Quarantine 4</p>
                <a href = './Pages/Notice 4'>Click here>></a>
            </form>
            </header>
        </div>
    );
}
export default Notice;
