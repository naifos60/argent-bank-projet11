import Feature from "../../components/Feature/feature";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import chatIcon from "../../asset/img/icon-chat.png";
import moneyIcon from "../../asset/img/icon-money.png";
import securityIcon from "../../asset/img/icon-security.png";



function Home() {
    return (
      <div className="home">
         <Header />
         <Hero />
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Feature title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.">
              {<img src={chatIcon} alt="Chat Icon" className="feature-icon" />}
            </Feature>
            <Feature title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!">
              {<img src={moneyIcon} alt="Money Icon" className="feature-icon" />}
            </Feature>
            <Feature title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe.">
              {<img src={securityIcon} alt="Security Icon" className="feature-icon" />}
            </Feature>
        </section>
         <Footer />
      </div>
      ) 
    }
      
  export default Home;