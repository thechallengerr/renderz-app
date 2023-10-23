import React, { useState } from 'react'
import { DropdownList, FilterWrapper } from './FilterGroup.style'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function FilterGroupNation({ name, nations }) {
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
            <DropdownList style={{ display: show ? 'block' : 'none' }} className={show ? 'show' :'hide'}>
                <DropDown nations={nations} />
            </DropdownList>

        </FilterWrapper>


    )
}

export const DropDown = ({ nations }) => {
    return (
        <>
            {nations.map((nation, index) => {
                return (

                    <DropdownItem key={index} nation={nation} id={nation.nation.toLowerCase().replace(" ","")} />

                )
            })}
        </>
    )
}

export const DropdownItem = ({ nation,id }) => {
    return (

        <div className="input-group flex flex-row justify-between hover:bg-[#10163a] p-1">
            <div className="form-check col-sm-10">
                <input className="nation-check" type="checkbox" name="nation" value="" id={id}></input>
                <label className="form-check-label text-left" for={id}>
                    {nation.nation}
                </label>

            </div>
            <div className="col-sm-2">
                <img src={nation.flag} alt={nation.nation} height="12" className="flag-img"></img>
            </div>
        </div>
    )
}

export default React.memo(FilterGroupNation)
