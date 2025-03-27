export function DropdownMenu({ children }) {
    return <div className="dropdown-menu">{children}</div>;
  }
  
  export function DropdownMenuTrigger({ children, onClick }) {
    return (
      <button onClick={onClick} className="dropdown-trigger">
        {children}
      </button>
    );
  }
  
  export function DropdownMenuContent({ children }) {
    return <div className="dropdown-content">{children}</div>;
  }
  export function DropdownMenuItem({ children }) {
    return <div className="dropdown-content">{children}</div>;
  }
  export function DropdownMenuLabel({ children }) {
    return <div className="dropdown-content">{children}</div>;
  }
  export function DropdownMenuSeparator({ children }) {
    return <div className="dropdown-content">{children}</div>;
  }
  