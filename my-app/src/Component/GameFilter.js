import React from "react"

function GameFilter(){
    return (
        <div className="filter">
            <form>
                <label>Ages:
                    <select>
                        <option value='All'>All</option>
                        <option value='7+'>7+</option>
                        <option value='8+'>8+</option>
                        <option value='9+'>9+</option>
                        <option value='10+'>10+</option>
                        <option value='11+'>11+</option>
                        <option value='12+'>12+</option>
                        <option value='13+'>13+</option>
                        <option value='14+'>14+</option>
                        <option value='Adult'>Adult</option>
                    </select>
                </label>
                <label>Players:
                    <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10+'>10+</option>
                    </select>
                </label>
                <label>Game Type:
                    <select>
                        <option value='All'>All</option>
                        <option value='Board Game'>Board Game</option>
                        <option value='Card Game'>Card Game</option>
                    </select>
                </label>
                <label>Play Time:
                    <select>
                    <option value='Short'>Short (Under 30 Min)</option>
                    <option value='Medium'>Medium (30-60 Min)</option>
                    <option value='Long'>Long (60+ Min)</option>
                    </select>
                </label>
                <br/>
                <input type='submit'></input>
            </form>      
        </div>
    )
}

export default GameFilter