import PieChart from "../PieChart";
type TPieProsp = { id: string; label: string; value: number; color: string };

const PieLayout = () => {
  const data: TPieProsp[] = [
    {
      id: "medical",
      label: "medical",
      value: 162,
      color: "hsl(292, 70%, 50%)",
    },
    {
      id: "food",
      label: "food",
      value: 116,
      color: "hsl(227, 70%, 50%)",
    },
    {
      id: "pharmancy",
      label: "pharmancy",
      value: 358,
      color: "hsl(76, 70%, 50%)",
    },
    {
      id: "shelter",
      label: "shelter",
      value: 182,
      color: "hsl(258, 70%, 50%)",
    },
    {
      id: "medicals",
      label: "medicals",
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
