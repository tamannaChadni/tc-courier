import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth.js";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../api/utils";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    createUser,
    signInWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const role = form.role.value;
    const image = form.image.files[0];

    if (!name || !email || !password || !role || !image) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);

      // 1. Upload image and get image url
      const image_url = await imageUpload(image);
      console.log(image_url);

      // 2. User Registration
      const result = await createUser(email, password);
      console.log(result);

      // 3. Save username and photo in firebase
      await updateUserProfile(name, image_url);

      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();

      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to TC Courier</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-2 text-sm">
                Select Role
              </label>
              <select
                name="role"
                id="role"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
                required
              >
                <option value="" disabled selected>
                  Role
                </option>
                <option value="user">User</option>
                <option value="deliveryman">Deliveryman</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-orange-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts if you are user only
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-orange-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
