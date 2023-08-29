import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 8, 21);
    // const expenseTitle = 'car insurace';
    // const expenseAmount = 240;

    //using javascript logic to extract date in calender format
    //    const month=props.date.toLocaleString('en-us',{month:'long'});
    //    const day=props.date.toLocaleString('en-us',{day:'2-digit'});
    //    const year=props.date.getFullYear();

    // let title = props.title;
    // const clickHandler = () => {
    //     title = "updated";
    //     console.log(title);
    // }
    // const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {

    //     setTitle("updated!!");

    // }

    return (
        <li>
            <Card className="expense-item">
                {/* <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>      
            </div> */}
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">Rs.{props.amount}</div>
                </div>
                {/* <button onClick={clickHandler} >Update title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;