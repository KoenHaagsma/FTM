import oog from './assets/logo.png'
import logo from './assets/wordmark.png'
import search from './assets/icon-search.svg'

const Walking = () => {

  return (
    <header>
        <img src={oog}></img>
        <div className="containerWordMark"><img className='wordmark' src={logo}></img></div>
        <div className="containerSearch"><img className='wordmark' src={search}></img></div>
        <div className="containerMenu"><h1>MENU</h1></div>

    </header>
  );
};

export default Walking;
