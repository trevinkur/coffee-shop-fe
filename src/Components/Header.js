import styles from "../styles/Header.module.css"
export default function Header() {

    return<header className={styles.container}>
        <div className="row">
            <div className="col-4">
                <h1 className="color-white">Start Your Day with Coffee and Good Meals</h1>
                <h3 className="color-white mb-4">We provide high quality beans, good taste, and healthy meals made 
                by love just for you. Start your day with us for a bigger smile!</h3>
                <button className="btn btn-primary px-5 py-2" 
                onClick={() => {}}
                >Get Started</button>
            </div>
        </div>
       
    </header>
}