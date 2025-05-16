type Nation = "japan" | "southeastAsia" | "taiwanHongKong" | "china" | "oceania" | "europe";

type NationSelectProps = {
  data: Nation[];
};

const NationSelect = ({ data }: NationSelectProps) => {
  const obj: { [name in Nation]: string } = {
    japan: "일본",
    southeastAsia: "동남아시아",
    taiwanHongKong: "대만/홍콩",
    china: "중국",
    oceania: "대양주",
    europe: "유럽",
  };
  return (
    <div className='relative inline-block w-52'>
      <select className='block w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-800 text-sm focus:outline-none cursor-pointer'>
        {data.map((v, i) => (
          <option key={i} value={v}></option>
        ))}
      </select>
    </div>
  );
};

export default NationSelect;
