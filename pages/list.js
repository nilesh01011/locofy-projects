const List = () => {
  return (
    <div className="relative w-full flex flex-col py-2 px-0 box-border items-start justify-start text-left text-base text-gray-500 font-components-button-large">
      <div className="bg-primary-contrast w-[347px] h-9 shrink-0 flex flex-col py-1.5 px-4 box-border items-start justify-center">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Singapore - Changi (LAX)
        </div>
      </div>
      <div className="self-stretch bg-action-hover flex flex-col py-1.5 px-4 items-start justify-start">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Ninoy Aquiono International Airport (NAIA
        </div>
      </div>
      <div className="self-stretch bg-primary-contrast flex flex-col py-1.5 px-4 items-start justify-center">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Mactan International Airport (MIA)
        </div>
      </div>
      <div className="self-stretch bg-primary-contrast flex flex-col py-1.5 px-4 items-start justify-center">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Clark International Airport (CIA)
        </div>
      </div>
      <div className="bg-primary-contrast w-[347px] flex flex-col py-1.5 px-4 box-border items-start justify-center">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Charles de Gaulle Airport (CGA)
        </div>
      </div>
    </div>
  );
};

export default List;
