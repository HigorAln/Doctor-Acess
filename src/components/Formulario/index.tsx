import styles from './styles.module.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const formDataSchema = yup.object().shape({
  name: yup.string().required("Name is required").max(30).min(7).trim(),
  birthDate: yup.date().required("Date is required"),
  cpf: yup.number().required('Your cpf is required'),
  phone: yup.number().required('Your phone is required'),
  email: yup.string().email().required('Your email is required'),
  cep: yup.number().required('Your cep is required'),
  password: yup.number().required('Your password is required'),
  promoCod: yup.number(),
  cardName: yup.string().required('Your Name is necessary'),
  cardNumber: yup.number().required('Card number is necessary'),
  CardDate: yup.number().required('Card date is necessary'),
  cardCodCVV: yup.number().required('Codigo CVV is required').max(4)
})

export function Formulario(){
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formDataSchema)
  })
  const {errors} = formState

  async function handleDataSubmit(data){
    console.log(data)
  }

  console.log(errors)
  return(
    <form className={styles.form} onSubmit={handleSubmit(handleDataSubmit)}>
      <h2>Dados pessoais</h2>
      {errors.name && <p className={`${styles.errors} ${styles.errorsFirst}`}>{errors.name.message}</p>}
      <input 
        className={`${styles.firstInput}`} 
        type="text" 
        placeholder="Nome completo" 
        {...register('name')}
      />
      {errors.birthDate && <p className={styles.errors}>{errors.birthDate.message}</p>}
       <input 
        type="date" 
        placeholder="Data de nascimento" 
        {...register('birthDate')}
      />
      {errors.cpf && <p className={styles.errors}>{errors.cpf.message}</p>}
       <input 
        type="number" 
        placeholder="Cpf" 
        {...register('cpf')}
      />
      {errors.phone && <p className={styles.errors}>{errors.phone.message}</p>}
       <input 
        type="number" 
        placeholder="Celular"
        {...register('phone')}
      />
      {errors.phone && <p className={styles.errors}>{errors.phone.message}</p>}
       <input 
        type="email" 
        placeholder="Seu melhor e-mail" 
        {...register('email')}
      />
      {errors.cep && <p className={styles.errors}>{errors.cep.message}</p>}
       <input 
        type="number"
        placeholder="CEP" 
        {...register('cep')}
      />

      <hr />
      
      {errors.password && <p className={styles.errors}>{errors.password.message}</p>}
      <input 
        className={styles.lastInput}
        type="password"
        placeholder="Senha"
        {...register('password')}
      />

      <h2>Código do representante ou<br /> Cupom de descontos</h2>
      
      {errors.promoCod && <p className={styles.errors}>{errors.promoCod.message}</p>}
      <input
        className={styles.lastInput}
        type='text'
        placeholder='Código'
        {...register('promoCod')}
      />

      <h2>Dados do cartão</h2>

      {errors.cardName && <p className={styles.errors}>{errors.cardName.message}</p>}
      <input
        type="text"
        placeholder="Nome Completo"
        {...register('cardName')}
      />
      {errors.cardNumber && <p className={styles.errors}>{errors.cardNumber.message}</p>}
      <input
        type="text"
        placeholder="Numero do cartao"
        {...register('cardNumber')}
      />
      {errors.CardDate && <p className={styles.errors}>{errors.CardDate.message}</p>}
      <input
        type="text"
        placeholder="Date de validade (MM/AA)"
        {...register('CardDate')}
      />
      {errors.cardCodCVV && <p className={styles.errors}>{errors.cardCodCVV.message}</p>}
      <input
        style={{marginBottom:"60px"}}
        type="number"
        placeholder="Codigo de seguranca (CVV)"
        {...register('cardCodCVV')}
      />

      <button type='submit'>Contratar</button>
    </form>
  )
}