// pages/contact.tsx

export default function Contact() {
    return (
        <div className="bg-emerald-500">
            <div><h1 className="p-10 m-10 text-center font-extrabold ">Here is my what up contact number feel free to order</h1></div>
      <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-lg mb-6">
            Reach out to us on WhatsApp for any assistance or inquiries!
          </p>
          <a
            href="https://wa.me/03152958531"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 px-5 rounded-md transition duration-200"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.52 3.48A11.94 11.94 0 1 0 2.12 17.36L1 23l5.74-1.5A11.93 11.93 0 0 0 12 24a11.94 11.94 0 0 0 8.52-20.52ZM12 22.1a9.91 9.91 0 0 1-5.4-1.56l-.39-.23-3.4.89.9-3.3-.25-.4A10.06 10.06 0 1 1 22.1 12 10 10 0 0 1 12 22.1Zm5.35-6.88c-.29-.15-1.73-.86-1.99-.95s-.46-.14-.65.15a9.48 9.48 0 0 1-.92 1.14c-.17.19-.34.2-.63.07s-1.23-.45-2.34-1.44a8.7 8.7 0 0 1-1.64-2c-.18-.3 0-.46.13-.6s.3-.35.45-.53c.15-.19.2-.3.3-.5s.05-.38-.03-.53-.65-1.59-.89-2.15c-.23-.56-.47-.48-.65-.48h-.56a1.07 1.07 0 0 0-.77.36c-.26.28-.43.73-.43 1.15s.47 1.33.54 1.42a11.64 11.64 0 0 0 4.32 4.33c.6.34 1.07.45 1.43.43a2.31 2.31 0 0 0 1.12-.51 1.72 1.72 0 0 1 1-.2c.56.08 1.8.84 2.11 1 .3.15.49.23.74.14s1.19-.59 1.36-.74.24-.22.28-.34a1.39 1.39 0 0 0 .1-.67c-.04-.19-.29-.3-.58-.45Z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
      </div>
    );
  }