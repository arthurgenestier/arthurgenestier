import { useState, useEffect, useRef } from 'react';
import XPDesktopIcon from './XPDesktopIcon';

export default function Window({ title, icon, onClose, onMinimize, onActivate, isMinimized = false, children, initialPosition = { x: 100, y: 100 }, isWizzing = false }) {
  const windowRef = useRef(null);
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
        const bounds = windowRef.current?.getBoundingClientRect();
        if (!bounds) return;

        setPosition({
          x: Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - bounds.width)),
          y: Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - 48 - bounds.height))
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
      ref={windowRef}
      className={`absolute flex flex-col overflow-hidden border-2 border-[#0c4a9b] bg-[#ece9d8] shadow-[2px_2px_8px_rgba(0,0,0,0.55)] rounded-t-lg ${isMinimized ? 'hidden' : ''} ${
        isMaximized ? 'fixed inset-x-0 top-0 bottom-12' : ''
      } ${isWizzing ? 'animate-wiggle' : ''}`}
      onMouseDown={onActivate}
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
        className="min-h-8 px-1.5 py-1 border-b border-[#073b85] bg-gradient-to-b from-[#3e8be9] via-[#176bd2] to-[#0753b2] text-white flex items-center cursor-move select-none"
        onMouseDown={handleMouseDown}
        onDoubleClick={() => setIsMaximized(!isMaximized)}
      >
        <XPDesktopIcon name={icon} className="h-5 w-5 shrink-0 drop-shadow" />
        <div className="flex-1 truncate px-1.5 text-[13px] font-bold [text-shadow:1px_1px_1px_#17427b]">{title}</div>
        <div className="flex shrink-0 items-center gap-[3px]" onMouseDown={(event) => event.stopPropagation()} onDoubleClick={(event) => event.stopPropagation()}>
          <button type="button" onClick={onMinimize} aria-label={`Réduire ${title}`} title="Réduire" className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border border-[#c8def5] bg-gradient-to-b from-[#78b7f2] to-[#2265bf] text-white shadow-[inset_0_1px_#d7edff] hover:brightness-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white">
            <span aria-hidden="true" className="inline-block h-[2px] w-2.5 bg-white" />
          </button>
          <button type="button" onClick={() => setIsMaximized(!isMaximized)} aria-label={isMaximized ? `Restaurer ${title}` : `Agrandir ${title}`} title={isMaximized ? 'Restaurer' : 'Agrandir'} className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border border-[#c8def5] bg-gradient-to-b from-[#78b7f2] to-[#2265bf] text-white shadow-[inset_0_1px_#d7edff] hover:brightness-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white">
            <span aria-hidden="true" className="block h-2.5 w-2.5 border-2 border-white" />
          </button>
          <button type="button" onClick={onClose} aria-label={`Fermer ${title}`} title="Fermer" className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[4px] border border-[#f8aaa2] bg-gradient-to-b from-[#f88d78] to-[#ca2721] text-white shadow-[inset_0_1px_#ffd7ce] hover:brightness-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white">
            <span aria-hidden="true" className="relative block h-3 w-3">
              <span className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 -rotate-45 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Contenu avec scroll */}
      <div className="min-h-0 flex-1 overflow-y-auto bg-black">
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