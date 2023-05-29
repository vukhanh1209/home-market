
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import API from "../../api";
import Modal from "../../component/UI/Modal";


const VerifyPage = () => {
  const [OTP, setOTP] = useState('');
  const [notification, setNotification] = useState('');
  const [state, setState] = useState();
  const [displaying, setDisplaying] = useState(false);
  const [submit, setSubmit] = useState(false)

  const navigate = useNavigate();
  const email = JSON.parse(sessionStorage.getItem('register')).email;
  const data = {
    otpCode: OTP,
    email
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(OTP != "") {
      API.post('user/otp', data)
        .then(res => {
          setState(res.data.otp)
          if(res.data.otp) {
            setNotification(res.data.status);
            setDisplaying(true);
            setTimeout(() => {
              navigate('/login')
              sessionStorage.clear();
            }, 2500) 
          }
          else {
            setNotification(res.data.status);
            setDisplaying(true);
  
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
    setSubmit(true);

  }


  return (
    <>
    <section className="bg-primary ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-primary ">
              HomeMarket   
          </Link>
          <div className="w-full bg-primary rounded-lg border border-primary drop-shadow-lg md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl ">
                      Xác nhận OTP
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div className="">
                      <div>
                          {/* <label htmlFor="OTP" className="block mb-2 text-sm font-medium text-primary ">OTP</label> */}
                          <input
                            value={OTP}
                            onChange={(e) => setOTP(e.target.value)}
                            type="OTP" 
                            name="OTP" 
                            id="OTP" 
                            className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            placeholder="Nhập OTP tại đây" 
                            required
                          />
                          {
                            !state && submit && OTP != "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập lại mã OTP </div>
                          }
                          {
                            submit && OTP == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập mã OTP</div>
                          }
                      </div>
                    </div>

                    <div className="w-full flex flex-col md:items-center gap-y-2">
                      <button onClick={event => handleSubmit(event)} className="w-full text-white bg-green--dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Xác nhận</button>
                    </div>
                  </form>
              </div>
          </div>
      </div>
      <Modal state={state} desc={notification} displaying={displaying} setDisplaying={setDisplaying}/>
    </section>

    </>
  )
}

export default VerifyPage
