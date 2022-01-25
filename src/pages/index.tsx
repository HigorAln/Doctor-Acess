import { Formulario } from '../components/Formulario'
import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.doctorAcess}>
          <h1>Doutor Acesso</h1>
          <p className={styles.destaque}>por apenas</p>
          <h2>R$ 39,90</h2>
          <p>mensalmente por vida, você tem isso tudo.</p>
        </div>
        {/*  */}
        <div className={styles.planos}>
          <section>
            <h2>Plano de Benefícios</h2>
            <p>
              Atendimento por telemedicina 24h por 7 dias da semana,
              descontos exclusivos em exames de imagem e laboratórias em rede credenciada.
            </p>
          </section>
          {/*  */}
          <div className={styles.tableAndPrices}>
            <div>
              <h2>Doutor Acesso Base</h2>
              <p>R$ 39,90</p>
            </div>
            <section>
              <p>Telemedicina 24h/7 para Titular.</p>
            </section>
            <section className={styles.active}>
              <p>Desconto em exames de imagem.</p>
            </section>
            <section className={styles.last}>
              <p>Desconto em exames laboratoriais.</p>
            </section>
          </div>

          {/*  */}

          <div className={styles.planos}>
            <section>
              <h2>PLano de Seguros</h2>
              <p>
                Cobertura para titular e dependêntes 
                maiores de 14(anos), exceto Assitência Funeral 
                que é para todos os inscritos no plano
              </p>
            </section>

            <div className={styles.tableEssencial}>
              <div>
                <h2>Essencial</h2>
              </div>
              <section>
                <p>Morte por qualquer causa</p>
                <p>R$ 10.000.00</p>
              </section>
              <section className={styles.active}>
                <p>Invalidez por acidente</p>
                <p>R$ 10.000.00</p>
              </section>
              <section className={styles.last}>
                <p>Assistencia funeral familiar</p>
                <p>R$ 3.500.00</p>
              </section>
            </div>

            <div className={styles.formulario}>
              <h1>Contrate agora</h1>

              <Formulario />

            </div>
          </div>
        </div>
      </div>
      <p className={styles.termos}>
        {`Ao clicar no botão "Assinar plano de benefícios"
            acima, você concorda com nossos Termos de uso e 
            com nossa Declaração de privacidade, confirma ter 
            mais de 18 anos e aceita que a Doutor Acesso renovará 
            automaticamente sua assinatura e cobrará uma taxa mensal 
            (atualmente R$39,90) da sua forma de pagamento. Você pode 
            cancelar sua assinatura quando quiser para evitar novas cobranças. 
            Para cancelar, acesse “Conta” e clique em "Cancelar assinatura" `}
      </p>
      <footer className={styles.footer}>
        <img src='/footer-image.svg' alt="image in footer" />
        <p>
          Doutor Acesso está registrada sob o CNPJ 39.924.952/0001-37,
           com endereço no Rua 30 Norte, nr 04, bloco A, sala 303 parte 06 – Águas Claras –
          Brasília DF CEP 71.918-180. *O atraso no pagamento das prestações poderá acarretar na 
          perda da sua assinatura, perdendo assim todos os benefícios. A Doutor Acesso tem total 
          compromisso com simplicidade e transparência. Sabemos que não é fácil entender todos esses 
          benefícios e vantagens que podem ter o plano de assinatura Doutor Acesso, estamos à disposição 
          para esclarecê-los.
        </p>
      </footer>

    </main> 
  )
}
