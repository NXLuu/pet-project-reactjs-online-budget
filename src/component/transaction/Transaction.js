import React from "react"
export default class Transaction extends React.Component {

    render() {
        const {name, type, date, total} = this.props.data;
        
        const key = name;
        console.log(this.props.data);

        const colorType = (type === 'expense')? 'red': 'green';

        return (
            <tr key={key} className="row">
                <td className="cell">{name}</td>
                <td className={`${colorType} cell`}>
                   <span class="background-type">{type}</span> 
                </td>
                <td className="cell">{date}</td>
                <td className="cell">{total}</td>
            </tr>
        );

    }
}