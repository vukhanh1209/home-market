
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import API from "../../api";
import { isValidEmail, isValidPassword, isValidPhoneNumber, checkConfirmPassword } from "../../utils/utils"
import Modal from "../../component/UI/Modal";


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [notification, setNotification] = useState('');
  const [state, setState] = useState();
  const [displaying, setDisplaying] = useState(false);
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate();

  const registerInfo = {
    email,
    phoneNumber,
    firstName,
    lastName,
    password,
    address
  }

  const checkFilledInAllInput = () => {
    if(email !==  "" && password !== "" && phoneNumber !== "" && firstName !== "" && lastName !== "" && confirmPassword !== "" && address !== "") return true;
    return false;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkFilledInAllInput() && isValidEmail(email) && isValidPhoneNumber(phoneNumber) && isValidPassword(password) && checkConfirmPassword(password, confirmPassword)) {
      sessionStorage.setItem('register', JSON.stringify(registerInfo))
      API.post('user/register', registerInfo)
        .then(response => {
          alert(response.status)
          console.log('registerAPI',response)
          navigate('/verify')
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
          <div className="w-full md:max-w-xl lg:max-w-3xl bg-primary rounded-lg border border-primary drop-shadow-lg md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl ">
                      Tạo tài khoản
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div className="grid grid-cols-2 gap-5">
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
                            <div className="text-sm font-normal text-red-600 mt-1">Email không hợp lệ</div>
                          }
                          {
                            submit && email == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập email</div>
                          }
                      </div>
                      <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-primary ">Số điện thoại</label>
                          <input 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="phone" 
                            name="phone" 
                            id="phone" 
                            placeholder="+84" 
                            className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            required
                          />
                          {
                            phoneNumber !== "" && !isValidPhoneNumber(phoneNumber) &&
                            <div className="text-sm font-normal text-red-600 mt-1">Số điện thoại không hợp lệ</div>
                          }
                          {
                             submit && phoneNumber == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập số điện thoại</div>
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
                      <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-primary ">Xác nhận mật khẩu</label>
                        <input 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="password" 
                          name="confirm-password" 
                          id="confirm-password" 
                          placeholder="••••••••" 
                          className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                          required
                        />
                        {
                          confirmPassword !== "" && !checkConfirmPassword(password ,confirmPassword) &&
                          <div className="text-sm font-normal text-red-600 mt-1">Mật khẩu không trùng khớp</div>
                        }
                        {
                          submit && confirmPassword == "" &&
                          <div className="text-sm font-normal text-red-600 mt-1">Vui lòng xác nhận lại mật khẩu</div>
                        }
                      </div>
                      <div>
                          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-primary ">Họ</label>
                          <input 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="lastName" 
                            name="lastName" 
                            id="lastName" 
                            className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            placeholder="Nguyen" 
                            required
                          />
                          {
                            submit && lastName == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập họ</div>
                          }
                      </div>
                      <div>
                          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-primary ">Tên</label>
                          <input 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="firstName" 
                            name="firstName" 
                            id="firstName" 
                            placeholder="Khanh" 
                            className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            required
                          />
                          {
                            submit && firstName == "" &&
                            <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập tên</div>
                          }
                      </div>
                      
                      <div className="col-span-2">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-primary ">Địa chỉ</label>
                        <input 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="address" 
                          name="address" 
                          id="address" 
                          placeholder="200 Võ Thị Sáu, Quận 3, Hồ Chí Minh" 
                          className="bg-primary border-2 border-primary text-primary font-medium sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                          required=""
                        />
                        {
                          submit && address == "" &&
                          <div className="text-sm font-normal text-red-600 mt-1">Vui lòng nhập địa chỉ</div>
                        }
                      </div>
                    </div>
                    <div className="w-full flex flex-col md:items-center gap-y-2">
                      <button onClick={event => handleSubmit(event)} className="w-full md:w-80 text-white bg-green--dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Đăng ký</button>
                      <p className="text-sm font-light text-gray-500 ">
                          Bạn đã có tài khoản? <Link to="login" className="font-medium text-primary-600 hover:underline ">Đăng nhập tại đây</Link>
                      </p>
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

export default SignUpPage
