import { GetStaticProps, GetStaticPaths } from 'next';
import { useState } from 'react';
import ReactLoading from 'react-loading'
import styles from '../../styles/Home.module.css'

export default function infoPage({ infoObject }) {
  if (!infoObject) {
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
            socio['data'].map(data => <div className={styles.data} key={`${data['type']}`}>
              {`${data['type']}: ${data['value']}`}
            </div>)
          }

      </div><hr/>
    </div>)
  }

  return (
    <div className={styles.containerCnpjPage}>
      <p className={styles.alert}>ATENÇÃO: dados apenas para consulta, não possuem valor legal!</p>
      <h1>Informações gerais</h1>
      {infoObject['dados gerais'].map(info => <div key={`${info['type']}`}>
        {
          info['type'] + ': ' + info['value']
        }<hr/>
      </div>)}
      <h1>Socios</h1>
      {infoObject['socios'].map(socio => <SocioView socio={socio} key={`${socio['name']}`}/>)}

    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  
  return {
    paths: [
      {
        params: {
          cnpj: '78413325001750'
        }
      }
    ],
    fallback: true, 
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { cnpj } = context.params;
  
  const response = await fetch("https://d9d7-45-238-253-194.sa.ngrok.io/empresaFacil", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({'cnpj':`${cnpj}`})
  }).then(res => {
    return res.json() 
  });

  return {
    props: {
      infoObject: response,
    }
  }
}