import { Link } from "react-router-dom";
import PublicLayout from "@/components/layouts/PublicLayout";

const NotFound = () => {
  return (
    <PublicLayout>
      <div className="flex gap-3 flex-col justify-center items-center min-h-[83vh]">
        <h1 className="text-2xl text-black font-medium">
          404 - Page Not Found
        </h1>

        <p>The page you are looking for does not exist.</p>

        <Link to="/" className="bg-cyan-400 px-3 py-1 rounded-lg">
          <button>Go to Home</button>
        </Link>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
