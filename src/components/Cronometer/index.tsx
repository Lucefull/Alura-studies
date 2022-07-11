import Button from "../Button";
import Watch from "./Watch";
import styles from './Cronometer.module.scss';

export default function Cronometer(){
    return(
        <div className={styles.cronometer}>
            <p className={styles.title}>Escolha um card e inicie o cronometro</p>
            <div className={styles.watchWrapper}>
                <Watch/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}