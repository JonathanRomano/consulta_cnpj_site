import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactLoading from 'react-loading'
import styles from '../../styles/Home.module.css'

export default function Member({ cnpj }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <ReactLoading className={styles.loading} type='bubbles' color='black'/>;
  }
  
  const x = {'dados gerais': [{'type': 'Razão Social', 'value': 'SUPERMERCADO JACOMAR LTDA'}, {'type': 'NIRE', 'value': '41901385631'}, {'type': 'CNPJ', 'value': '78.413.325/0010-84'}, {'type': 'Natureza Jurídica', 'value': 'Sociedade Empresária Limitada'}, {'type': 'Capital Social', 'value': '16.940.000,00'}, {'type': 'Destaque Capital Social', 'value': 'não consta'}], 'socios': [{'name': 'JACOPAR PARTICIPACOES SOCIETARIAS LTDA', 'data': [{'type': 'CNPJ', 'value': '31.230.669/0001-01'}, {'type': 'NIRE', 'value': '41208867523'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '83065-190'}, {'type': 'Endereço', 'value': 'RUA TEODORO FRANCO DE OLIVEIRA , 140'}, {'type': 'Bairro', 'value': 'INA'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'CREUSA@JACOMARSM.COM.BR'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 16.939.968,00'}, {'type': 'Data de Entrada', 'value': '15/08/2018'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'RPANKRATZ ADMINISTRADORA DE BENS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.312.149/0001-89'}, {'type': 'NIRE', 'value': '41209493911'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-070'}, {'type': 'Endereço', 'value': 'RUA DOUTOR DANILO GOMES , 1214'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'PANDUCK ADMINISTRADORA DE BENS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.381.346/0001-50'}, {'type': 'NIRE', 'value': '41209502987'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81720-040'}, {'type': 'Endereço', 'value': 'RUA JORGE WENDLER , 719'}, {'type': 'Bairro', 'value': 'XAXIM'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'MBWP ADMINISTRADORA DE BENS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.381.402/0001-56'}, {'type': 'NIRE', 'value': '41209502669'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-190'}, {'type': 'Endereço', 'value': 'RUA PAULO SETUBAL , 4711'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'COBRIE EMPREENDIMENTOS LTDA', 'data': [{'type': 'CNPJ', 'value': '39.590.941/0001-68'}, {'type': 'NIRE', 'value': '41209579815'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81830-000'}, {'type': 'Endereço', 'value': 'RUA WALDEMAR LOUREIRO CAMPOS , 4219'}, {'type': 'Bairro', 'value': 'XAXIM'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'RODOLFO PANKRATZ', 'data': [{'type': 'CPF', 'value': '581.546.399-04'}, {'type': 'Identidade', 'value': '33525737'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'não consta'}, {'type': 'Data Nascimento', 'value': '25/02/1963'}, {'type': 'Sexo', 'value': 'M'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '83030-530'}, {'type': 'Endereço', 'value': 'RUA ISRAELITA , 419'}, {'type': 'Bairro', 'value': 'SILVEIRA DA MOTTA'}, {'type': 'Complemento', 'value': 'APT 901'}, {'type': 'Email', 'value': 'RODOLFO@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'BNDS ADMINISTRADORA DE BENS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.825.334/0001-77'}, {'type': 'NIRE', 'value': '41209527891'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-170'}, {'type': 'Endereço', 'value': 'RUA ISABEL BAKKER , 94'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'ALKACANI EMPREENDIMENTOS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.381.523/0001-06'}, {'type': 'NIRE', 'value': '41209502707'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-150'}, {'type': 'Endereço', 'value': 'RUA AZIS SURUGI , 163'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'ILSE BUHR PANKRATZ', 'data': [{'type': 'CPF', 'value': '500.309.739-53'}, {'type': 'Identidade', 'value': '32404650'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'não consta'}, {'type': 'Data Nascimento', 'value': '23/11/1961'}, {'type': 'Sexo', 'value': 'F'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-150'}, {'type': 'Endereço', 'value': 'RUA AZIS SURUGI , 83'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'HENRIQUE@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'HI ADMINISTRADORA DE BENS PROPRIOS E SERVICOS LTDA'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'CAHDIPI ADMINISTRADORA DE BENS LTDA', 'data': [{'type': 'CNPJ', 'value': '38.381.268/0001-93'}, {'type': 'NIRE', 'value': '41209502600'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-180'}, {'type': 'Endereço', 'value': 'RUA DENEZAR ANDRADE DE JESUS , 68'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomar.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}, {'name': 'HARRI PANKRATZ', 'data': [{'type': 'CPF', 'value': '783.397.159-68'}, {'type': 'Identidade', 'value': '36023643'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'não consta'}, {'type': 'Data Nascimento', 'value': '08/01/1966'}, {'type': 'Sexo', 'value': 'M'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-180'}, {'type': 'Endereço', 'value': 'RUA DENEZAR ANDRADE DE JESUS , 68'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'HARRI@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '14/04/1993'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '14/04/1993'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}, {'type': 'Condição', 'value': '205 - Administrador'}, {'type': 'Data de Início do Mandato', 'value': '12/11/2012'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'JACOB PANKRATZ NETO', 'data': [{'type': 'CPF', 'value': '358.916.029-20'}, {'type': 'Identidade', 'value': '16998117'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'DIVORCIADO(A)'}, {'type': 'Regime de Bens', 'value': 'não consta'}, {'type': 'Data Nascimento', 'value': '03/04/1959'}, {'type': 'Sexo', 'value': 'M'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-190'}, {'type': 'Endereço', 'value': 'RUA PAULO SETUBAL , 4711'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'JACOB@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'ROSI PANKRATZ DUCK', 'data': [{'type': 'CPF', 'value': '783.403.309-34'}, {'type': 'Identidade', 'value': '45123804'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'Comunhão Parcial'}, {'type': 'Data Nascimento', 'value': '22/12/1969'}, {'type': 'Sexo', 'value': 'F'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81720-040'}, {'type': 'Endereço', 'value': 'RUA JORGE WENDLER , 719'}, {'type': 'Bairro', 'value': 'XAXIM'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'ROSI@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'HAIDY PANKRATZ KROKER', 'data': [{'type': 'CPF', 'value': '756.921.989-91'}, {'type': 'Identidade', 'value': '45124045'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'Comunhão Parcial'}, {'type': 'Data Nascimento', 'value': '08/04/1968'}, {'type': 'Sexo', 'value': 'F'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-190'}, {'type': 'Endereço', 'value': 'RUA PAULO SETUBAL , 4713'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'HAIDY@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'ALBERT PANKRATZ', 'data': [{'type': 'CPF', 'value': '774.876.059-49'}, {'type': 'Identidade', 'value': '41665459'}, {'type': 'Orgão Emissor', 'value': 'I.I-PR'}, {'type': 'UF do Orgão Emissor', 'value': 'PR'}, {'type': 'Estado Civil', 'value': 'CASADO(A)'}, {'type': 'Regime de Bens', 'value': 'Comunhão Universal'}, {'type': 'Data Nascimento', 'value': '28/03/1967'}, {'type': 'Sexo', 'value': 'M'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-150'}, {'type': 'Endereço', 'value': 'RUA AZIS SURUGI , 163'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'CASA'}, {'type': 'Email', 'value': 'ALBERT@JACOMAR.COM.BR'}, {'type': 'Condição', 'value': '316 - REPRESENTANTE LEGAL'}, {'type': 'Representado', 'value': 'não consta'}, {'type': 'Data de Início do Mandato', 'value': '19/11/2020'}, {'type': 'Data de Término do Mandato', 'value': 'não consta'}]}, {'name': 'HI ADMINISTRADORA DE BENS PROPRIOS E SERVICOS LTDA', 'data': [{'type': 'CNPJ', 'value': '28.407.520/0001-32'}, {'type': 'NIRE', 'value': '41208575468'}, {'type': 'Domicílio', 'value': 'BRASIL'}, {'type': 'CEP', 'value': '81750-150'}, {'type': 'Endereço', 'value': 'RUA AZIS SURUGI , 83'}, {'type': 'Bairro', 'value': 'BOQUEIRAO'}, {'type': 'Complemento', 'value': 'não consta'}, {'type': 'Email', 'value': 'creusa@jacomarsm.com.br'}, {'type': 'Telefone', 'value': '41 33868232'}, {'type': 'Condição', 'value': '101 - Sócio'}, {'type': 'Participação Capital', 'value': 'R$ 4,00'}, {'type': 'Data de Entrada', 'value': '19/11/2020'}, {'type': 'Data de Saída', 'value': 'não consta'}]}]}
  
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
      <h1>Informações gerais</h1>
      {x['dados gerais'].map(info => <div>
        {
          info['type'] + ': ' + info['value']
        }<hr/>
      </div>)}
      <h1>Socios</h1>
      {x['socios'].map(socio => <SocioView socio={socio}/>)}

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
  
  return {
    props: {
      'cnpj': cnpj,
    }
  }
}