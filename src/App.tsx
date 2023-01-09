import "@app/index.css";
import useModal from "@app/components/Modal/useModal";

export default function App() {
  const { openModal } = useModal();
  return (
    <div>
      <button
        onClick={() => {
          openModal({ Component: Dummy });
        }}
      >
        open Modal
      </button>
    </div>
  );
}

const Dummy = () => {
  const { openModal } = useModal();
  return (
    <div className="h-[300px] w-[500px] bg-white">
      <div>Head</div>
      <div>Body</div>
      <div>Footer</div>
      <button
        onClick={() => {
          openModal({ Component: Dummy2 });
        }}
      >
        openModal
      </button>
    </div>
  );
};

const Dummy2 = () => {
  return (
    <div className="h-[200px] w-[400px] bg-blue-500">
      <div>Head</div>
      <div>Body</div>
      <div>Footer</div>
    </div>
  );
};
