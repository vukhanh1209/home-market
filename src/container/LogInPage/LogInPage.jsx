
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import API from "../../api";
import Modal from "../../component/UI/Modal";
import { isValidEmail, isValidPassword } from "../../utils/utils";
import {setProfileToLocalStorage, clearLocalStorage} from '../../utils/auth'
import { AppContext } from "../../context/app.context";
import { clearSessionStorage, getCustomerCartFromSesstionStorage } from "../../utils/auth";

const LogInPage = () => {
  const {setProfile, setIsVerified} = useContext(AppContext); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [state, setState] = useState();
  const [displaying, setDisplaying] = useState(false);
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate();

  const logInInfo = {
    email,
    password
  }

  const checkFilledInAllInput = () => {
    if(email !==  "" && password !== "") return true;
    return false;
  }

  const addItemToCart = (item) => {
    API.post('cart/add', item)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)

    })
  }

  const addSessionToCart = (id) => {
    const cartItems = getCustomerCartFromSesstionStorage();
    cartItems.forEach(item => {
      const itemAddedUserID = {
        ...item,
        user_id: id
      }
      addItemToCart(itemAddedUserID)
    })
  }

  const handleLogIn = (id) => {
    API.get(`user/getuser?key=${id}`)
      .then(res => {
        const profile = res.data;
        setProfile(profile);
        setProfileToLocalStorage(profile)
        setIsVerified(true);
        setTimeout(() => {
          addSessionToCart(id)
          clearSessionStorage();
        }, 1000)
      })
      .catch(err => {
        console.log(err)
      })
    
    
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkFilledInAllInput() && isValidEmail(email) && isValidPassword(password)) {
      API.post('user/login', logInInfo)
        .then(res => {
          if(res.data.email != "") {
            setState(true)
            setNotification(res.data.status)
            setDisplaying(true);
            handleLogIn(res.data.id);
          } 
          else {
            setState(false);
            setNotification(res.data.status)
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
                      Đăng nhập
                  </h1>
                  <form className="space-y-4 md:space-y-10" action="#">
                    <div className="flex flex-col gap-y-6">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary ">Email</label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            placeholder="name@company.com" 
                            required
                          />
                          {
                            email !== "" && !isValidEmail(email) &&
                            <div className="text-sm font-normal text-red-600 mt-1">Email nhập vào không hợp lệ</div>
                          }
                          {
                            submit && email == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập email</div>
                          }
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-primary ">Mật khẩu</label>
                        <input 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password" 
                          name="password" 
                          id="password" 
                          placeholder="••••••••" 
                          className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                          required
                        />
                        {
                          password !== "" && !isValidPassword(password) &&
                          <div className="text-sm font-normal text-red-600 mt-1">Mật khẩu phải có ít nhất 8 kí tự, bao gồm chữ in hoa, chữ thường, số và kí tự đặc biệt</div>
                        }
                        {
                          submit && password == "" &&
                          <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập mật khẩu</div>
                        }

                      </div>
                  
                    </div>
                    <div className="w-full flex flex-col md:items-center gap-y-2">
                      <button onClick={event => handleSubmit(event)} className="w-full text-white bg-green--dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Đăng nhập</button>
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

export default LogInPage
