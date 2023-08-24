import logo from '../../assets/logo.svg';
import { PiTruckBold, PiShieldCheckBold, PiCreditCardBold, PiMagnifyingGlassBold, PiHeartBold, PiUserCircle, PiShoppingCart, PiCrownSimple, PiPackageBold } from 'react-icons/pi';
import './Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_destaque'>
            <ul className='navbar_destaque-opcoes'>
                <li className='opcoes'>
                    <PiShieldCheckBold size={20} color="#9F9F9F"/>
                    <p>Compra <span>100% segura</span></p>
                </li>
                <li className='opcoes'>
                    <PiTruckBold size={20} color="#9F9F9F"/>
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>
                <li className='opcoes'>
                    <PiCreditCardBold size={20} color="#9F9F9F"/>
                    <p><span>Parcele</span> suas compras</p>
                </li>
            </ul>
        </div>
        <div className='navbar_principal'>
            <img src={logo} alt="Logo VTEX"/>
            <div className='navbar_principal-input'>
                <input type='search' className='buscar' placeholder='O que você está buscando?'/>
                <PiMagnifyingGlassBold size={28} color="#9F9F9F"/>
            </div>
            <div className='navbar_principal-icons'>
                <PiPackageBold size={24} color="#9F9F9F"/>
                <PiHeartBold size={24} color="#9F9F9F"/>
                <PiUserCircle size={24} color="#9F9F9F"/>
                <PiShoppingCart size={24} color="#9F9F9F"/>
            </div>
        </div>
        <div className='navbar_categorias'>
            <h4>Todas Categorias</h4>
            <h4>Supermercado</h4>
            <h4>Livros</h4>
            <h4>Moda</h4>
            <h4>Lançamentos</h4>
            <h4>Ofertas do dia</h4>
            <h4 className='assinatura'><PiCrownSimple size={20} color="#9F9F9F"/>Assinatura</h4>
        </div>
    </div>
  )
}

export default Navbar