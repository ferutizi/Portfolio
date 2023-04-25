import './Footer'
import './Footer.scss'
import IconsNav from './IconsNav'

const Footer = ({ cvOk, setCvOk }) => {
  return (
    <div className='footer__container'>
      <div className='footer__left'>
        <div className='icons__container'>
          <p className='footer__title'>Contáctame:</p>
          <IconsNav cvOk={cvOk} setCvOk={setCvOk} />
        </div>
      </div>
      <div className='footer__left'>
        <div className='music__container'>
          <p className='footer__title'>Mi música:</p>
          <a href='https://open.spotify.com/album/78YcelOX3QzKN1Nr0VZro1?si=pZJ8LbgsSDKZpkRaLebjKw' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require('../img/icons/music/spotify.png')} />
          </a>
          <a href='https://music.apple.com/us/album/%C3%A9xodo/1643574652' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require('../img/icons/music/applemusic.png')} />
          </a>
          <a href='https://music.youtube.com/playlist?list=OLAK5uy_nnI9GNhkNa_-YiC-frK5rSaVmlhjk7Ym8' target='_blank' rel='noreferrer'>
            <img className='nav--icon' src={require('../img/icons/music/ytmusic.png')} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
