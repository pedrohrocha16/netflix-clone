import Plano from '../layout/Plano'
import Section from '../layout/Section'
import styles from './Home.module.css'

function Home() {
  return (
   <main className={styles.main}>
      <h1 className={styles.main_title}>Filmes, séries e muito mais, sem limites</h1>
      <h2>Assista onde quiser. Cancele quando quiser.</h2>
         <div>
            <p className={styles.main_desc}>Quer assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.</p>
            <input type='text' placeholder='Email' />
            <button>Vamos lá &#707;</button>
         </div>
         <section>
            <Plano />
            <Section />
         </section>
   </main>
  )
}

export default Home