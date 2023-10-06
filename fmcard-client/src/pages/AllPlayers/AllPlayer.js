import React, { useEffect, useState } from 'react'
import PlayerRow from '../../Components/Players/PlayerRow';
import Switch from '../../Components/Switch/Switch';
import theme from '../../Components/theme/theme';
import FilterGroupNation from '../../Components/FilterPlayer/FilterGroupNation';
import FilterGroupLeague from '../../Components/FilterPlayer/FilterGroupLeague';
import FilterGroupEvent from '../../Components/FilterPlayer/FilterGroupEvent';
import FilterGroupPosition from '../../Components/FilterPlayer/FilterGroupPosition';
import Pagination from '../../Components/Pagination/Pagination';
import Loader from '../../Components/Loader/Loader';
export default function AllPlayer() {

  const [players, setPlayers] = useState([]);
  const [nations, setNations] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [events, setEvents] = useState([]);
  const [positions, setPositions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [currentPlayers, setCurrentPlayers] = useState([]);
  const [playersPerPage] = useState(18);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8888/players')
        .then(res => res.json())
        .then((data) => {
          setPlayers(data.players);
          setNations(data.nations);
          setLeagues(data.leagues);
          setEvents(data.events);
          setPositions(['LW', 'LF', 'ST', 'CF', 'RW', 'RF', 'LM', 'CAM', 'CM', 'CDM', 'RM', 'LWB', 'LB', 'CB', 'RB', 'RWB', 'GK']);
          setLoading(false)
        })
        .catch(err => {
          throw new Error(err)
        })
    }
    fetchData()

  }, []);
  console.log('re-render...');
  const paginate = (page) => {
    console.log(currentPage);
    // setCurrentPlayers([...players.splice(page * 18 - 18, page * 18)])
    setCurrentPage(page)
  }
  // console.log(lastIndex,firstIndex,currentPlayers);
  const currentPlayers = players.slice(currentPage * playersPerPage - playersPerPage, currentPage * playersPerPage)
  return (
    <>
      {
        loading ? <Loader />
          :
          (
            <div className='px-32 py-16'>

              <div className='text-white p-5 rounded-[6px] text-left  bg-[#10163a]'>
                <div>
                  <h2 className='mt-0 mb-[20px]'>Players List</h2>
                </div>
                <div className='w-full  flex flex-row'>
                  <div className='w-1/4'>
                    <div style={{ borderBottom: `1px solid ${theme.primary.border}` }}><h3 className='my-2'>Filter</h3></div>
                    <div className='flex flex-row pt-2 w-full justify-between'>
                      <label>Big Card</label>
                      <Switch />
                    </div>
                    <div className='flex flex-row pt-2 w-full justify-between'>
                      <label>Goalkeeper Stats</label>
                      <Switch />
                    </div>
                    <div className='w-full pt-3'>
                      <div className='p-2 bg-red-500 rounded-[6px] text-center'>Advanced Sorting...</div>
                    </div>
                    <div className='mt-3 border border-solid border-[#414561]'>
                      <FilterGroupNation name='Nations' nations={nations}></FilterGroupNation>
                      <FilterGroupLeague name='League' leagues={leagues}></FilterGroupLeague>
                      <FilterGroupEvent name='Event' events={events}></FilterGroupEvent>
                      <FilterGroupPosition name='Position' positions={positions}></FilterGroupPosition>
                    </div>
                  </div>
                  <div className='w-3/4 ms-2'>
                    <Pagination totalPlayers={players.length} currentPage={currentPage} paginate={paginate} note />
                    {currentPlayers.map((player, index) => {
                      // console.log(player);
                      return (
                        <PlayerRow style={{ border: 'none' }} key={index} player={player} />
                      )
                    })}
                    <Pagination totalPlayers={players.length} currentPage={currentPage} paginate={paginate} />
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}
