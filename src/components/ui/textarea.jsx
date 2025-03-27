export function Textarea({ placeholder, value, onChange }) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="textarea"
      />
    );
  }