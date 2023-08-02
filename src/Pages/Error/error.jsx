import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"

function Error(){
    return(
        <div className='error'>
            <Header />
            <h2 className='error_title' >404</h2>
            <p className='error_msg'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' className='return_link'>Retourner sur la page d’accueil</a>
            <Footer />
        </div>
    )
}

export default Error