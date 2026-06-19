function Main({ children }) {
  return (
    <main className="bg-[#EFEFFF] justify-center dark:bg-[#131318] dark:text-white text-black min-h-screen flex flex-col items-center py-10">
      {children}
    </main>
  );
}

export default Main;