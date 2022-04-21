import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

	const teste = (e) => {

		e.preventDefault()

		const input_cnpj = document.getElementById('input_cnpj')
		const cnpj = input_cnpj.value

		window.open(`/cnpj/${cnpj}`,'_self')

	}

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<form method='POST' onSubmit={teste}>
					<div className={styles.inner}>
						
							<p>
								Digite o CNPJ que deseja consultar
							</p><br/>

							<input type='text' id='input_cnpj' required/>

							<button type='submit'>Consultar</button>
						
					</div>
				</form>
			</div>
		</div>
	)
}
