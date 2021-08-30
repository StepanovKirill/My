import React from 'react';
import {rub} from '../../helpers/format';
import Panel from '../../ui/Panel/Panel';

/* TODO: data.map() for any panelcount */

const AnyRate = ({data}) => {
    return (
        <div>
        <Panel title={data.Valute.USD.Name}>
            <div className="body">Покупка: {rub(data.Valute.USD.Value)}</div>
            <div className="body">Продажа: {rub(data.Valute.USD.Previous)}</div>
        </Panel>
        <Panel title={data.Valute.EUR.Name}>
            <div className="body">Покупка: {rub(data.Valute.EUR.Value)}</div>
            <div className="body">Продажа: {rub(data.Valute.EUR.Previous)}</div>
        </Panel>
        </div>
    );
};

export default AnyRate;