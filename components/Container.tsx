type ContainerProps = {
  children: React.ReactNode;
  className: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`px-5 w-full max-w-screen-md m-auto ${className}`}>
      {children}
    </div>
  );
}
