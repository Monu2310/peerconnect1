export function Avatar({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        className="avatar"
        onError={(e) => (e.target.src = "/fallback-avatar.png")}
      />
    );
  }
  
  export function AvatarFallback({ initials = "?" }) {
    return <div className="avatar-fallback">{initials}</div>;
  }

  export function AvatarImage({ initials = "?" }) {
    return <div className="avatar-image ">{initials}</div>;
  }