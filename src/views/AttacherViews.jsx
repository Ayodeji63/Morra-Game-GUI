
export const AcceptWager = ({wager, accept, decline, standardUnit}) => {
    return (
        <div className="acceptOrDecline">
            <h1>Wager: {wager} </h1>
            <button className="button" onClick={() => accept()}>Accept Wager</button>
            <hr />
            <button className="button" onClick={() => decline()}>Decline Wager</button>
        </div>
    )
}