import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar";
import UploadDownloadBar from "../components/UploadDownloadBar";

function Download() {
   return (
      <>
         <Navbar />
         <UploadDownloadBar />
         <BookGrid />
      </>
   );
}

export default Download;