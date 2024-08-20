const showPopup = (errMsg, setErrorMsg) => {

    setErrorMsg(errMsg);
    setTimeout(() => {
        setErrorMsg(null);
    }, 2000);
}
export {showPopup};