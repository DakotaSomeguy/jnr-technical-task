export default function Token({ tokenData, onDelete }) {
  return (
    <div className="w-96 h-14 relative">
      <div className="w-96 h-14 left-0 top-0 absolute bg-zinc-800 rounded" />
      <div className="left-[24px] top-[21px] absolute text-white text-xs font-medium font-['Inter']">
        #{tokenData.index}
      </div>
      <img
        className="w-7 h-7 left-[61px] top-[14px] absolute rounded-full"
        src="https://via.placeholder.com/28x28"
      />
      <div className="left-[101px] top-[12px] absolute w-20">
        <div className="left-0 top-0 absolute text-white text-sm font-bold font-['Inter']">
          {tokenData.ticker}
        </div>
        <div className="left-0 top-[19px] absolute text-neutral-500 text-xs font-normal font-['Inter']">
          {tokenData.sharesTraded}
        </div>
      </div>
      <div className="left-[200px] top-[21px] absolute text-right text-white text-xs font-bold font-['Inter']">
        {tokenData.priceTraded}
      </div>

      {tokenData.changeDirectionUp ? (
        <div className="relative">
          <div className="left-[296px] top-[18px] absolute text-right text-green-500 text-xs font-bold font-['Inter'] bg-green-500 bg-opacity-10 p-1">
            {tokenData.change}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="left-[296px] top-[18px] absolute text-right text-red-500 text-xs font-bold font-['Inter'] bg-red-500 bg-opacity-10 p-1">
            {tokenData.change}
          </div>
        </div>
      )}
      <button
        className="left-[360px] top-[16px] absolute text-red-500 cursor-pointer"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
}
