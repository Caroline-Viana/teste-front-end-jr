import React from 'react'
import { Celular } from '../../../types/Produto';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import {FaAngleRight, FaPlus, FaMinus } from 'react-icons/fa';
import './Item.scss'

Modal.setAppElement('#root');

function Item(props: Celular) {
    const {photo, price, productName, descriptionShort} = props;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function abrirModal() {
        setIsOpen(true);
      }
    
      function fecharModal() {
        setIsOpen(false);
      }

  return (
    <>
        <div className='card' onClick={abrirModal}>
            <img src={photo} alt="celular" className='card_img'/>
            <h3 className='card_titulo'>{productName}</h3>
            <p className='card_preço-anterior'>R$ {price*2}</p>
            <p className='card_preço-atual'>R$ {price}</p>
            <p className='card_preço-parcelado'>ou 2x de R$ {price/2} sem juros</p>
            <p className='card_frete'>Frete grátis</p>
            <button className='card_btn'>COMPRAR</button>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
        className="modal"
        overlayClassName="fundo"
        >
            <button onClick={fecharModal} className='fechar'><GrClose/></button>
            <div className='container'>
                <div>
                    <img src={photo} alt="Foto do celular" />
                </div>
                <div>
                    <h3 className='modal_titulo'>{productName}</h3>
                    <p className='modal_preco'>R$ {price}</p>
                    <p className='modal_descricao'>{descriptionShort}</p>
                    <p className='modal_ver'>Veja mais detalhes do produto <FaAngleRight/> </p>
                    <div className='modal_qtd'>
                        <FaMinus/>
                        <span>1</span>
                        <FaPlus/>
                    </div>
                    <button className='modal_btn'>Comprar</button>
                </div>
            </div>
            
            
        </Modal>
    </>
  )
}

export default Item