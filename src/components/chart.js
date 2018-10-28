import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
export default (props) => {
    function average(data) {
        const sum = data.reduce((i, j) => { return i + j }, 0);
        return Math.round(sum / data.length);
    }
    return (

        < div >
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)}{props.unit}</div>
        </div >
    )
}