import './favorites.scss'
import HeaderFavorites from '../../components/favorites/header-favorites'

const Favorites: React.FC = () => {
  return (
    <div>
      <HeaderFavorites />
      <div className='notice'>
        <p>
          Adicione itens à sua Lista de Desejos para permitir notificações por e-mail quando eles estiverem disponíveis, estiverem em promoção ou apresentarem novo conteúdo.
        </p>
      </div>
    </div>
  )
}

export default Favorites