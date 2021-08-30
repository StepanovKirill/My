import React, {useEffect, useState} from 'react';
import {getRate} from '../helpers/http';
import Loader from '../ui/Loader/Loader';
import Button from '../ui/Button/Button';
import AnyRate from './AnyRates/AnyRate';
import PropTypes from 'prop-types';

const Rates = ({updateDate}) => {

    function formatDate(dateStamp) {
        // создание объекта типа Date на основе строки
        const newDate = new Date(dateStamp);
        return (
            `${newDate.getHours()}:${newDate.getMinutes()} 
            ${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`
        );
    };

    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
        setLoader(true);
        setError(null);
        try {
           setData(await getRate('https://www.cbr-xml-daily.ru/daily_json.js'));
        }
        catch (e) {
            setData(null);
            setError(e);
        }
        finally {
            setLoader(false);
        }
    };
    const handleReload = () => {
      loadData();
    };

    useEffect(() => {
        loadData();
        }, []);

    if (loader)
    {
        return (
            <>
                <Loader/>
            </>
        );
    }

    if (error) {
        return (
            <>
                <p>Произошла ошибка</p>
                <Button onClick={handleReload}>Обновить</Button>
            </>
        );
    }
    if (data !== null) {
        updateDate(formatDate(data.Date));
        return (
            <>
                <AnyRate data={data} />
                <div style={{'margin-left':'36%'}}>
                    <Button onClick={handleReload}>Обновить</Button>
                </div>
            </>
        );
    }
};

Rates.propsType = {
    updateDate: PropTypes.func,
};

export default Rates;