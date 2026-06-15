"use client";
import { useState } from "react";
import ModalVideo from "../../modals/modalVideo/ModalVideo";
import "./memoryButton.css";

export default function MemoryButton({ onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ paddingBlock: "60px" }}>
      {/* Кнопка */}
      {!open && (
        <div className="memory-trigger" onClick={() => setOpen(true)}>
          Открыть Воспоминание✨
        </div>
      )}

      {/* Модальное окно */}
      {open && (
        <ModalVideo
          visible={open}
          onClose={() => setOpen(false)}
          src="https://www.youtube.com/embed/2k5TlCipDEs?autoplay=0&mute=1&controls=1&rel=0"
        />
      )}
    </div>
  );
}
