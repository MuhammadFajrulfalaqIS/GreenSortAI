interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 lg:px-10 md:px-6 px-4">
            {children}
        </div>
    );
};

export default Container;
