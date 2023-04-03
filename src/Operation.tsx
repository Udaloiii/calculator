import React from "react";

type OperationType = {
    title: string
    operationFunct?: ()=> void
}
export const Operation = (props: OperationType) => {
    return (
        <button className="operation" onClick={props.operationFunct}>{props.title}</button>
        )

}