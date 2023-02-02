import React , {useState} from 'react'
import { faqsData } from './data'
import Faq from './Faq'
import style from "./faqs.modules.css"


function Faqs() {
    const [faqs , setfaqs] = useState(faqsData)
  return (
    <main className={style.container}>
        <section className={style.faqs}>
            <h1>FaqS</h1>
            {  faqs.map(faq => <Faq key= {faq.id} {...faq} />) }

        </section>
    </main>
  )
}

export default Faqs