import Navbar from "../components/Navbar";
import BookGrid from "../components/BookGrid";
import RootFiller from "../components/RootFiller";
import { useQuery } from "react-query";

function Main() {
   // const fetchAllSupplies = async () => {
   //    const res = await fetch("/api/edu-supplies");
   //    return res.json();
   // };

   // const { isLoading, data } = useQuery("edu-supplies", fetchAllSupplies);

   // if (isLoading) return <div>Loading...</div>;

   return (
      <div className="App">
         <Navbar />
         {/* <BookGrid supplies={data?.result} /> */}
         <RootFiller />
      </div>
   );
}

export default Main;
