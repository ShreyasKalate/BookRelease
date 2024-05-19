import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";


function Signup() {
  const location= useLocation()
  const navigate=useNavigate()
  const from =location.state?.from?.pathname ||"/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }

      await axios.post("http://localhost:4001/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data);
        if (res.data) {
          toast.success("Signed in Successfully");
          navigate(from,{replace:true})
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
        if (err.response) {
          console.log(err);
        toast.error("Error:"+ err.response.data.message)
        }
        
      })
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="">
          <div className="modal-box mr-6  dark:bg-slate-800 dark:text-white text-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="m-3">
                <span className="ml-3">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="m-3 dark:bg-slate-800 dark:text-white text-black">
                <span className="ml-3 ">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="m-3 dark:bg-slate-800 dark:text-white text-black">
                <span className="ml-3">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-around">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer mt-1 duration-200">
                  Signup
                </button>
                <p className="mt-2">
                  Already SignedIn?{" "}
                  <Link
                    to={"/"}
                    className="underline text-blue-700 mt-2 cursor-pointer hover:text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;