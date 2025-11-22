
// import './style.css'
const SecondComponent = () => {
    return (
        <div>anh duong dep tra</div>
    )
}

const ThirdComponent = () => {
    const name = {
        color: 'green'
    }
    return (
        <>
            <div className="child"
                style={
                    { color: name.color }
                }
            >
                nguyen van duong dep trai s</div>
        </>
    )
}
export { SecondComponent, ThirdComponent }