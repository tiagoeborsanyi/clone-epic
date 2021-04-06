import './mini-card.scss'

interface IMiniCardProps {
  title: string
  percent: string
  oldValue: string
  newValue: string
  urlImg: string
}

const MiniCard: React.FC<IMiniCardProps> = ({ title, percent, oldValue, newValue, urlImg }) => (
  <div className='mini-card'>
    <div className='mini-card__img' style={{backgroundImage: `url(${urlImg})`}} />
    <div className='mini-card__text'>
      <h3>{title}</h3>
      {percent && <span className='mini-card__percent'>-{percent}%</span>}
      {oldValue && <span className='mini-card__old-value'>R$ {oldValue}</span>}
      <span className='mini-card__value'>R$ {newValue ? newValue : 'Gratuito'}</span>
    </div>
  </div>
)

export default MiniCard