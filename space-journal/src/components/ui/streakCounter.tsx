import { Hobby } from "@/app/types/Hobby"
import React, { useState } from "react"


type StreakCounterProps = {
    hobby: Hobby,
    index: number,
    updateStreakCount: (index: number, toAdd: boolean) => void;
}

const StreakCounter: React.FC<StreakCounterProps> = ({hobby, index, updateStreakCount}) => {
    const [toAdd, setToAdd] = React.useState(false);

    const handleClick = () => {
        const newToAdd = !toAdd
        setToAdd(newToAdd)
        console.log(toAdd)
        updateStreakCount(index, newToAdd);
    }
    return(
        <div className='text-xl ml-4 mt-3 pl-4 pr-4 pt-2 pb-2 bg-secondary rounded-sm flex-shrink' onClick={handleClick}>
            🔥 x{hobby.count}
        </div>
    )
}

export default StreakCounter;