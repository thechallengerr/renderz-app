import React, { useState, useEffect, useRef, useCallback } from 'react'
import PlayerCard from '../../Components/Players/PlayerCard';
import { InputGroup } from '../Login/Login.style';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchClub, searchNation, searchPlayerImg,
  players, nations, clubs,

} from '../../feature/card-generator/searchSlice';
import { saveCard, getCard } from '../../feature/card-generator/cardSlice';
import { toPng } from 'html-to-image';

function CardGenerator() {
  const [card, setCard] = useState({
    background: "https://cdn-p2.frzdb.net/fifamobile/images/backgrounds_22/backgrounds_21_TOTY22_ULTIMATE_ATK_4.png?v=848rffjv3we",
    career: {
      club: "Manchester United",
      club_img: "https://cdn-p2.frzdb.net/fifamobile/images/clubLogos_22/11.png?v=848rffjv3we",
      league: "England Premier League",
      league_img: "https://cdn-p2.frzdb.net/fifamobile/images/leagueLogos_22/13.png?v=848rffjv3we",
      nation: "Portugal",
    },
    createdAt: "2022-11-02T02:18:27.669Z",
    event: "https://cdn-p2.frzdb.net/fifamobile/images/clubLogos_22/11.png?v=848rffjv3we",
    event_slug: "toty22_22",
    flag: "https://cdn-p2.frzdb.net/fifamobile/images/nationFlags_22/38.png?v=848rffjv3we",
    full_name: "C. Ronaldo",
    name: "C. RONALDO",
    player_img: "https://eaassets-a.akamaihd.net/fifa/u/f/fm22/prod/s/static/players/players_22/p20801_TOTY2.png?v=848rffjv3we",
    position: "ST",
    rating: 120
  }
  );
  const [backgroundList, setBackgroundList] = useState([]);
  const [show, setShow] = useState({
    playerSearch: false,
    nationSearch: false,
    clubSearch: false,
    backgroundSearch: false,

  });
  var start = "https://cdn-p2.frzdb.net/fifamobile/images/backgrounds_22/backgrounds_21_".length


  useEffect(() => {
    const getBackgroundList = () => {
      fetch('http://localhost:8888/card-generator/get-backgrounds', {
        'method': 'GET',
        'mode': 'cors',
        'headers': {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(data => {
          setBackgroundList([...data])
        })
        .catch(err => { throw new Error(err) })
    }
    getBackgroundList()

  }, []);
  const playerImgs = useSelector(players)
  const clubList = useSelector(clubs)
  const nationList = useSelector(nations)

  const dispatch = useDispatch();
  const cardRef = useRef(null)
  const handleDownloadCard = useCallback(() => {
    if (cardRef.current === null) {
      return
    }

    toPng(cardRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [cardRef])


  return (
    <>
      <div className='px-32 py-16'>
        <div className='text-white p-5 rounded-[6px] text-left  bg-[#10163a]'>
          <h2 className='pb-2' style={{ borderBottom: '2px solid #414561' }}>Card Generator</h2>
          <div className='flex flex-row w-full'>
            <div className='player-card w-1/2 flex justify-center items-start'>
              <div>
                <div ref={cardRef}>
                  <PlayerCard data={card} size={'lg'} border='true' />
                </div>
                <div className='button-group'>
                  <div
                    className='flex flex-row bg-[#7367f0] cursor-pointer hover:bg-[#4c0ef6] justify-center p-3 rounded-md mt-3'
                    onClick={handleDownloadCard}
                  >
                    <span>Download Card</span>
                  </div>
                  <div
                    className='flex flex-row bg-green-600 cursor-pointer hover:bg-green-500 justify-center p-3 rounded-md mt-3'
                    onClick={() => { dispatch(saveCard(card)) }}>
                    <span>Save Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=' card-form w-1/2'>
              <form>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='text' id='username' name='username' placeholder='username'
                      value={card.name}
                      onChange={(e) => setCard({ ...card, name: e.target.value })}
                    >

                    </input>
                  </div>
                  <label htmlFor='username'>Player Name</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='text' id='username' name='username' placeholder='username'
                      value={card.position}
                      onChange={(e) => setCard({ ...card, position: e.target.value })}
                    >

                    </input>
                  </div>
                  <label htmlFor='username'>Position</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='number' id='username' name='username' placeholder='username'
                      value={card.rating}
                      onChange={(e) => setCard({ ...card, rating: e.target.value })}
                    >

                    </input>
                  </div>
                  <label htmlFor='username'>Rating</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='text' id='playerImg' name='playerImg' placeholder='player'
                      onFocus={() => setShow({ playerSearch: true })}
                      onChange={(e) => dispatch(searchPlayerImg(e.target.value))}
                    >

                    </input>
                    <div className='search-result border border-solid border-[#414561]' style={{ display: show.playerSearch ? 'block' : 'none' }}>
                      <ul className='h-[120px] overflow-y-scroll'>
                        {playerImgs.map((player, index) => {
                          return (
                            <li
                              className='list-none flex items-center justify-start'
                              key={index} onClick={() => {
                                setCard({ ...card, player_img: player.player_img });
                                setShow({
                                  playerSearch: false
                                })
                              }}>
                              <PlayerCard data={player} playerImageOnly={true} />
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <label htmlFor='username'>Player Image</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='text' id='nation' name='nation' placeholder='nation'
                      onChange={(e) => dispatch(searchNation(e.target.value))}
                      onFocus={() => setShow({ nationSearch: true })}

                    >

                    </input>
                    <div
                      className='search-result border border-solid border-[#414561]'
                      style={{ display: show.nationSearch ? 'block' : 'none' }}
                    >
                      <ul className='h-[80px] overflow-y-scroll'>
                        {nationList.map((nation, index) => {
                          return (
                            <li
                              className='mt-2 list-none flex items-center justify-between w-full px-4 hover:cursor-pointer'
                              key={index} onClick={() => {
                                setCard({ ...card, flag: nation.flag });
                                setShow({
                                  playerSearch: false
                                })
                              }}>
                              <div className="form-check col-sm-10">

                                <label className="form-check-label text-left" for="">
                                  {nation.nation}
                                </label>

                              </div>
                              <div className="col-sm-2">
                                <img src={nation.flag} alt={nation.nation} height="12" className="flag-img"></img>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <label htmlFor='nation'>Nation</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <input
                      type='text' id='club' name='club' placeholder='club'
                      onChange={(e) => dispatch(searchClub(e.target.value))}
                      onFocus={() => setShow({ clubSearch: true })}
                    >

                    </input>
                    <div
                      className='search-result border border-solid border-[#414561]'
                      style={{ display: show.clubSearch ? 'block' : 'none' }}
                    >
                      <ul className='h-[80px] overflow-y-scroll'>
                        {clubList.map((club, index) => {
                          return (
                            <li
                              className='list-none flex items-center justify-between w-full px-4 mt-2 hover:cursor-pointer'
                              key={index} onClick={() => {
                                setCard({ ...card, event: club.club_img });
                                setShow({
                                  playerSearch: false
                                })
                              }}>

                              <label className="form-check-label text-left" for="">
                                {club.club_name}
                              </label>
                              <div className="col-sm-2">
                                <img src={club.club_img} alt={club.club_name} height="20" className="flag-img"></img>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <label htmlFor='club'>Club</label>
                </InputGroup>
                <InputGroup>
                  <div className='input-wrapper'>
                    <select
                      name='background' id="background"
                      className='w-full outline-none border border-solid border-[#414561] p-3 ps-9 rounded-[4px] bg-[#262c49] text-[#c2c6dc]'
                      onChange={(e) => setCard({ ...card, background: e.target.value })}
                      value={card.background}
                    >
                      {backgroundList.map((bg, index) => {
                        var end = bg.indexOf('.png')
                        return (
                          <option value={bg} key={index}>{bg.slice(start, end)}</option>
                        )
                      })}
                    </select>
                  </div>
                  <label htmlFor="background">Background</label>
                </InputGroup>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardGenerator