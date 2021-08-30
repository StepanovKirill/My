import React, {useState} from 'react';
import Rates from './components/Rates';
import MainPanel from './ui/MainPanel/MainPanel';
import PropTypes from 'prop-types';

const App = () => {

    const [date, setDate] = useState(null);
    const updateDate = (data) => {
        setDate(data);
    };

    return (
        <div>
            <MainPanel title="Курс валют">
                <Rates updateDate={updateDate}/>
                <div style={{'margin-left':'10%'}}>
                    (последнее обновление: {date})
                </div>
            </MainPanel>
        </div>
    );
};

export default App;