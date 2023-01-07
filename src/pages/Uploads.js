import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar";
import UploadDownloadBar from "../components/UploadDownloadBar";

function Upload() {
   return (
      <>
         <Navbar />
         <UploadDownloadBar />
         <BookGrid />
      </>
   );
}

export default Upload;
