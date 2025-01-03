interface ButtonProps {
 title: string;
}

const Button = ({ title }: ButtonProps) => {
 return (
   <button className="px-4 py-2 bg-white text-[#C31815] rounded hover:bg-slate-800 flex justify-center items-center">
     {title}
   </button>
 );
};

export default Button;