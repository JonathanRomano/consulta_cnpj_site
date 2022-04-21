import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactLoading from 'react-loading'
import styles from '../../styles/Home.module.css'

export default async function infoPage({ infoObject }) {
  const { isFallback } = useRouter();
  
  if (isFallback) {
    return<div className={styles.fallbackDiv}>
        <ReactLoading className={styles.loading} type='spinningBubbles' color='black'/>
    </div> 
  }
  
  const SocioView = ({socio}) => {

    const [buttonState, setButtonState] = useState(1)

    const view = () => {
      if (buttonState===1){
        setButtonState(2)
      } else {
        setButtonState(1)
      }
    }

    if (buttonState===1){
      return <div><div className={styles.socioNameBox}>
          <h3>{
            socio['name']
          }</h3>
        <button onClick={view}>
          show
        </button>
      </div><hr/>
      </div>
    }

    return(
    <div>
      <div className={styles.socioNameBox}>
          <h3>{
            socio['name']
          }</h3>
        <button onClick={view}>
          hide
        </button>
      </div>
      <div className={styles.dataBox}>
        
          {
            socio['data'].map(data => <div className={styles.data}>
              {`${data['type']}: ${data['value']}`}
            </div>)
          }

      </div><hr/>
    </div>)
  }

  return (
    <div className={styles.containerCnpjPage}>
      <h3 className={styles.alert}> Dados apenas para consulta, não possuem valor legal!</h3>
      <h1>Informações gerais</h1>
      {infoObject['dados gerais'].map(info => <div>
        {
          info['type'] + ': ' + info['value']
        }<hr/>
      </div>)}
      <h1>Socios</h1>
      {infoObject['socios'].map(socio => <SocioView socio={socio}/>)}

    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  
  return {
    paths: [
      {
        params: {
          cnpj: ''
        }
      }
    ],
    fallback: true, 
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { cnpj } = context.params;
  
  const teste = await fetch(process.env.END_POINT, {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({'cnpj':`${cnpj}`})
  }).then(res => {
    const response = res
    return response.json()
  });

  console.log(teste)


  return {
    props: {
      infoObject: teste,
    }
  }
}