import React, { useState } from 'react'
import { DropdownList, FilterWrapper } from './FilterGroup.style'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function FilterGroupLeague({ name, leagues }) {
    const [show, setShow] = useState(false);
    const showFilter = () => {
        console.log(show);
        setShow(!show)
    }
    return (

        <FilterWrapper className="filter-group p-2 ">
            <div className="flex filter-name flex-row justify-between bg-[#10163a] cursor-pointer" onClick={showFilter}>

                <div className="col-sm-3">
                    <span>{name} </span>

                </div>
                <div className="col-sm-9 ">
                    <KeyboardArrowUpIcon className={show ? 'down' : 'up'}></KeyboardArrowUpIcon>
                </div>
            </div>
            <DropdownList className={show ? 'show' : 'hide'}>
                <DropDown leagues={leagues} />
            </DropdownList>

        </FilterWrapper>


    )
}

const DropDown = ({ leagues }) => {
    return (
        <>
            {leagues.map((league, index) => {
                return (

                    <DropdownItem key={index} league={league} id={league.league_name.toLowerCase().replace(" ", "")} />

                )
            })}
        </>
    )
}

const DropdownItem = ({ league,id }) => {
    return (

        <div className="input-group flex flex-row justify-between hover:bg-[#10163a] cursor-pointer p-1">
            <div className="form-check col-sm-10">
                <input className="league-check" type="checkbox" name="league" value="" id={id}></input>
                <label className="text-[14px] form-check-label text-left" for={id}>
                    {league.league_name}
                </label>

            </div>
            <div className="col-sm-2">
                <img src={league.league_img} alt={league.league_name} height="16" className="flag-img"></img>
            </div>
        </div>
    )
}

export default React.memo(FilterGroupLeague)
