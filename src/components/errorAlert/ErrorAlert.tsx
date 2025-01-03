import Button from "../button/Button";

function ErrorAlert() {
  return (
    <div className="flex justify-center items-center w-full max-w-[1300px] h-auto">
      <div className="bg-red-700 w-full sm:w-full h-auto px-4 py-4 lg:px-[150px] flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
        {/* Breaking News Button */}
        <div>
          <Button title="Breaking news" />
        </div>
        {/* News Text */}
        <div>
          <p className="text-white text-[16px] sm:text-[20px] font-medium text-center sm:text-left">
            Kanye West says he's running for president in 2020.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorAlert;
