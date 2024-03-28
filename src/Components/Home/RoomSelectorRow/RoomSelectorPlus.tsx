import { AddOutlined } from "@mui/icons-material";

export default function RoomSelectorPlus() {
  const handleButtonClick = () => {
    alert("Add Room");
  };

  return (
    <button
      data-tip="Add Room"
      className="w-7 h-7 bg-lr-gradient items-center justify-center flex text-bwhite rounded-full hover:bg-lr-gradient-blue hover:shadow-even transition-all duration-300 ease-in-out"
      onClick={handleButtonClick}
      title="Add Room"
    >
      <AddOutlined className="w-6 h-6" />
    </button>
  );
}
