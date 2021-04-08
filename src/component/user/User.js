import React from 'react';
import img1 from '../../asset/profile-img.43b59e59.png'
import img2 from '../../asset/avatar-1.3921191a.jpg'
import './User.css'
import { TextAndNumber } from '../card/MoneyCard'
class User extends React.Component {

    render() {
        return (
            <div className="card user">
                <div className="header-user">
                    <div className="flex-item-user">
                        <h5>Welcome Back!</h5>
                        <h6>Money Dashboard</h6>
                    </div>
                    <img src={img1} className=" background-img" alt="" />
                </div>



                <div className="flex-container">
                    <div className="infor">
                        <img src={img2} className="user-avatar" alt="" />
                        <div className="user-name">{this.props.name}</div>
                    </div>

                    <TextAndNumber title="Number Of Transactions" money="135" className="amount" />
                </div>


            </div>

        );
    }
}

export default User;