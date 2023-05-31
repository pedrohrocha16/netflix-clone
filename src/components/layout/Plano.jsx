import styles from './Plano.module.css'
import popCorn from '../../img/popcorn.png'
import {Link} from 'react-router-dom'

function Plano() {
  return (
   <div className={styles.plano}>
         <img src={popCorn} alt="popcorn" className={styles.popcorn}/>
         <div className={styles.desc}>
            <h3>A Netflix que você adora por apenas R$18,90.</h3>
            <p className={styles.desc_p}>Assine o plano Padrão com anúncios.</p>
            <Link patch="/">Saiba Mais &#62;</Link>
         </div>
   </div>
  )
}

export default Plano