import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404: Page Not Found</h1>
      <h1 className="text-2xl mb-6">¯\_(ツ)_/¯</h1>
      <Link to="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </section>
  );
};

export default ErrorPage;
