import { verifyToken } from "@/lib/verifyToken";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const decodedToken = verifyToken(res.data.accesstoken);

      document.cookie = `accesstoken=${res.data.accesstoken}; path=/;`;

      dispatch(setUser({ user: decodedToken, token: res.data.accesstoken }));

      // Redirect to home page after successful login
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div>
      <section className="gradient-form h-full">
        <div className="">
          <div className="flex flex-wrap items-center justify-center text-neutral-200">
            <div className="w-full h-screen">
              <div className="bg-neutral-800 h-full">
                <div className="h-screen lg:flex lg:flex-wrap">
                  <div
                    className="flex items-center lg:w-7/12"
                    style={{
                      background:
                        "linear-gradient(to right, #074495, #074495, #0F4C99, #658BBB)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold text-center lg:ml-16">
                        Your Small Help can change someone's life!
                      </h4>
                      <div className="flex items-center justify-center h-full">
                        <img
                          className="h-4/5 max-w-full lg:ml-20"
                          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
                          alt="relief"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 md:px-0 lg:w-5/12 bg-neutral-800">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <Link to="/">
                          <img
                            className="mx-auto w-48"
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo"
                          />
                        </Link>
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are PH Relief Fund Team
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4 text-white">
                          Please login to your account
                        </p>
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            {...register("email")}
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white placeholder:text-neutral-300 autofill:shadow-autofill [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Enter your Email"
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.9] motion-reduce:transition-none text-neutral-400"
                          >
                            Email
                          </label>
                        </div>

                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            {...register("password")}
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white placeholder:text-neutral-300 autofill:shadow-autofill [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-400"
                          >
                            Password
                          </label>
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 shadow-black/30 hover:shadow-dark-strong focus:shadow-dark-strong active:shadow-dark-strong"
                            type="submit"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #0F4C99, #074495, #074495,#658BBB)",
                            }}
                          >
                            Log in
                          </button>

                          <a href="#!">Forgot password?</a>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <Link to="/register">
                            <p className="mb-0 me-2 text-blue-400">
                              Don't have an account?
                            </p>
                          </Link>
                          <Link to="/register">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                              data-twe-ripple-init
                              data-twe-ripple-color="light"
                              style={{
                                background:
                                  "linear-gradient(to right, #0F4C99, #074495, #074495,#658BBB)",
                              }}
                            >
                              Sign up
                            </button>
                          </Link>
                        </div>
                      </form>
                      <div className="items-center">
                        <p className="text-white">
                          Example User :: example@gmail.com
                        </p>
                        <p className="text-white">
                          example User Password:: example123
                        </p>
                        <p className="text-white">role:: user</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
