interface Props {
    children: React.ReactNode;
    className?: string;
  }
  
  import { twMerge } from "tailwind-merge";
  
  const Container = ({ children, className }: Props) => {
    const newClassName = twMerge(
      "max-w-screen-xl lg:mx-20 px-4 lg:px-0",
      className
    );
  
    return <div className={newClassName}>{children}</div>;
  };
  
  export default Container;