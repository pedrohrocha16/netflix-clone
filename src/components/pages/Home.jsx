import styles from './Home.module.css'

function Home() {
  return (
   <main className={styles.main}>
      <h1>Filmes, séries e muito mais, sem limites</h1>
      <h4>Assista onde quiser. Cancele quando quiser.</h4>
         <div>
            <p>Quer assistir? Informe seu e-mail para criar ou reiniciar sua assinatura.</p>
            <input type='text' placeholder='Email' />
            <button>Vamos lá &#707;</button>
         </div>
   </main>
  )
}

export default Home