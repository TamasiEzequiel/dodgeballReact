
export const ItemCount = ({ max, min = 0, counter, setCounter}) => {

    

    const handleSumar = (e) => {
        counter < max && setCounter(counter + 1)
       
    }
    const handleRestar = (e) => {
        counter > min && setCounter(counter - 1)
        
    }
    return (

        <div className="btnCtrlCant">
            <button className="btnSumar" onClick={handleSumar}> + </button>
            <span> {counter}</span>
            <button className="btnRestar" onClick={handleRestar}> - </button>
        </div>
    )
}
/**/