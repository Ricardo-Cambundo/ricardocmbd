import Footer from "@/components/footer";
import Header from "@/components/header";
import '../css/header.css'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="homeBodyContainer">
      <Header />
      <div className="page">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <div className="greetings"><span style={{color: 'grey', borderRight: '2px solid #ccccccff', paddingRight: 15}}>404</span> Page not found... </div>
            <div style={{color: 'grey'}}>Nothing to see here folks...</div>
            <div onClick={() => {
                navigate('/')
            }} className="backHome" style={{marginTop: 20, color: 'grey', display: 'inline', cursor: 'pointer'}}><i className="bi bi-arrow-left"></i> back to home</div>
            <>
            
            </>
          
          </div>
                  <Footer />
      </div>

    </div>
    )
}
export default NotFound