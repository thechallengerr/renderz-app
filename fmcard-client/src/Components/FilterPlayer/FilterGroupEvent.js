import React, { useState } from 'react'
import { DropdownList, FilterWrapper } from './FilterGroup.style'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function FilterGroupEvent({ name, events }) {
    const [show, setShow] = useState(false);
    const showFilter = () => {
        console.log(show);
        setShow(!show)
    }
    return (

        <FilterWrapper className="filter-group p-2">
            <div className="flex filter-name flex-row justify-between bg-[#10163a] cursor-pointer" onClick={showFilter}>

                <div className="col-sm-3">
                    <span>{name} </span>

                </div>
                <div className="col-sm-9 "  >
                    <KeyboardArrowUpIcon className={show ? 'down' : 'up'}></KeyboardArrowUpIcon>
                </div>
            </div>
            <DropdownList className={show ? 'show' : 'hide'}>
                <DropDown events={events} />
            </DropdownList>

        </FilterWrapper>


    )
}

const DropDown = ({ events }) => {
    return (
        <>
            {events.map((event, index) => {
                return (
                    <DropdownItem key={index} event={event} id={event.event_slug.toLowerCase().replace(" ", "")} />
                )
            })}
        </>
    )
}

const DropdownItem = ({ event, id }) => {
    return (

        <div className="input-group flex flex-row justify-between hover:bg-[#10163a] p-1">
            <div className="form-check col-sm-10 flex items-center">
                <input className="event-check rounded-sm" type="checkbox" name="event" value="" id={id}></input>
                <label className="form-check-label text-left text-[14px]" for={id}>
                    {event.event_name}
                </label>

            </div>
            <div className="col-sm-2">
                <img src={event.event_thumb} alt={event.event_name} height="16" className="flag-img"></img>
            </div>
        </div>
    )
}

export default React.memo(FilterGroupEvent)
