import { useEffect, useContext } from "react";
import { AppContext } from "../context";

function Alert() {
    const { title , closeAlert = Function.prototype } = useContext(AppContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
    },[title]);

    return (
        <div id="#toast-container">
            <div className="toast">{title} has been added to cart!</div>
        </div>
    )
}

export {Alert}