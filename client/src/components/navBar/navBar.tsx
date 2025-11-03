import '../../assets/styleSheet/style.css'
import fbLogo from '../../assets/image/logoes/icons8-facebook-50.svg'
import instLogo from '../../assets/image/logoes/ig-instagram-icon.svg'
import taLogo from '../../assets/image/logoes/tripadvisor-icon.svg'
interface Props {}

interface Props {}

function NavBar(props: Props) {
    const {} = props

    return (
        <div className="navBar">
            <p className="logo">logo</p>
            <p className="emailSection"> serendibeligance@gmail.com</p>
            <p className="phone">+94 77 227 5553</p>
            <img className='logoSize' src={fbLogo} alt="facebookLogo" />
            <img className='logoSize' src={instLogo} alt="instLogo" />
            <img className='logoSize' src={taLogo} alt="taLogo" />
        </div>
    )
}

export default NavBar
