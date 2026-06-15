"use client";
import "./modalVideo.css";

export default function ModalVideo({ visible, onClose, src }) {
  if (!visible) return null; // если не видно, ничего не рендерим

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖️
        </button>
        <iframe
          src={src}
          title="Наши короткие моменты счастья"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          muted
          className="img"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}
