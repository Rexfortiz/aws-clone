interface buttonProps{
    id: string;
    text: string;
    setTempFilter: any
}

const FilterButton: React.FC<buttonProps> = ({id,text, setTempFilter}) => {


    return (
        <label className="group">
            <input
                type="radio"
                name='filterCheck'
                id={id}
                onChange={(event) => setTempFilter(event.target.value)}
                value={text}
                className="peer sr-only"
            />                
            <div className="cursor-pointer flex justify-between w-full text-left mt-2 px-4 py-2
            rounded-lg 
            hover:bg-gradient-to-r from-[#551818] from-1% via-[#7c2b1d] via-40% to-[#8d3b1b]
            peer-checked:bg-gradient-to-r from-[#551818] from-1% via-[#7c2b1d] via-40% to-[#8d3b1b]
            ">
                <p>{text}</p>
                <div className=""><i className="fa-solid fa-check"></i></div>
            </div>
        </label>
    )
}

export default FilterButton