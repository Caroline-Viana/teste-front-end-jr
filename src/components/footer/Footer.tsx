import React from 'react'
import pagamento from '../../assets/formas_pagamento.png';
import logos from '../../assets/logosbrancos.svg';
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_principal'>
            <div className='footer_principal-secao'>
                <div className='secao'>
                    <h5 className='secao-titulo'>Sobre nós</h5>
                    <ul className='secao-lista'>
                        <li><a href='#'>CONHEÇA</a></li>
                        <li><a href='#'>COMO COMPRAR</a></li>
                        <li><a href='#'>INDICAÇÃO E DESCONTO</a></li>
                    </ul>
                </div>
                <div className='secao-icons'>
                    <a href="#"><BiLogoFacebook size={20} color="#fff"/></a>
                    <a href="#"><BiLogoInstagram size={20} color="#fff"/></a>
                    <a href="#"><BiLogoYoutube size={20} color="#fff"/></a>
                </div>
            </div>
            <div className='footer_principal-secao'>
                <div className='secao'>
                    <h5 className='secao-titulo'>INFORMAÇÕES ÚTEIS</h5>
                    <ul className='secao-lista'>
                        <li><a href='#'>FALE CONOSCO</a></li>
                        <li><a href='#'>DÚVIDAS</a></li>
                        <li><a href='#'>PRAZOS DE ENTREGA </a></li>
                        <li><a href='#'>FORMAS DE PAGAMENTO</a></li>
                        <li><a href='#'>POLÍTICA DE PRIVACIDADE</a></li>
                        <li><a href='#'>TROCAS E DEVOLUÇÕES</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer_principal-secao'>
                <div className='secao'>
                    <h5 className='secao-titulo'>FORMAS DE PAGAMENTO</h5>
                    <img src={pagamento} alt="Formas de pagamento" />
                </div>
            </div>
            <div className='footer_principal-novidade'>
                <h4 className='novidade_titulo'>Cadastre-se e Receba nossas <span className='novidade_titulo-destaque'>novidades e promoções</span></h4>
                <p className='novidade_texto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.</p>
                <div className='novidade_input'>
                    <input type="email" placeholder='SEU E-MAIL' className='novidade_input-email'/>
                    <button className='novidade_input-btn'>OK</button>
                </div>
            </div>
        </div>
        <div className='footer_copy'>
            <div className='footer_copy-secao'>
                <p className='footer_copy-secao_copy'>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                <img src={logos} alt="Logos" />
            </div>
        </div>
    </div>
  )
}

export default Footer