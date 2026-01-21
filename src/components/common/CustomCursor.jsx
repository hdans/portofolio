import { useCursor } from '../../hooks/useCursor';
import './CustomCursor.css';

const CustomCursor = () => {
  const { cursorPosition, isHovering } = useCursor();

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
