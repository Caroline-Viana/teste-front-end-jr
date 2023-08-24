import monitor from '../../assets/monitorar-tablet-e-smartohone 1.png';
import corrida from '../../assets/corrida 1.png';
import saude from '../../assets/cuidados-de-saude 1.png';
import ferramenta from '../../assets/ferramentas 1.png';
import moda from '../../assets/moda 1.png';
import supermercados from '../../assets/supermercados 1.png';
import whiskey from '../../assets/whiskey.png';
import './Home.scss'
import Carousel from '../../components/carousel/Carousel';

function Home() {
  return (
    <>
        <section className='banner'>
            <h1 className='banner_titulo'>Venha conhecer nossas promoções</h1>
            <p className='banner_texto'>50% Off nos produtos</p>
            <button className='banner_btn'>Ver produto</button>
        </section>
        <section className='categoria'>
            <div className='categoria_card'>
                <div className='categoria_card-img1'><img src={monitor} alt="Tecnologia" /></div>
                <h3 className='categoria_card-titulo1'>Tecnologia</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={supermercados} alt="Supermercado" /></div>
                <h3 className='categoria_card-titulo'>Supermercado</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={whiskey} alt="Bebidas" /></div>
                <h3 className='categoria_card-titulo'>Bebidas</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={ferramenta} alt="Ferramentas" /></div>
                <h3 className='categoria_card-titulo'>Ferramentas</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={saude} alt="Saúde" /></div>
                <h3 className='categoria_card-titulo'>Saúde</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={corrida} alt="Esportes e Fitness" /></div>
                <h3 className='categoria_card-titulo'>Esportes e Fitness</h3>
            </div>
            <div className='categoria_card'>
                <div className='categoria_card-img'><img src={moda} alt="Moda" /></div>
                <h3 className='categoria_card-titulo'>Moda</h3>
            </div>
        </section>
        <section className='produtos'>
            <div className='produto'>
                <div className='produto_traco'></div>
                <h2 className='produto_titulo'>Produtos relacionados</h2>
                <div className='produto_traco'></div>
            </div>
            
            <table className='produtos_tags'>
                <tr>
                    <td className='tag'>celular</td>
                    <td className='tag'>acessórios</td>
                    <td className='tag'>tablets</td>
                    <td className='tag'>NOTEBOOKS</td>
                    <td className='tag'>TVs</td>
                    <td className='tag'>Ver todos</td>
                </tr>
            </table>
            <Carousel/>
        </section>
        <section className='parceiros'>
            <div className='parceiros_card'>
                <h3 className='parceiros_card-titulo'>Parceiros</h3>
                <p className='parceiros_card-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='parceiros_card-btn'>Confira</button>
            </div>
            <div className='parceiros_card'>
                <h3 className='parceiros_card-titulo'>Parceiros</h3>
                <p className='parceiros_card-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className='parceiros_card-btn'>Confira</button>
            </div>
        </section>
        <section className='relacionados'>
            <div className='relacionado'>
                <div className='relacionado_traco'></div>
                <h2 className='relacionado_titulo'>Produtos relacionados</h2>
                <div className='relacionado_traco'></div>
            </div>
            <p className='ver'>Ver todos</p>
            <div className='prod'>
            <div className='prod_card'>
                <h3 className='prod_card-titulo'>Produtos</h3>
                <p className='prod_card-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
                </p>
                <button className='prod_card-btn'>Confira</button>
            </div>
            <div className='prod_card'>
                <h3 className='prod_card-titulo'>Produtos</h3>
                <p className='prod_card-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
                </p>
                <button className='prod_card-btn'>Confira</button>
            </div>
            </div>
        </section>
        <section className='marcas'>
            <h3 className='marcas_titulo'>Navegue por marcas</h3>
            <div className='marca'>
                <div className='marca_opcao'></div>
                <div className='marca_opcao'></div>
                <div className='marca_opcao'></div>
                <div className='marca_opcao'></div>
                <div className='marca_opcao'></div>
            </div>
        </section>
    </>
  )
}

export default Home