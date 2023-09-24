import { useState } from "react";

import "./CostItem.css";

import Card from "../UI/Card";
import CostDate from "./CostDate";

const CostItem = (props) => {
    const [description, setDescriprion] = 
        useState(props.description);

    const changeDescriptionHandler = () => {
        setDescriprion("New text");
    }

    return (
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>
                Изменить описание
            </button>
        </Card>
    );
};

export default CostItem;