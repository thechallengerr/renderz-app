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
      fetch('https://renderz-app.onrender.com/players')
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



      <div className='xl:px-32 lg:px-20 md:px-12 px-4 md:py-16 py-8'>

        <div className='text-white md:px-5 px-4 py-8 rounded-[6px] text-left  bg-[#10163a]'>
          <div>
            <h2 className='mt-0 mb-[20px]'>Players List</h2>
          </div>
          <div className='w-full  flex lg:flex-row flex-col'>
            <div className='lg:w-1/4 w-full'>
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
                <div className='py-3 bg-red-600 rounded-[6px] text-center cursor-pointer hover:bg-red-500'>Advanced Sorting...</div>
              </div>
              <form className='mt-3 border border-solid border-[#414561]'>
                <FilterGroupNation name='Nations' nations={nations}></FilterGroupNation>
                <FilterGroupLeague name='League' leagues={leagues}></FilterGroupLeague>
                <FilterGroupEvent name='Event' events={events}></FilterGroupEvent>
                <FilterGroupPosition name='Position' positions={positions}></FilterGroupPosition>
              </form>
              <div
                className='py-3 px-4 w-full mt-5 cursor-pointer bg-[#7367f0] rounded-[4px] text-center'
                style={{
                  boxShadow: ' 0 0 6px 1px #7367f099',
                  background: 'linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))!important'
                }}
              >Apply Filter</div>
            </div>
            <div className='lg:w-3/4 w-full lg:ms-2 relative'>

              <div className='w-full'>
                <Pagination totalPlayers={players.length} currentPage={currentPage} paginate={paginate} note />
              </div>
              {loading &&
                <div className='w-full bg-[#10163a] h-[100vh]'>
                  <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">

                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#7367f0]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>}
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


    </>
  )
}
