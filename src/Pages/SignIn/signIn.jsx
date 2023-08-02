import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Form from "../../components/Form/form";

function SignIn(){
    return(
      <div className="sign-in">
         <Header />
         <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <Form />
            </section>
         </main>
         <Footer />
      </div>
      ) 
    }

export default SignIn;