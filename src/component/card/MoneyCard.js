import React from 'react';
import { IconContext } from "react-icons";
import FontAwesome from './FontAwesomeIcon'

function BlueRoundWithIcon(props) {
    return (
        <div className={`round ${props.color}`}>
            {props.icon}
        </div>
    );
}

export function TextAndNumber(props) {
    return (
        <div className={props.className}>
            <h3 className="title">{props.title}</h3>
            <h5 className={`money ${props.color}`} >{props.money}</h5>
        </div>
    );
}

class MoneyCard extends React.Component {

    render() {
        let icon;
        let color;
        switch (this.props.title) {
            case 'Total Money':
                icon = <FontAwesome name="icon fas fa-hand-holding-usd" />;
                color = "blue";
                break;
            case 'Income':
                icon = <FontAwesome name="icon fas fa-plus" />;
                color = "green";
                break;
            default:
                icon = <FontAwesome name="icon fas fa-minus" />;
                color = "red";
                break;
        }
        let customIcon = (<IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2.5em" }}>
            {icon}
        </IconContext.Provider>);
        return (
            <div className="card flex-container-card">
                <TextAndNumber color={color} title={this.props.title} money={this.props.money} className="flex-item" />
                <BlueRoundWithIcon icon={customIcon} color={color + "-background"} />

            </div >
        )
    }
}

export default MoneyCard;
