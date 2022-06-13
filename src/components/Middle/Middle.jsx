import './middle.css'

const Middle = () => {
    return (
        <div className="middleContainer">
            <div className="middleNumbers">
                <div className="middlenumber">$89,914</div>
                <div className="middlenumber">5,007</div>
                <div className="middlenumber">56</div>
            </div>
            <div className="middlestats">
                <div className="stats">of $100,000 backed</div>
                <div className="stats">total backers</div>
                <div className="stats">days left</div>
            </div>
            <div className="progressBarcontents">
                <div className="progressbarOutline"></div>
                <div className="progressbarcolor"></div>
            </div>
        </div>
    )
}

export default Middle