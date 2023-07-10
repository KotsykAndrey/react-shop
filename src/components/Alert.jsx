import { useEffect, useContext } from "react";
import { AppContext } from "../context";

function Alert() {
    const { alertName , closeAlert = Function.prototype } = useContext(AppContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
    },[alertName]);

    return (
        <div id="#toast-container">
            <div className="toast">{alertName} has been added to cart!</div>
        </div>
    )
}

export {Alert}