import React, {MouseEvent} from "react";


type NumberPropsType = {
    title: string
    operationFunc?: (title: string) => void
}
export const Number = (props: NumberPropsType) => {
    const onChangeNumber = () => {
        debugger
        if (props.operationFunc) {
            props.operationFunc(props.title)
            console.log(props.operationFunc(props.title))
        }
    }
    return (
        <button className="number" onClick={onChangeNumber}>
          {props.title}
        </button>
    )

}