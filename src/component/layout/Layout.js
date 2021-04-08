import React from 'react'
import './layout.css'
export default class Layout extends React.Component {

    render() {
        

        return (
            <div className="grid-container">
                <div className="user-gird-item grid-item">{this.props.user}</div>
                <div className="card1 grid-item">{this.props.total}</div>
                <div className="card2 grid-item">{this.props.income}</div>
                <div className="card3 grid-item">{this.props.expense}</div>
                <div className="chart-grid-item grid-item">{this.props.chart}</div>
                <div className="transaction-grid-item grid-itemm">{this.props.transaction}</div>
            </div>
        );
    }
}