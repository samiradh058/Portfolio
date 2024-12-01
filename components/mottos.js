export default function Mottos() {
  return (
    <div className="flex md:justify-between justify-around flex-row md:flex-col w-full md:col-span-5 px-4 mt-6 md:mt-2">
      <div className="self-start border-4 border-light-accent dark:border-dark-accent rounded-full w-44 h-44 flex items-center p-4 text-center text-[24px] font-semibold animate-bounce">
        Learn, adapt and grow
      </div>
      <div className="mb-[-60px] md:mb-0 self-end border-4 border-light-accent dark:border-dark-accent rounded-full w-44 h-44 flex items-center p-4 text-center text-[24px] font-semibold animate-bounce">
        Code more, worry less.
      </div>
    </div>
  );
}
