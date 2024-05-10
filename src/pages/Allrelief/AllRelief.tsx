import { useGetReliefsQuery } from "@/redux/api/api";
import AllReliefCard from "./AllReliefCard";

const AllRelief = () => {
  const { data: reliefs, isLoading } = useGetReliefsQuery(undefined);
  if (isLoading) {
    return <p>loading ...</p>;
  }
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1  gap-3  overflow-y-hidden ">
      {reliefs?.data?.map((relief) => (
        // console.log(relief)
        <>
          <AllReliefCard key={relief?._id} {...relief} />
        </>
      ))}
    </div>
  );
};

export default AllRelief;
