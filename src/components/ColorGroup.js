import Color from "./Color";

const ColorGroup = ({ color, numbers, first, last }) => {
    return (
        <div className="flex gap-2">
            <header className="capitalize text-lg">{color}</header>
            <div className="flex">
                {
                    numbers.map((number, i) => {
                        return <Color color={color} number={number} top={first} bottom={last} first={i === 0} last={i === numbers.length - 1} key={number} />
                    })
                }
            </div>
        </div>
    )
}

export default ColorGroup;