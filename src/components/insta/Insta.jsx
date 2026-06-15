import "./insta.css";
export default function Insta() {
  return (
    <div className="post">
      <div className="post-header">
        <img
          loading="lazy"
          className="avatar"
          src="/images/ava.webp"
          alt="avatar"
        />
        <span className="username">foreverlove</span>
      </div>

      <img
        loading="lazy"
        className="post-image"
        src="/images/insta.webp"
        alt="post"
      />

      <div className="post-content">
        <div className="actions">
          <span>❤️</span>
          <span>💬</span>
          <span>📤</span>
        </div>

        <p className="likes">2221 likes</p>

        <p className="description">
          <strong>foreverlove</strong> Вечная любовь
        </p>
      </div>
    </div>
  );
}
