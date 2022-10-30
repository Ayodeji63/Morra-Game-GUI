import { useState } from "react"

export const SetWager = ({deploy}) => {
    const [wager, setWager] = useState(0)

    return (
        <div className="set_wager">
            <input type={'number'} 
            value = {wager}
            onChange={(e) => setWager(e.target.value)}
            min={0}
                />
        <button className="button" onClick={() => deploy(wager)}>
            Set Wager
        </button>
        </div>
    )
}