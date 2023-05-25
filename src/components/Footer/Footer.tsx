export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} ElifTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
