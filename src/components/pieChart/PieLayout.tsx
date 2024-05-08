import PieChart from "../PieChart";
type TPieProsp = { id: string; label: string; value: number; color: string };

const PieLayout = () => {
  const data: TPieProsp[] = [
    {
      id: "c",
      label: "c",
      value: 162,
      color: "hsl(292, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 116,
      color: "hsl(227, 70%, 50%)",
    },
    {
      id: "php",
      label: "php",
      value: 358,
      color: "hsl(76, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 182,
      color: "hsl(258, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 313,
      color: "hsl(300, 70%, 50%)",
    },
  ];
  return (
    <div>
      <PieChart data={data} />
    </div>
  );
};

export default PieLayout;
