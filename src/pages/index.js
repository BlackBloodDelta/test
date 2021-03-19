import styles from '../styles/Home.module.css'
import {Grid, Typography} from "@material-ui/core";
import ContactUs from "../components/Contacts";


export default function Home() {


	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Grid container>
					<Grid item xs={12} md={6}>
						<Typography component="h1" variant="h1" className={styles.title}>Conheça os segredos da
							<br/>mente <em>campeã</em>!
						</Typography>
						<img src="/books.png" className={styles.image}/>
					</Grid>
					<Grid item xs={12} md={6}>
						<div>
							<Grid item xs={12}>
								<Typography component="h1" variant="h1" className={styles.cad_title}>Parabéns!
									Você acabou de ganhar um e-book!</Typography>
								<Typography component="h1" variant="h5" className={styles.cad_subtitle}>Cadastre
									seus dados nos campos abaixo:</Typography>

								<ContactUs />
							</Grid>
						</div>
					</Grid>
				</Grid>
				<footer className={styles.footer}>
					<a
						href="https://teamspark.com.br"
						target="_blank"
						rel="noopener noreferrer">
						Powered by{' '}
						<img src="/spark letreiro.png" alt="Vercel Logo" className={styles.logo}/>
					</a>
				</footer>
			</div>
		</div>
	)
}
