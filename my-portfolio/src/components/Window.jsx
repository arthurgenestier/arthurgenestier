import { useState, useEffect } from 'react';

export default function Window({ title, onClose, children, initialPosition = { x: 100, y: 100 }, isWizzing = false }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState({ 
    width: window.innerWidth < 640 ? window.innerWidth - 20 : 800, 
    height: window.innerWidth < 640 ? window.innerHeight - 100 : 800 
  });
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSize({
          width: window.innerWidth - 20,
          height: window.innerHeight - 100
        });
        setPosition({
          x: 10,
          y: 50
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
      if (isResizing && !isMaximized) {
        switch(resizeDirection) {
          case 'e':
            setSize(prev => ({ ...prev, width: Math.max(200, e.clientX - position.x) }));
            break;
          case 's':
            setSize(prev => ({ ...prev, height: Math.max(100, e.clientY - position.y) }));
            break;
          case 'se':
            setSize({
              width: Math.max(200, e.clientX - position.x),
              height: Math.max(100, e.clientY - position.y)
            });
            break;
          default:
            break;
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, isMaximized, dragOffset, position, resizeDirection]);

  const handleMouseDown = (e) => {
    if (!isMaximized && window.innerWidth >= 640) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const startResize = (direction, e) => {
    if (window.innerWidth >= 640) {
      e.preventDefault();
      e.stopPropagation();
      setIsResizing(true);
      setResizeDirection(direction);
    }
  };

  return (
    <div 
      className={`absolute bg-white shadow-lg rounded-t-lg ${
        isMaximized ? 'fixed inset-0' : ''
      } ${isWizzing ? 'animate-wiggle' : ''}`}
      style={!isMaximized ? { 
        left: window.innerWidth < 640 ? 10 : position.x, 
        top: window.innerWidth < 640 ? 50 : position.y,
        width: window.innerWidth < 640 ? 'calc(100% - 20px)' : size.width,
        height: window.innerWidth < 640 ? 'calc(100% - 100px)' : size.height,
        maxWidth: '100vw',
        maxHeight: 'calc(100vh - 60px)'
      } : undefined}
    >

      {/* Barre de titre */}
      <div 
        className="bg-gradient-to-r from-[#0058B4] to-[#3C9BF7] text-white px-3 py-1 rounded-t-lg flex items-center cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex-1">{title}</div>
        <div className="flex gap-2">
          <button className="hover:bg-[#3C9BF7] px-2">_</button>
          <button onClick={() => setIsMaximized(!isMaximized)} className="hover:bg-[#3C9BF7] px-2">□</button>
          <button onClick={onClose} className="hover:bg-red-500 px-2">×</button>
        </div>
      </div>

      {/* Contenu avec scroll */}
      <div className="overflow-y-auto bg-black" style={{ height: 'calc(100% - 32px)' }}>
        {children}
      </div>

      {/* Poignées de redimensionnement - masquées sur mobile */}
      {!isMaximized && window.innerWidth >= 640 && (
        <>
          <div
            className="absolute right-0 top-0 bottom-0 w-1 cursor-e-resize hover:bg-blue-500/50"
            onMouseDown={(e) => startResize('e', e)}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-1 cursor-s-resize hover:bg-blue-500/50"
            onMouseDown={(e) => startResize('s', e)}
          />
          <div
            className="absolute right-0 bottom-0 w-4 h-4 cursor-se-resize hover:bg-blue-500/50"
            onMouseDown={(e) => startResize('se', e)}
          />
        </>
      )}
    </div>
  );
}