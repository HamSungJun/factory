import "@app/index.css";

import useModal from "@app/components/Modal/useModal";

export default function App() {
  const { openModal } = useModal();
  const openDummyModal = () => {
    openModal({ Component: Dummy });
  };
  return (
    <div>
      <button
        onClick={() => {
          openDummyModal();
        }}
      >
        open Modal
      </button>
    </div>
  );
}

const Dummy = () => (
  <div className="bg-white">
    <h1>This is Modal</h1>
  </div>
);
