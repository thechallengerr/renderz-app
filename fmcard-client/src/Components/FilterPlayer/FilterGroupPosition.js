import React, { useState, createContext } from 'react'
import { DropdownList, FilterWrapper } from './FilterGroup.style'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function FilterGroupNation({ name, positions }) {
    const [show, setShow] = useState(false);
    const showFilter = () => {
        console.log(show);
        setShow(!show)
    }


    return (
        <FilterWrapper className="filter-group p-2 cursor-pointer">
            <div className="flex filter-name flex-row justify-between bg-[#10163a]" onClick={showFilter}>

                <div className="col-sm-3">
                    <span>{name} </span>

                </div>
                <div className="col-sm-9 ">
                    <KeyboardArrowUpIcon className={show ? 'down' : 'up'}></KeyboardArrowUpIcon>
                </div>
            </div>
            <DropdownList className={show ? 'show' : 'hide'}>
                <DropDown positions={positions} />
            </DropdownList>

        </FilterWrapper>
    )
}

const DropDown = ({ positions }) => {

    return (
        <>
            <form>
                {positions.map((position, index) => {
                    return (

                        <DropdownItem key={index} position={position} />

                    )
                })}
            </form>
        </>
    )
}

const DropdownItem = ({ position }) => {
    // const FilterPosition = createContext();
    const [selectedPositions, setSelectedPositions] = useState('');
    return (

        <div className="input-group flex flex-row justify-between hover:bg-[#10163a]">
            <div className="form-check col-sm-10">
                <input
                    className="nation-check"
                    type="checkbox"
                    name="position"
                    value={selectedPositions}

                ></input>
                <label className="form-check-label text-left" for="">
                    {position}
                </label>

            </div>
        </div>
    )
}

export default React.memo(FilterGroupNation)
