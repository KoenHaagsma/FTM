import oog from '../assets/logo.png'
import logo from '../assets/wordmark.png'
import search from '../assets/icon-search.svg'

const Walking = () => {

  return (
    <header>
        <img alt='FTMLOGO'src={oog}></img>
        <div  className="containerWordMark"><img alt='FTMNAME' className='wordmark' src={logo}></img></div>
        <div className="containerSearch"><img alt='FTMSEARCH'  className='wordmark' src={search}></img></div>
        <div className="containerMenu"><h1>MENU</h1></div>

    </header>
  );
};

export default Walking;
