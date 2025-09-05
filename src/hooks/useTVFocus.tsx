import { useEffect, useRef } from 'react';

export const useTVFocus = (isInitialFocus = false) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInitialFocus && ref.current) {
      // Auto focus en el primer elemento cuando se carga la página
      ref.current.focus();
    }
  }, [isInitialFocus]);

  const handleKeyDown = (event: KeyboardEvent | React.KeyboardEvent) => {
    const { key } = event;
    const currentElement = event.target as HTMLElement;
    
    // Navegación direccional con el control remoto
    switch (key) {
      case 'ArrowUp':
        event.preventDefault();
        focusNextElement(currentElement, 'up');
        break;
      case 'ArrowDown':
        event.preventDefault();
        focusNextElement(currentElement, 'down');
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusNextElement(currentElement, 'left');
        break;
      case 'ArrowRight':
        event.preventDefault();
        focusNextElement(currentElement, 'right');
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (currentElement && (currentElement.tagName === 'BUTTON' || currentElement.getAttribute('role') === 'button')) {
          currentElement.click();
        }
        break;
      case 'Escape':
      case 'Backspace':
        event.preventDefault();
        // Navegar hacia atrás
        window.history.back();
        break;
    }
  };

  const focusNextElement = (currentElement: HTMLElement, direction: 'up' | 'down' | 'left' | 'right') => {
    const focusableElements = Array.from(
      document.querySelectorAll('.focusable, button, [tabindex]:not([tabindex="-1"])')
    ) as HTMLElement[];

    const currentIndex = focusableElements.indexOf(currentElement);
    if (currentIndex === -1) return;

    const currentRect = currentElement.getBoundingClientRect();
    let targetElement: HTMLElement | null = null;
    let minDistance = Infinity;

    focusableElements.forEach((element) => {
      if (element === currentElement || !isElementVisible(element)) return;

      const rect = element.getBoundingClientRect();
      const distance = calculateDistance(currentRect, rect, direction);

      if (distance !== null && distance < minDistance) {
        minDistance = distance;
        targetElement = element;
      }
    });

    if (targetElement) {
      targetElement.focus();
    }
  };

  const calculateDistance = (
    currentRect: DOMRect,
    targetRect: DOMRect,
    direction: 'up' | 'down' | 'left' | 'right'
  ): number | null => {
    const currentCenterX = currentRect.left + currentRect.width / 2;
    const currentCenterY = currentRect.top + currentRect.height / 2;
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    switch (direction) {
      case 'up':
        if (targetCenterY >= currentCenterY) return null;
        break;
      case 'down':
        if (targetCenterY <= currentCenterY) return null;
        break;
      case 'left':
        if (targetCenterX >= currentCenterX) return null;
        break;
      case 'right':
        if (targetCenterX <= currentCenterX) return null;
        break;
    }

    return Math.sqrt(
      Math.pow(targetCenterX - currentCenterX, 2) +
      Math.pow(targetCenterY - currentCenterY, 2)
    );
  };

  const isElementVisible = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.width > 0 &&
      rect.height > 0 &&
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { ref, handleKeyDown };
};