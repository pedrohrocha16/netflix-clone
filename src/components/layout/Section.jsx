import styles from './Section.module.css'
import tv from '../../img/tv.png'
import movie from '../../img/movie.mp4'


function Section({title, text, img, alt}) {
  return (
    <section className={styles.section}>
         <div className={styles.section_desc}>
            <h1 className={styles.section_desc_title}>Aproveite na TV</h1>
            <p className={styles.section_desc_text}>Assista em Smart Tvs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositos</p>
         </div>
          <div>
             <video className={styles.movie} autoPlay playsInline muted loop>
                <source src={movie} type="video/mp4"/>
              </video>
                <img className={styles.section_desc_img} src={tv} alt="alt" />
          </div>
         <div className={styles.div}>
         </div>
    </section>
  )
}

export default Section