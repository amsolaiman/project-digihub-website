import { Helmet } from "react-helmet-async";
// sections
import { HomeView } from "src/sections/home/view";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Marawi Digihub: We bring the future to your business</title>
      </Helmet>

      <HomeView />
    </>
  );
}
