import React from 'react';
import Transaction from './Transaction'
import './table.css'

export default class TableTransaction extends React.Component {

    render() {
        const datas = this.props.data;
        const listRow = datas.map((data) =>
            <Transaction data={data} />
        );

        return (
            <div className="container-table">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                    {listRow}
                </table>
            </div>

        );
    }
}