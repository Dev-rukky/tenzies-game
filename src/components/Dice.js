function Dice(props) {
    const isHeldStyle = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }

    return (
        <div className="dice-face" style={isHeldStyle}>
            <h2 className="dice-number">{props.value}</h2>
        </div>
    )
}


export default Dice