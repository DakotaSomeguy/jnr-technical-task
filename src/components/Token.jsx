export default function Token({index, icon, ticker, sharesTraded, priceTraded, change }) {
    return (
        <div className="w-96 h-14 relative">
        <div className="w-96 h-14 left-0 top-0 absolute bg-zinc-800 rounded" />
        <div className="left-[24px] top-[21px] absolute text-white text-xs font-medium font-['Inter']">
          {index}
        </div>
        <img
          className="w-7 h-7 left-[61px] top-[14px] absolute rounded-full"
          src="https://via.placeholder.com/28x28"
        />
        <div className="left-[101px] top-[12px] absolute w-20">
          <div className="left-0 top-0 absolute text-white text-sm font-bold font-['Inter']">
            {ticker}
          </div>
          <div className="left-0 top-[19px] absolute text-neutral-500 text-xs font-normal font-['Inter']">
            {sharesTraded}
          </div>
        </div>
        <div className="left-[200px] top-[21px] absolute text-right text-white text-xs font-bold font-['Inter']">
          {priceTraded}
        </div>
    
        <div className="p-0.5 left-[296px] top-[19px] absolute bg-green-500 bg-opacity-10 rounded flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="relative">
            <div className="left-[10px] top-0 absolute text-right text-green-500 text-xs font-bold font-['Inter']">
              {change}
            </div>
          </div>
        </div>
      </div>
    )
}
