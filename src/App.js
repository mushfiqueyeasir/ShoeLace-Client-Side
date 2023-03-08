import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import InventoryPage from "./page/InventoryPage";
import InventoryViewPage from "./page/InventoryViewPage";
import ManageInventoryPage from "./page/ManageInventoryPage";
import AddItemPage from "./page/AddItemPage";
import MyItemPage from "./page/MyItemPage";
import JoinPage from "./page/JoinPage";
import ErrorPage from "./page/ErrorPage";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Loading from "./components/Loading/Loading";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryViewPage />} />

        <Route path="/manageItems" element={<ManageInventoryPage />} />

        <Route path="/addItem" element={<AddItemPage user={user} />} />

        <Route path="/myItem" element={<MyItemPage user={user} />} />

        <Route path="/join" element={<JoinPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
