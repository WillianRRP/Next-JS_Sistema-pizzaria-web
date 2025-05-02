import styles from './styles.module.scss';
import { X } from 'lucide-react';
export function Modalorder() {
    return (
        <dialog className={styles.dialogContainer} >
            <section className={styles.dialogContent}>
                <button className={styles.diaLogBack}>
                    <X size={40} color='#ff3f4b'/>

                </button>

                <article className={styles.container}>
                    <h2>Detalhes do pedido</h2>

                    <span className={styles.table}>
                        mesa <b>33</b>
                    </span>

                    <section className={styles.item}>
                        <span>1 - <b>Pizza catupiry</b></span>
                        <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>

                    </section>


                    <section className={styles.item}>
                        <span>1 - <b>Pizza calabresa</b></span>
                        <span className={styles.description}>Pizza de calabresa, borda recheada</span>

                    </section>

                    <button className={styles.buttonOrder}>
                        Concluir pedido
                    </button>
                </article>
            </section>
        </dialog>
    )
}