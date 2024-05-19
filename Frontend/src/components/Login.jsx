import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const modalRef = useRef(null);
  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };
    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        setAuthUser({ ...authUser, user: res.data.user });
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success("Login Successful");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        closeModal();
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error:" + err.response.data.message);
      }
    }
  };

  const closeModal = () => {
    const modal = modalRef.current;
    if (modal) {
      modal.close();
    }
  };

return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal" ref={modalRef}>
          <div className="modal-box   dark:bg-slate-800 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg">Login</h3>
              {/* Email */}
              <div className="m-3">
                <span className="ml-3">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none text-black"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="m-3">
                <span className="ml-3">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md outline-none text-black"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer mt-1 duration-200"
                >
                  Login
                </button>
                <p className="mt-2">
                  Not registered?{" "}
                  <Link
                    to={"/signup"}
                    className="underline text-blue-700 mt-2 cursor-pointer hover:text-blue-500"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;